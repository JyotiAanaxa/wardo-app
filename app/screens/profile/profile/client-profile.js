import React, { useEffect, useState } from 'react';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import IconButton from '../../../components/buttons/icon-button';
import ThemeButton from '../../../components/buttons/theme-button';
import { HeaderBar } from '../../../components/header/header';
import { Loader } from '../../../components/loader/loader';
import { DefModal } from '../../../components/modals/default-modal/default-modal';
import { FullScreenModal } from '../../../components/modals/full-screen-modal/full-screen-modal';
import { CallIcon } from '../../../icons/call-icon';
import { ClientInfoIcon } from '../../../icons/client-info';
import { ClientLookbookIcon } from '../../../icons/client-lookbook';
import { ClientShoppingListIcon } from '../../../icons/client-shopping-list';
import { ClientWardrobeIcon } from '../../../icons/client-wardrobe';
import { MessageIcon } from '../../../icons/message';
import { RemoveIcon } from '../../../icons/remove';
import { RightArrowIcon } from '../../../icons/right-arrow';
import DataService from '../../../services/data-service';
import { Colors, Fonts, Mixins, Typography } from '../../../theme';
import { FlexContainer, SafeAreaContainer } from '../../../utils/app-container';
import {
    DEFAULT_ERROR_CALLBACK,
    DEFAULT_MSG_CALLBACK, getFirstAndLastCharacterInString,
    getFirstName,
    heightIntoDP,
    transformToCapitalize, widthIntoDP
} from '../../../utils/app-util';
import { styles } from './style';
import FastImage from 'react-native-fast-image';

const LoaderSpinner = () => (
    <View style={[Mixins.FLEX]}>
        <Loader size={40} color={Colors.PRIMARY} />
    </View>
);

