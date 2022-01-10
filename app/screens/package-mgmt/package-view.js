import { ScrollableTabBar, ScrollableTabView } from '@valdio/react-native-scrollable-tabview';
import React, { useEffect, useRef, useState } from 'react';
import { Linking, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconButton from '../../components/buttons/icon-button';
import ThemeButton from '../../components/buttons/theme-button';
import { HeaderBar } from '../../components/header/header';
import { Loader } from '../../components/loader/loader';
import { DefModal } from '../../components/modals/default-modal/default-modal';
import { DeliveryIcon } from '../../icons/delivery';
import { RequestSentIcon } from '../../icons/request-sent';
import { VirtualIcon } from '../../icons/virtual';
import { WhatsappIcon } from '../../icons/whatsapp';
import DataService from '../../services/data-service';
import { Colors, Fonts, Typography } from '../../theme';
import { SafeAreaContainer } from '../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK, getFirstName, heightIntoDP, SHOW_INFO_NOTIFICATION, transformToCapitalize, widthIntoDP } from '../../utils/app-util';


export const PackageView = ({ route, navigation }) => {
    let { pckgColor, pckgTitle, specialityKey, isShow, userData } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [pckgListItem, setPckgListItem] = useState([]);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [isSeeMore, setIsSeeMore] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const tabRef = useRef();

    const toggleConfirmModal = () => {
        setIsVisible(!isVisible);
    }

    const fetchPackageDetails = () => {
        setIsLoading(true);
        DataService.getPackageDetails(specialityKey, pckgTitle, userData.slug).subscribe(
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

    const onRequestSent = () => {
        setTimeout(() => {
            if (userData) {
                const whatsappmsg = 'Hello how are you';
                const mobileNumber = userData.mobileNumber;
                Linking.openURL('whatsapp://send?text=' + whatsappmsg + '&phone=' + mobileNumber);
            }
        }, 500);
        toggleConfirmModal();
    }

    const onWhatsappClick = () => {
        if (userData) {
            const mobileNumber = userData.mobileNumber;
            Linking.openURL('whatsapp://send?phone=' + mobileNumber);
        }
    }

    useEffect(() => {
        fetchPackageDetails();
    }, []);

    const onCheckAvailability = (item) => {
        if (item.isCurrentlyAvailable) {
            if (userData) {
                const whatsappmsg = `I am interested in booking your Rs. ${item.cost} ${pckgTitle} package on Wardo.`;
                const mobileNumber = userData.mobileNumber;
                Linking.openURL('whatsapp://send?text=' + whatsappmsg + '&phone=' + mobileNumber);
            }
            // toggleConfirmModal();
        } else {
            SHOW_INFO_NOTIFICATION('Currently this package is unavailable');
        }
    }

    const BodyComponent = () => {
        return (<View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
            <RequestSentIcon />
            <Text style={{ fontSize: Typography._20, fontFamily: Fonts.BOLD, color: Colors.LABEL, marginTop: 10 }}>Request Sent</Text>
            <Text style={{ marginTop: 8, marginBottom: 28, fontSize: Typography._12, fontFamily: Fonts.MEDIUM, color: Colors.SECONDARY_TEXT, width: '85%', lineHeight: Typography._18, textAlign: 'center' }}>
                {transformToCapitalize(getFirstName(userData.name))} will shortly get back to you through chat
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <ThemeButton
                    buttonStyle={{ width: widthIntoDP(134), height: heightIntoDP(50), borderRadius: 16, justifyContent: 'center', alignItems: 'center', borderColor: Colors.PRIMARY, borderWidth: 1, backgroundColor: Colors.PRIMARY, marginLeft: 11 }}
                    label={'Done'}
                    labelStyle={{ fontSize: Typography._14, fontFamily: Fonts.MEDIUM, color: Colors.WHITE }}
                    onSubmit={onRequestSent}
                />
            </View>
        </View>);
    };


    return (<SafeAreaContainer>
        <HeaderBar
            containerStyle={{ top: 0, position: 'relative' }}
            backButton
            leftClick={() => {
                navigation.goBack();
            }}
        />

        <View style={{ width: '85%', marginTop: heightIntoDP(10), alignSelf: 'center', height: heightIntoDP(220), backgroundColor: pckgColor, borderRadius: 36, marginBottom: heightIntoDP(26), justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '100%', alignSelf: 'center', backgroundColor: pckgColor, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 36, padding: 30 }}>
                <FastImage
                    style={{ height: '100%', width: '100%', aspectRatio: 1 }}
                    source={{
                        uri: pckgListItem[currentTabIndex] ? pckgListItem[currentTabIndex].selectedPackageDetails.iconUrl : null,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
        </View>

        {isLoading ?
            <Loader size={30} color={pckgColor} /> :
            <View style={{ flex: 1, width: '85%', alignSelf: 'center', justifyContent: 'center' }}>
                <Text style={styles.titleStyle}>{pckgTitle}</Text>
                <ScrollableTabView
                    style={{ flex: 1, width: '100%' }}
                    // activeIndex={0}
                    renderTabBar={() => (
                        <ScrollableTabBar
                            style={styles.scrollStyle}
                            tabStyle={styles.tabStyle}
                        />
                    )}
                    tabBarTextStyle={{ fontSize: Typography._16, fontFamily: Fonts.BOLD, fontWeight: 'normal' }}
                    tabBarInactiveTextColor={'#B0B0B0'}
                    tabBarActiveTextColor={pckgColor}
                    tabBarUnderlineStyle={[styles.underlineStyle, { backgroundColor: pckgColor }]}
                    // initialPage={0}
                    onChangeTab={(tab) => {
                        const offset = tab.i * tabRef.current.state.containerWidth;

                        tabRef.current.scrollView.scrollTo({ x: offset, y: 0, animated: true })

                        setCurrentTabIndex(tab.i);
                    }}
                    showsHorizontalScrollIndicator={false}
                    ref={(tabView) => { tabRef.current = tabView; }}
                >
                    {pckgListItem.map((item, index) =>
                        <View flex={1} key={index} tabLabel={`Rs. ${item.cost}`}>
                            <ScrollView
                                style={{ width: '100%' }}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={[{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }]}>
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
                                                <VirtualIcon color={pckgColor} />
                                                <Text style={styles.deliveryTxtStyle}>{item.isVirtual ? 'Virtual' : 'In person'}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={styles.pckgPropertyStyle}>Why Do It</Text>
                                    {isSeeMore ?
                                        <Text style={{ marginVertical: 14, color: '#979797', fontSize: Typography._12, fontFamily: Fonts.ROMAN, lineHeight: Typography._18 }}>{item.whyText}</Text> :
                                        <Text numberOfLines={2} ellipsizeMode='tail' style={{ marginVertical: 14, color: '#979797', fontSize: Typography._12, fontFamily: Fonts.ROMAN, lineHeight: Typography._18 }}>{item.whyText}</Text>
                                    }

                                    {/* {isSeeMore ? <Text style={styles.pckgPropertyStyle}>What They Get</Text> : <></>}
                                    {isSeeMore ? item.deliverables.map((resp, index) => (
                                        <Text key={index} style={{ marginTop: 14, color: '#979797', fontSize: Typography._12, fontFamily: Fonts.ROMAN, lineHeight: Typography._18 }}>{resp}</Text>
                                    )) : <></>} */}

                                    <Text style={{ color: pckgColor, fontSize: Typography._14, fontFamily: Fonts.HEAVY, alignSelf: 'center' }} onPress={toggleSeeMoreClick}>{isSeeMore ? 'Hide' : 'See more...'}</Text>
                                    <View style={{ height: 20 }} />

                                </View>
                                {isShow && <View style={styles.availableContainer}>
                                    <ThemeButton
                                        buttonStyle={styles.availableBtnStyle}
                                        label={'Check Availability'}
                                        labelStyle={styles.labelStyle}
                                        onSubmit={() => { onCheckAvailability(item) }}
                                    />
                                    <IconButton
                                        buttonStyle={styles.callBtnStyle}
                                        iconComponent={<WhatsappIcon />}
                                        onSubmit={onWhatsappClick}
                                    />
                                </View>}
                            </ScrollView>
                        </View>
                    )}
                </ScrollableTabView>
            </View>}

        <DefModal
            isVisible={isVisible}
            onCancel={toggleConfirmModal}
            body={<BodyComponent />}
            style={{ borderRadius: 30, paddingTop: 40, paddingBottom: 35, paddingHorizontal: 15 }}
            onBackdropPress={toggleConfirmModal}
        />
    </SafeAreaContainer>)
}

export const styles = StyleSheet.create({
    scrollStyle: {
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',
        borderTopColor: '#F2F2F2',
    },
    tabStyle: {
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: Typography._28,
        fontFamily: Fonts.BOLD,
        color: Colors.LABEL,
        textAlign: 'center',
        marginBottom: 16
    },
    underlineStyle: {
        borderRadius: 40
    },
    itemContainer: {
        flex: 1,
        width: '99%',
        justifyContent: 'flex-start',
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
    },
    availableContainer: {
        alignSelf: 'center',
        width: '85%',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 20
    },
    labelStyle: {
        color: Colors.WHITE,
        fontSize: Typography._16,
        fontFamily: Fonts.MEDIUM
    },
    availableBtnStyle: {
        width: '75%',
        height: heightIntoDP(60),
        borderRadius: 18,
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 7
    },
    callBtnStyle: {
        width: widthIntoDP(70),
        height: heightIntoDP(60),
        borderRadius: 18,
        backgroundColor: '#F0EFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 7
    }
});

export default PackageView;
