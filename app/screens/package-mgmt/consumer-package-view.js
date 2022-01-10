import { ScrollableTabBar, ScrollableTabView } from '@valdio/react-native-scrollable-tabview';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { HeaderBar } from '../../components/header/header';
import { Loader } from '../../components/loader/loader';
import { DeliveryIcon } from '../../icons/delivery';
import DataService from '../../services/data-service';
import { Colors, Fonts, Typography } from '../../theme';
import { SafeAreaContainer } from '../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK, heightIntoDP } from '../../utils/app-util';
import { VirtualIcon } from '../../icons/virtual';


export const ConsumerPackageView = ({ route, navigation }) => {
    let { pckgColor, pckgTitle, specialityKey } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [pckgListItem, setPckgListItem] = useState([]);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [isSeeMore, setIsSeeMore] = useState(false);

    const fetchPackageDetails = () => {
        setIsLoading(true);
        DataService.getPackageDetails(specialityKey, pckgTitle).subscribe(
            (data) => {
                setPckgListItem(Object.values(data));
                setIsLoading(false);
            },
            error => {
                setIsLoading(false);
                DEFAULT_ERROR_CALLBACK(error);
            }
        )
    }

    const toggleSeeMoreClick = () => {
        setIsSeeMore(!isSeeMore);
    }

    useEffect(() => {
        fetchPackageDetails();
    }, []);


    return (<SafeAreaContainer>
        <ScrollView style={{ width: '100%', flex: 1 }}
            showsVerticalScrollIndicator={false}>
            <HeaderBar
                containerStyle={{ top: 0, position: 'relative' }}
                backButton
                leftClick={() => {
                    navigation.goBack();
                }}
            />

            <View style={{ width: '85%', alignSelf: 'center', marginTop: heightIntoDP(20) }}>
                <View style={{ width: '100%', height: heightIntoDP(230), backgroundColor: pckgColor, borderRadius: 36, marginBottom: heightIntoDP(26) }}>
                    <FastImage
                        style={{ width: '100%', height: '100%' }}
                        source={{
                            uri: pckgListItem[currentTabIndex] ? pckgListItem[currentTabIndex].selectedPackageDetails.iconUrl : null,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <Text style={styles.titleStyle}>{pckgTitle}</Text>
            </View>

            {isLoading ?
                <Loader size={30} color={pckgColor} /> :
                <ScrollableTabView
                    activeIndex={0}
                    renderTabBar={() => (
                        <ScrollableTabBar
                            style={styles.scrollStyle}
                            tabStyle={styles.tabStyle}
                        />
                    )}
                    tabBarTextStyle={{ fontSize: Typography._16, fontFamily: Fonts.BOLD }}
                    tabBarInactiveTextColor={'#B0B0B0'}
                    tabBarActiveTextColor={pckgColor}
                    tabBarUnderlineStyle={[styles.underlineStyle, { backgroundColor: pckgColor }]}
                    initialPage={0}
                    onChangeTab={(tab) => { setCurrentTabIndex(tab.i) }}
                    showsHorizontalScrollIndicator={false}
                >
                    {pckgListItem.map((item, index) =>
                        <ScrollView key={index} tabLabel={`Rs. ${item.cost}`}>
                            <View style={styles.itemContainer}>
                                <View style={styles.deliveryContentContainer}>
                                    <View style={[styles.deliveryContainer, { marginRight: 7 }]}>
                                        <Text style={styles.deliveryLabelStyle}>Delivery Time</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                            <DeliveryIcon color={pckgColor} />
                                            <Text style={styles.deliveryTxtStyle}>{item.duration.value} {item.duration.unit}</Text>
                                        </View>
                                    </View>
                                    <View style={[styles.deliveryContainer, { marginLeft: 7 }]}>
                                        <Text style={styles.deliveryLabelStyle}>Location</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                            <VirtualIcon color={item.isVirtual ? pckgColor : Colors.SECONDARY_TEXT} />
                                            <Text style={styles.deliveryTxtStyle}>Virtual</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.pckgPropertyStyle}>Why Do It</Text>
                                {isSeeMore ?
                                    <Text style={{ marginVertical: 14, color: '#979797', fontSize: Typography._12, fontFamily: Fonts.ROMAN, lineHeight: Typography._18 }}>{item.whyText}</Text> :
                                    <Text numberOfLines={2} ellipsizeMode='tail' style={{ marginVertical: 14, color: '#979797', fontSize: Typography._12, fontFamily: Fonts.ROMAN, lineHeight: Typography._18 }}>{item.whyText}</Text>
                                }

                                {isSeeMore ? <Text style={styles.pckgPropertyStyle}>What They Get</Text> : <></>}
                                {isSeeMore ? item.deliverables.map((resp, index) => (
                                    <Text key={index} style={{ marginTop: 14, color: '#979797', fontSize: Typography._12, fontFamily: Fonts.ROMAN, lineHeight: Typography._18 }}>{resp}</Text>
                                )) : <></>}

                                <Text style={{ color: pckgColor, fontSize: Typography._14, fontFamily: Fonts.HEAVY, alignSelf: 'center', marginTop: isSeeMore ? 18 : 0 }} onPress={toggleSeeMoreClick}>{isSeeMore ? 'Hide' : 'See more...'}</Text>
                                {isSeeMore && <View style={{ height: 50 }} />}

                            </View>
                        </ScrollView>
                    )}
                </ScrollableTabView>}
        </ScrollView>
    </SafeAreaContainer>)
}

export const styles = StyleSheet.create({
    scrollStyle: { flex: 1 },
    tabStyle: {
    },
    titleStyle: {
        fontSize: Typography._28,
        fontFamily: Fonts.BOLD,
        color: Colors.LABEL,
        textAlign: 'center',
        marginBottom: 16
    },
    itemContainer: {
        flex: 1,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center'
    },
    deliveryContentContainer: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 24
    },
    deliveryContainer: {
        width: '48%',
        padding: 16,
        height: heightIntoDP(100),
        borderColor: '#F2F2F2',
        borderWidth: 1,
        borderRadius: 18
    },
    deliveryLabelStyle: {
        color: '#B0B0B0',
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN
    },
    deliveryTxtStyle: {
        fontSize: Typography._18,
        fontFamily: Fonts.MEDIUM,
        marginLeft: 14,
        textTransform: 'capitalize',
        color: Colors.SECONDARY_TEXT
    },
    pckgPropertyStyle: {
        color: Colors.LABEL,
        fontSize: Typography._16,
        fontFamily: Fonts.HEAVY
    }
});

export default ConsumerPackageView;