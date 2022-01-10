import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Loader } from '../../../components/loader/loader';
import { BottomHalfModal } from '../../../components/modals/bottom-half-modal/bottomhalf-modal';
import { CancelIcon } from '../../../icons/cancel';
import DataService from '../../../services/data-service';
import { Colors, Fonts, Mixins } from '../../../theme';
import { DEFAULT_ERROR_CALLBACK, SHOW_INFO_NOTIFICATION } from '../../../utils/app-util';
import EditCategoryList from './edit-catgeory-list';
import { styles } from './style';
import PubSub from 'pubsub-js';
import { AppConstants } from '../../../utils/app-constants';

export const EditCategoryModal = ({ isVisible, onClose, parentCategoryName, childCategoriesArr, isClient }) => {

    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [itemList, setItemList] = useState([]);
    const [UpdateCategoryList, setUpdateCategoryList] = useState([]);
    const [isCategoryUpdate, setIsCategoryUpdate] = useState(false);

    const getCategoryData = () => {
        setIsLoading(true);
        DataService.getChildCategories(page, parentCategoryName).subscribe(
            resp => {
                let transformArr = resp.content.map((item, index) => {
                    item.index = index;
                    item.checked = childCategoriesArr.filter(obj => obj.title === item.name).length > 0;
                    return item;
                })
                setItemList(transformArr);
                setIsLoading(false);
            },
            error => {
                setIsLoading(false);
                DEFAULT_ERROR_CALLBACK(error);
            }
        )
    }

    const onModalClose = () => {
        onClose();
        if (isCategoryUpdate) {
            DataService.updateMyHierachicalCategory(parentCategoryName, UpdateCategoryList).subscribe(
                data => {
                    setIsCategoryUpdate(false);
                    PubSub.publish(AppConstants.TOPICS.REFRESH_WARDROBE, AppConstants.TOPICS.REFRESH_WARDROBE);
                },
                error => {
                    DEFAULT_ERROR_CALLBACK(error);
                }
            );
        }
    }

    const onUpdateCategoryList = ({ list, status }) => {
        setUpdateCategoryList(list);
        setIsCategoryUpdate(true);
    }

    const BodyComponent = () => {
        return (
            <View style={styles.editModalContainer}>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={rootStyles.contentContainer}>
                    <Text style={rootStyles.modalHeaderStyle}>{`Edit Visible ${parentCategoryName}`}</Text>
                </View>
                <Text style={rootStyles.txtStyle}>What items categories would you like on your Homescreen?</Text>
                {isLoading ?
                    <View style={[Mixins.FLEX]}>
                        <Loader size={30} color={Colors.PRIMARY} />
                    </View> :
                    <EditCategoryList
                        itemList={itemList}
                        parentCategoryName={parentCategoryName}
                        onUpdateCategoryList={onUpdateCategoryList}
                    />}
            </View>
        );
    }

    useEffect(() => getCategoryData(), [parentCategoryName]);

    return (
        <BottomHalfModal
            isVisible={isVisible}
            body={<BodyComponent />}
            onSwipeHide={onModalClose}
        />
    );
}

const rootStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 25,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    contentContainer: {
        marginHorizontal: 30,
        marginTop: 25,
        marginBottom: 35,
        alignItems: 'center',
    },
    lineContainer: {
        width: '100%',
        alignItems: 'center'
    },

    line: {
        height: 3.5,
        borderRadius: 10,
        width: heightPercentageToDP('5.2%'),
        alignItems: 'center',
        backgroundColor: '#D0D0D0'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    modalHeaderStyle: {
        color: '#80838C',
        fontSize: heightPercentageToDP('2.1%'),
        fontFamily: Fonts.MEDIUM
    },
    cancelContainer: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtStyle: {
        color: Colors.LABEL,
        fontSize: heightPercentageToDP('2.2%'),
        fontFamily: Fonts.MEDIUM,
        lineHeight: heightPercentageToDP('3.2%'),
        width: '92%', alignSelf: 'center'
    }
})

export default EditCategoryModal;