export const ClientProfile = ({ route, navigation }) => {
    const { client = {} } = route.params || {};
    const [isToggle, setIsToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState({ name: '' });
    const [isVisible, setIsVisible] = useState(false);


    const toggleConfirmModal = () => {
        setIsVisible(!isVisible);
    }

    const BodyComponent = () => {
        return (<View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
            <RemoveIcon />
            <Text style={{ fontSize: Typography._20, fontFamily: Fonts.BOLD, color: Colors.LABEL, marginTop: 30 }}>Remove Client</Text>
            <Text style={{ marginTop: 8, marginBottom: 28, fontSize: Typography._12, fontFamily: Fonts.MEDIUM, color: Colors.SECONDARY_TEXT, width: '90%', lineHeight: Typography._18, textAlign: 'center' }}>
                Are you sure you would like to remove client
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <ThemeButton
                    buttonStyle={{ width: widthIntoDP(94), height: heightIntoDP(50), borderRadius: 16, justifyContent: 'center', alignItems: 'center', borderColor: Colors.PRIMARY, borderWidth: 1, backgroundColor: Colors.WHITE, marginRight: 11 }}
                    label={'Cancel'}
                    labelStyle={{ fontSize: Typography._14, fontFamily: Fonts.MEDIUM, color: Colors.PRIMARY }}
                    onSubmit={toggleConfirmModal}
                />
                <ThemeButton
                    buttonStyle={{ width: widthIntoDP(94), height: heightIntoDP(50), borderRadius: 16, justifyContent: 'center', alignItems: 'center', borderColor: Colors.PRIMARY, borderWidth: 1, backgroundColor: Colors.PRIMARY, marginLeft: 11 }}
                    label={'Confirm'}
                    labelStyle={{ fontSize: Typography._14, fontFamily: Fonts.MEDIUM, color: Colors.WHITE }}
                    onSubmit={removeClient}
                />
            </View>
        </View>);
    };

    const onClientInfoClick = () => {
        navigation.navigate('ClientBasicInfo', {
            userData: userData,
        });
    };

    const onClientWardrobeClick = () => {
        navigation.navigate('ClientWardrobe', {
            isClient: true,
            clientName: getFirstName(client.name) + '\'s',
            clientSlug: client.slug
        });
    };

    const onClientLookBookClick = () =>
        navigation.navigate('LookBook', { client: userData });

    const onClientShoppingListClick = () =>
        navigation.navigate('ClientShoppingList', { client: userData, isReadOnly: true });

    const options = [
        {
            label: 'Client Information',
            icon: <ClientInfoIcon />,
            onPress: onClientInfoClick,
        },
        {
            label: 'Client Wardrobe',
            icon: <ClientWardrobeIcon />,
            onPress: onClientWardrobeClick,
        },
        {
            label: 'Client Lookbooks',
            icon: <ClientLookbookIcon />,
            onPress: onClientLookBookClick,
        },
        {
            label: 'Client Shopping List',
            icon: <ClientShoppingListIcon />,
            onPress: onClientShoppingListClick,
        },
    ];

    const fetchClientData = () => {
        setIsLoading(true);
        DataService.getConsumerData(client.slug).subscribe(
            async data => {
                setIsLoading(false);
                if (data) {
                    setUserData(data);
                }
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
                setIsLoading(false);
            },
        );
    };

    const removeClient = () => {
        DataService.onRemoveClient(client.slug).subscribe(
            data => {
                navigation.navigate('MyClients');
            },
            error => {
                DEFAULT_MSG_CALLBACK(error);
            })
    }

    const onClicked = () => {
        const url = `whatsapp://send?phone=${client.mobileNumber}`;
        Linking.openURL(url);
    }
    const onCallClicked = () => {
        Linking.openURL(`tel:${client.mobileNumber}`)
    }

    const IconWithText = ({ icon, containerStyle, style, text }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                {icon}
                <Text style={{ marginLeft: 6, fontFamily: Fonts.MEDIUM, fontSize: Typography._12, color: Colors.LABEL }}>{transformToCapitalize(text)}</Text>
            </View>
        );
    }

    useEffect(() => {
        fetchClientData();
    }, [client]);

    if (isLoading) {
        return <LoaderSpinner />;
    }

    return (
        <SafeAreaContainer>
            <FlexContainer style={{ backgroundColor: '#F0EFFF' }}>
                <HeaderBar
                    containerStyle={{ top: 0 }}
                    backButton
                    leftClick={() => {
                        navigation.goBack();
                    }}
                />
                <View style={[styles.titleContainer, { paddingBottom: 0 }]}>
                    <View style={styles.profileCardContainer}>
                        {isLoading ?
                            <Loader size={20} color={Colors.PRIMARY} /> :
                            userData.stylistInfo && userData.stylistInfo.profilePicUrl ?
                                <FastImage
                                    style={{
                                        width: widthIntoDP(105),
                                        height: heightIntoDP(105),
                                        borderRadius: 22,
                                        aspectRatio: widthIntoDP(105) / heightIntoDP(105),
                                    }}
                                    source={{
                                        uri: userData.stylistInfo.profilePicUrl,
                                        priority: FastImage.priority.high,
                                    }}
                                    resizeMode={FastImage.resizeMode.cover}
                                /> :
                                <Text style={[styles.title, styles.profileUserName]}>
                                    {getFirstAndLastCharacterInString(userData.name)}
                                </Text>}
                    </View>
                    <Text style={styles.title}>{userData.name}</Text>
                </View>

                <View style={{ width: '85%', marginTop: 5, justifyContent: 'center', flexDirection: 'row', marginBottom: 25, alignItems: 'center' }}>
                    <IconButton
                        buttonStyle={styles.msgBtnStyle}
                        txtStyle={styles.msgTxtStyle}
                        iconComponent={<MessageIcon />}
                        iconText={'Message'}
                        onSubmit={onClicked}
                        transparent
                    />
                    <IconButton
                        buttonStyle={{ height: 48, width: 46 }}
                        iconComponent={<CallIcon />}
                        onSubmit={onCallClicked}
                        transparent
                    />
                </View>

                <View style={styles.curveCardContainer}>
                    <ScrollView
                        style={{ flex: 1, width: '85%' }}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.curveInnerContainer}>
                            {options.map((op, index) => (
                                <TouchableOpacity onPress={() => { op.onPress(); }}>
                                    <View style={styles.rowContainer} key={index}>
                                        <View style={styles.columnLeftContainer}>
                                            <IconButton
                                                iconComponent={op.icon}
                                                buttonStyle={styles.iconBtnStyle}
                                            />
                                            <Text style={styles.columnRightContainer}>{op.label}</Text>
                                        </View>
                                        <View style={{ marginTop: 5 }}>
                                            <IconButton
                                                iconComponent={<RightArrowIcon />}
                                                onSubmit={() => {
                                                    op.onPress();
                                                }}
                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>

                    <View style={styles.switchbtnContainer}>
                        <ThemeButton
                            buttonStyle={{
                                backgroundColor: Colors.TRANSPARENT,
                                alignSelf: 'center',
                            }}
                            label={'Remove Client'}
                            labelStyle={styles.switchLabelStyle}
                            onSubmit={toggleConfirmModal}
                            transparent
                        />
                    </View>
                </View>

                <FullScreenModal isVisible={isToggle} />
                <DefModal
                    isVisible={isVisible}
                    onCancel={toggleConfirmModal}
                    body={<BodyComponent />}
                    style={{ borderRadius: 30, paddingTop: 40, paddingBottom: 35, paddingHorizontal: 25 }}
                />

            </FlexContainer>
        </SafeAreaContainer>
    );
};

export default ClientProfile;
