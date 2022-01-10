import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import CategoryList from './category-list';
import { HeaderBar } from '../../../components/header/header';
import LeafIcon from '../../../icons/leaf';
import { FlexContainer, SafeAreaContainer } from '../../../utils/app-container';
import { styles } from './style';
import DataService from '../../../services/data-service';
import { getCategoryHierarchy, SHOW_INFO_NOTIFICATION, DEFAULT_ERROR_CALLBACK, DEFAULT_MSG_CALLBACK, searchInObjArr } from '../../../utils/app-util';
import { Input } from 'native-base';
import { Loader } from '../../../components/loader/loader';
import { Colors } from '../../../theme';
import AuthService from '../../../services/auth';
import FastImage from 'react-native-fast-image';
import Axios from 'axios';

export const CategoryBrand = ({ route, navigation }) => {
    const { imgSrc, category } = route.params;
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLastComponentShow, setIsLastComponentShow] = useState(false);
    const [isBrandVisible, setIsBrandVisible] = useState(false);
    const [categoryLabel, setCategoryLabel] = useState('');
    const [brandLabel, setBrandLabel] = useState('');
    const [categoryData, setCategoryData] = useState([]);
    const [brandData, setBrandData] = useState([]);
    const [brandValue, setBrandValue] = useState('');
    const [searchText, setSearchText] = useState('');

    const Item = ({ title }) => (
        <TouchableOpacity onPress={() => {
            setBrandValue(title);
            setBrandData([]);
            setSearchText(title);
            onBrandTouched(title);
            getBrandData(searchText);
            toggleBrandVisibility();
        }}>
            <View style={styles.item}>
                <Text style={styles.title}>{title.charAt(0).toUpperCase() + title.slice(1)}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item title={item.name} />
    );


    const setCategoryFromProps = () => {
        if (category) {
            setCategoryLabel(category);
        }
    }

    const getCategoryData = () => {
        DataService.hierarchicalCategories().subscribe(
            data => {
                const transformedCatgoryArr = getCategoryHierarchy(data, 0, category);
                setCategoryData(transformedCatgoryArr);
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
            });
    }


    const getBrandData = (searchText) => {
        let cancelToken;

        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel("Operation canceled due to new request.");
        }

        cancelToken = Axios.CancelToken.source();

        if (searchText) {
            setIsLoading(true);
            DataService.brandData(searchText, { cancelToken: cancelToken.token }).subscribe(
                async data => {
                    setBrandData(data);
                    const isHaveData = searchInObjArr(data, searchText);
                    setIsLastComponentShow(isHaveData.length > 0);
                    setIsLoading(false);
                },
                error => {
                    setIsLoading(false);
                    DEFAULT_MSG_CALLBACK(error);
                });
        } else {
            setBrandData([]);
        }
    }

    const onAddBrand = () => {
        setBrandValue(searchText);
        toggleBrandVisibility();
        DataService.addBrand({ name: searchText.charAt(0).toUpperCase() + searchText.slice(1) }).subscribe(
            data => {
                setBrandValue(data.name);
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
            });
    }


    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    const toggleBrandVisibility = () => {
        setIsBrandVisible(!isBrandVisible);
        if (isBrandVisible) {
            getBrandData(searchText);
        }
    }

    const onTouched = (label) => {
        let data = { categoryName: label };
        setCategoryLabel(label);
        setIsVisible(false);
    }

    const onBrandTouched = (label) => {
        let data = { brandName: label };
        setBrandLabel(label);
        setIsBrandVisible(false);
    }

    const onSubmit = async () => {
        const userSlug = await AuthService.getUser();

        if (!categoryLabel) {
            SHOW_INFO_NOTIFICATION('Please Assign Category to Item');
            return;

        }

        if (!searchText) {
            SHOW_INFO_NOTIFICATION('Please Assign Brand to Item');
            return;
        }

        let data = {
            brandName: searchText,
            categoryName: categoryLabel,
            imageUrl: imgSrc,
            userSlug: userSlug.slug
        }

        DataService.addItem(data).subscribe(
            resp => {
                SHOW_INFO_NOTIFICATION('Item Saved Successfully');
                navigation.goBack();
                navigation.popToTop();
            },
            err => {
                DEFAULT_ERROR_CALLBACK(err);
            })
    }

    useEffect(() => setCategoryFromProps(), []);
    useEffect(() => getCategoryData(), []);

    return (
        <SafeAreaContainer>
            <FlexContainer style={{ justifyContent: 'flex-start' }}>
                <HeaderBar
                containerStyle={{top:0}}
                    backButton
                    leftClick={() => navigation.goBack()}
                    rightText={'Save'}
                    rightClick={() => { onSubmit(); }}
                    rightTxtStyle={styles.rightTxtStyle} />

                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={{ alignItems: 'center' }}
                >
                    <View style={styles.titleContainer}>
                        <FastImage
                            style={styles.imgStyle}
                            source={{
                                uri: imgSrc,
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>

                    <View style={styles.container}>
                        <View style={{ width: '85%' }}>
                            <Text style={styles.labelStyle}>{'Category*'}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={toggleVisibility}
                            style={styles.categoryContainer}>
                            <View style={styles.categoryInnerContainer}>
                                <Text style={styles.selectedTxtStyle}>{categoryLabel}</Text>
                                {isVisible ? <Image
                                    style={styles.toggleIconStyle}
                                    resizeMode='contain'
                                    source={require('../../../../assets/img/chevron-up.png')}
                                /> : <Image
                                        style={styles.toggleIconStyle}
                                        resizeMode='contain'
                                        source={require('../../../../assets/img/chevron-down.png')}
                                    />
                                }
                            </View>
                        </TouchableOpacity>

                        {isVisible &&
                            <CategoryList
                                itemList={categoryData}
                                styleObj={styles.categoryListContainer}
                                titleStyle={styles.categoryTitleStyle}
                                onSubmit={({ label }) => onTouched(label)}
                            />}
                    </View>
                    <View style={styles.brandOuterContainer}>
                        <View style={{ width: '85%' }}>
                            <Text style={styles.labelStyle}>{'Brand'}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={toggleBrandVisibility}
                            style={styles.categoryContainer}>
                            <View style={styles.brandInnerContainer}>
                                {isBrandVisible ? <Text style={styles.selectedTxtStyle}>{brandValue}</Text> :
                                    <View style={{
                                        width: '100%',
                                    }}>
                                        <View style={styles.brandContainer}>
                                            <Input placeholder='Enter here...'
                                                autoFocus={true}
                                                onChangeText={(txt) => {
                                                    setSearchText(txt);
                                                    getBrandData(txt);
                                                }}
                                                value={searchText}
                                                style={styles.inputContainer} />
                                            {isLoading && <Loader color={Colors.PRIMARY} />}
                                        </View>


                                        {searchText && !isLoading ? <FlatList
                                            style={[styles.item, {
                                                borderRadius: 8,
                                                shadowColor: '#000',
                                                shadowOffset: { width: 0, height: 0 },
                                                shadowRadius: 10,
                                                shadowOpacity: 0.16,
                                                elevation: 8
                                            }]}
                                            data={brandData}
                                            renderItem={renderItem}
                                            keyExtractor={item => item.id}
                                            ListHeaderComponent={
                                                searchText && !isLastComponentShow &&
                                                <TouchableOpacity onPress={onAddBrand}>
                                                    <View style={{ width: '85%', marginBottom: 4, marginTop: 4 }}>
                                                        <Text style={[styles.title, { marginLeft: 10 }]}>Create {searchText}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            }
                                        /> : <></>}

                                    </View>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.leafContainer}>
                        <View style={styles.leafStyle}>
                            <LeafIcon />
                        </View>
                        <Text style={styles.leafTxtStyle}>
                            This will allow us to help brands track and reduce their carbon footprint
                        </Text>
                    </View>

                </ScrollView>
            </FlexContainer>
        </SafeAreaContainer >
    );
}

export default CategoryBrand;
