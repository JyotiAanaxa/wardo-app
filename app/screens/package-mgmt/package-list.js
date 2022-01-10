import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import IconButton from '../../components/buttons/icon-button';
import { HeaderBar } from '../../components/header/header';
import { Heading } from '../../components/heading/heading';
import { Loader } from '../../components/loader/loader';
import { NextIcon } from '../../icons/next';
import DataService from '../../services/data-service';
import { Colors, Fonts, Typography } from '../../theme';
import { AppConstants } from '../../utils/app-constants';
import { SafeAreaContainer } from '../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK, heightIntoDP, widthIntoDP, currencyFormatter } from '../../utils/app-util';

export const PackageList = ({ route, navigation }) => {
    let { pckgColor, isShow, pckgTitle, specialityKey, userObj } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [pckgListItem, setPckgListItem] = useState([]);

    const convertObjIntoFlatListObj = (obj) => {
        let keys = Object.keys(obj);
        let values = Object.values(obj);
        let temp = [];
        for (let i = 0; i < keys.length; i++) {
            let data = {};
            data.title = keys[i];
            data.count = values[i].count;
            data.imageUrl = values[i].imageUrl;
            data.maxCost = values[i].maxCost;
            data.minCost = values[i].minCost;
            temp.push(data);
            data = {};
        }
        return temp;
    }

    const fetchPackageDetails = () => {
        setIsLoading(true);
        DataService.getPackageStats(specialityKey, userObj.slug).subscribe(
            (data) => {
                const resp = convertObjIntoFlatListObj(data);
                setPckgListItem(resp);
                setIsLoading(false)
            },
            error => {
                setIsLoading(false);
                console.log(error.response.data);
                DEFAULT_ERROR_CALLBACK(error);
            }
        )
    }


    const Item = ({ item }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('PackageView', {
                pckgColor: pckgColor,
                pckgTitle: item.title,
                specialityKey: specialityKey,
                isShow: isShow,
                userData: userObj
            })
        }}>
            <View style={localStyles.pckgContainer}>

                <View style={{ width: '30%', padding: 16, justifyContent: 'center' }}>
                    <FastImage
                        style={{ width: '100%', height: '100%', aspectRatio: 0.7 }}
                        source={{
                            uri: item.imageUrl,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />

                </View>
                <View style={{ width: '60%', justifyContent: 'center', paddingLeft: 20 }}>
                    <View>
                        <Text style={localStyles.pckgTitleStyle}>{item.title}</Text>
                        <Text style={[localStyles.amountStyle, { color: pckgColor }]}>{item.maxCost === item.minCost ? 'Starting from Rs. ' + currencyFormatter(item.minCost) : `Rs. ${currencyFormatter(item.minCost)} - Rs. ${currencyFormatter(item.maxCost)}`}</Text>
                        <Text style={localStyles.availableStyle}>{`${item.count}`} Available</Text>
                    </View>
                </View>
                <View style={{ width: '10%', height: heightIntoDP(136), justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <IconButton
                        buttonStyle={{ height: heightIntoDP(30), width: widthIntoDP(30), marginBottom: 6 }}
                        iconComponent={<NextIcon color={pckgColor} />}
                        onSubmit={() => {
                            navigation.navigate('PackageView', {
                                pckgColor: pckgColor,
                                pckgTitle: item.title,
                                specialityKey: specialityKey,
                                isShow: isShow,
                                userData: userObj
                            })
                        }}
                    />

                </View>
            </View>
        </TouchableOpacity>
    );

    useEffect(() => {
        fetchPackageDetails();
    }, []);


    return (<SafeAreaContainer>
        <HeaderBar
            containerStyle={{ top: 0, position: 'relative' }}
            backButton
            leftClick={() => {
                navigation.goBack();
            }}
            rightClick={isShow ? () => { } : () => {
                navigation.navigate('PackageMgmt', {
                    pckgTitle: pckgTitle,
                    pckgColor: pckgColor,
                    specialityKey: specialityKey
                });
            }}
            rightText={isShow ? '' : 'Create New'}
            rightTxtStyle={localStyles.rightTxtStyle}
        />

        <Heading
            title={pckgTitle}
            subTitle={'Select a package to view details'}
            containerStyle={{ width: '100%', alignItems: 'center', marginTop: heightIntoDP(10) }}
            style={{ fontSize: Typography._24, justifyContent: 'center', marginLeft: 10 }}
        />

        <View style={{ width: '85%', alignSelf: 'center', marginTop: 20, flex: 1 }}>
            <FlatList
                style={{ marginBottom: heightPercentageToDP('9%'), flex: 1 }}
                containerStyle={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
                data={pckgListItem}
                renderItem={({ item }) => (
                    <Item item={item} />
                )}
                ListEmptyComponent={!isLoading ?
                    <Text style={localStyles
                        .msgStyle}>No items found</Text> :
                    <Loader color={Colors.PRIMARY} size={30} />}
                keyExtractor={(item, index) => index}
                extraData={pckgListItem}
            />
        </View>

    </SafeAreaContainer>)
}

export const localStyles = StyleSheet.create({
    titleStyle: {
        fontSize: Typography._18,
        fontFamily: Fonts.HEAVY,
        color: Colors.LABEL
    },
    saveBtnContainer: {
        marginTop: 20,
        width: widthIntoDP(270),
        position: 'absolute',
        bottom: 0, marginBottom: 20,
        height: heightIntoDP(60),
        borderRadius: 18,
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.12
    },
    saveContainer: {
        position: 'absolute',
        width: '100%',
        opacity: 1,
        height: heightIntoDP(100),
        backgroundColor: Colors.WHITE,
        opacity: 0.6,
        bottom: 0,
        zIndex: 0
    },
    pckgContainer: {
        width: '100%',
        alignSelf: 'center',
        height: heightIntoDP(136),
        borderRadius: 18,
        backgroundColor: '#FAFAFA',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: heightIntoDP(16)
    },
    pckgTitleStyle: {
        fontSize: Typography._17,
        fontFamily: Fonts.HEAVY,
        color: Colors.LABEL
    },
    amountStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.HEAVY,
        marginVertical: Typography._14
    },
    availableStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        color: '#979797'
    },
    switchTitle: {
        fontSize: Typography._16,
        fontFamily: Fonts.MEDIUM,
        color: Colors.LABEL
    },
    switchSubTitle: {
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.SECONDARY_TEXT,
        marginTop: 6
    },
    rightTxtStyle: {
        fontSize: Typography._16,
        fontFamily: Fonts.HEAVY,
        color: Colors.PRIMARY
    },
    msgStyle: {
        fontSize: Typography._15,
        color: Colors.SECONDARY_TEXT,
        marginTop: 20,
        textTransform: 'capitalize',
        fontFamily: Fonts.ROMAN,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: heightPercentageToDP('30%')
    },
});

export default PackageList;