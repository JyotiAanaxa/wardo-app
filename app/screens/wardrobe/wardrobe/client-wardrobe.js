import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, Text, Platform } from 'react-native';
import { SafeAreaContainer } from '../../../utils/app-container';
import ModalOption from './modal-option';
import { HeaderBar } from '../../../components/header/header';
import { HangerIcon } from '../../../icons/hanger';
import { Heading } from '../../../components/heading/heading';
import { MyCategoryList } from './my-category-list';
import { styles } from './style.js';
import DataService from '../../../services/data-service';
import { DEFAULT_ERROR_CALLBACK, pluralizer, widthIntoDP } from '../../../utils/app-util';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AuthService, { CameraInstruction } from '../../../services/auth';
import { AppConstants } from '../../../utils/app-constants';
import PubSub from 'pubsub-js';
import { Loader } from '../../../components/loader/loader';
import { Colors, Mixins } from '../../../theme';
import { EditCategoryModal } from './edit-category-modal';
import { ProfileIcon } from '../../../icons/profile-icon';
import { WardrobeContext } from '../../../context/wardrobe-context';
import useItemCountAPI from '../../../hooks/use-item-count-api';
import FastImage from 'react-native-fast-image';

export const ClientWardrobe = ({ route }) => {
    const { isClient = false, clientName = null, clientSlug } = route.params || {};
    console.log(clientSlug);
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(false);


    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [myHierarchicalItem, setMyHierarchicalItem] = useState([]);

    const { itemCount, fetchItemCount } = useItemCountAPI(setIsLoading);
    const [isShow, setIsShow] = useState(null);
    const [category, setCategory] = useState(null);
    const [parentCategoryName, setParentCategoryName] = useState(null);
    const [checkedChildCategoryList, setCheckedChildCategoryList] = useState([]);
    const [isCategoryUpdate, setIsCategoryUpdate] = useState(false);

    const openEditCategories = (parentCategoryName, index) => {
        let childCategoriesArr = myHierarchicalItem[index].data;
        setCheckedChildCategoryList(childCategoriesArr);
        setParentCategoryName(parentCategoryName);
        setIsEditVisible(true);
    }

    const closeEditCategories = () => {
        setIsEditVisible(false);
    }

    const onSwipeHide = () => {
        setIsVisible(false);
    }

    const onModalOpen = () => {
        setIsVisible(true);
    }

    const onSubmit = (img) => {
        setIsVisible(false);
        navigation.navigate('RetakeContinue', {
            imgSrc: img,
            category: category || null
        });
    }

    const onGallerySubmit = (img) => {
        setIsVisible(false);
        navigation.navigate('CategoryBrand', {
            imgSrc: img,
            category: category || null
        });
    }

    const onCameraClick = () => {
        setIsVisible(false);
        navigation.navigate('AddFirstItem', { category: category || null });
    }

    const convertIntoComponentHierarchyObj = (data, index) => {
        let transformArrObj = [];
        let categoriesArr = Object.keys(data);
        let childCategoriesArr = Object.values(data);
        for (let i = index; i < categoriesArr.length; i++) {
            let itemInfo = {
                title: categoriesArr[i],
                index: i.toString(),
                data: []
            }
            for (let j = 0; j < childCategoriesArr[i].length; j++) {
                let itemSubInfo = {
                    id: j.toString(),
                    title: childCategoriesArr[i][j].name,
                    iconUrl: childCategoriesArr[i][j].iconUrl,
                }
                itemInfo.data.push(itemSubInfo);
            }
            transformArrObj.push(itemInfo);
        }
        return transformArrObj;
    }

    const getMyHierarchyData = () => {
        setIsLoading(true);
        DataService.myHierarchicalItem(clientSlug).subscribe(
            data => {
                const transformedCatgoryArr = convertIntoComponentHierarchyObj(data, 0);
                setMyHierarchicalItem(transformedCatgoryArr);
                setIsLoading(false);
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
                setIsLoading(false);
            });
    }

    // const getMyItemCount = () => {
    //     fetchItemCount();
    // }

    const subjectSubscribe = () => {
        CameraInstruction.subscribe(async () => {
            const isShow = await AuthService.getFirstItemShowValue();
            setIsShow(isShow);
        })
    }

    // const refreshCount = (msg, data) => {
    //     getMyItemCount();
    // };

    // useEffect(() => getMyItemCount(), []);
    useEffect(() => getMyHierarchyData(), []);
    useEffect(() => subjectSubscribe(), [CameraInstruction]);
    // useEffect(() => {
    //     PubSub.subscribe(AppConstants.TOPICS.REFRESH_MY_WARDROBE, refreshCount)
    // });

    useEffect(() => {
        PubSub.subscribe(AppConstants.TOPICS.REFRESH_WARDROBE, () => {
            getMyHierarchyData();
        });
        return () => {
            PubSub.unsubscribe(AppConstants.TOPICS.REFRESH_WARDROBE);
        }
    });

    return (
        <SafeAreaContainer style={{ alignItems: 'center', padding: 20 }}>
            <HeaderBar
                backButton
                leftClick={() => { navigation.goBack() }}
                rightIcon={isClient ? <></> : <HangerIcon />}
                rightClick={isClient ? () => { } : () => {
                    setCategory(null);
                    onModalOpen();
                }}
            />
            <View style={{ width: Platform.OS === 'android' ? '95%' : '85%', marginTop: Platform.OS === 'android' ? 10 : 32, position: 'relative' }}>
                {!isClient && <View style={styles.yellowContainer}>
                    <FastImage
                        style={{ height: '100%', width: '100%', alignSelf: 'center' }}
                        source={require('../../../../assets/img/texture.png')}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>}
                <Heading title={`${isClient ? clientName : 'My'} Wardrobe`}
                    style={'#382D7C'}
                    subTitle={`${itemCount} Item${pluralizer(itemCount)}`} />
            </View>

            {isLoading ?
                <View style={[Mixins.FLEX]}>
                    <Loader size={40} color={Colors.PRIMARY} />
                </View> :
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, width: Platform.OS === 'android' ? '95%' : '88%' }} containerStyle={{ justifyContent: 'center', alignItems: 'center' }} >
                    <MyCategoryList
                        itemList={myHierarchicalItem}
                        styleObj={styles.categoryListContainer}
                        titleStyle={styles.categoryTitleStyle}
                        navigation={navigation}
                        isShow={isShow}
                        onEditIconClick={openEditCategories}
                        isClient={isClient}
                        clientSlug={clientSlug}
                    />
                </ScrollView>}


            <EditCategoryModal
                isVisible={isEditVisible}
                onClose={closeEditCategories}
                parentCategoryName={parentCategoryName}
                childCategoriesArr={checkedChildCategoryList}
            />

            <ModalOption
                isVisible={isVisible}
                onSwipeHide={onSwipeHide}
                isShow={isShow}
                onCameraClick={onCameraClick}
                onSubmit={({ image }) => onSubmit(image)}
                onGallerySubmit={({ image }) => onGallerySubmit(image)}
            />
        </SafeAreaContainer>
    );
}

export default ClientWardrobe;
