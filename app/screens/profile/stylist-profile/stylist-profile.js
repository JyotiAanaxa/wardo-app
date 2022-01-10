import { useFocusEffect } from "@react-navigation/native";
import Bro from 'brototype';
import React, { useState } from "react";
import { Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import IconButton from "../../../components/buttons/icon-button";
import { HeaderBar } from "../../../components/header/header";
import ListView from "../../../components/list-view/list-view";
import { Loader } from "../../../components/loader/loader";
import BackIcon from "../../../icons/back.js";
import { CommercialStylingIcon } from "../../../icons/commercial-styling";
import { DownloadIcon } from "../../../icons/download";
import { InstagramIcon } from "../../../icons/instragram";
import { LinkedInIcon } from "../../../icons/linkedIn";
import { LookCreatedIcon } from "../../../icons/look-created-arrow";
import { MakeUpStylingIcon } from "../../../icons/make-up-styling";
import { MapIcon } from "../../../icons/map";
import { MessageIcon } from "../../../icons/message";
import { PersonalStylingIcon } from "../../../icons/personal-styling";
import { PinterestIcon } from "../../../icons/pinterest";
import { ProfileCheckIcon } from "../../../icons/profile-check";
import { ResumeIcon } from "../../../icons/resume";
import { StylistForwardIcon } from "../../../icons/styling-forward";
import { StylistProfileIcon } from "../../../icons/stylist-profile";
import { SustainableStylingIcon } from "../../../icons/sustainable-styling";
import { TimeIcon } from "../../../icons/time";
import { TrophyIcon } from "../../../icons/trophy";
import { WebsiteIcon } from "../../../icons/website";
import AuthService from "../../../services/auth";
import DataService from '../../../services/data-service.js';
import { Colors } from "../../../theme";
import { SafeAreaContainer } from "../../../utils/app-container";
import { currencyFormatter, getFirstAndLastCharacterInString, heightIntoDP, transformToCapitalize, widthIntoDP, SHOW_INFO_NOTIFICATION, getMonthYearDate } from '../../../utils/app-util';
import { styles } from './style';
import FastImage from "react-native-fast-image";
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import uniqueId from 'react-native-uuid';

const StylistProfile = ({ route, navigation }) => {
    const { expert } = route.params;
    const [userName, setUserName] = useState('');
    const [serviceCount, setServiceCount] = useState(0);
    const [servicePckg, setServicePckg] = useState([]);
    const [workCount, setWorkCount] = useState(0);
    const [workData, setWorkData] = useState([]);
    const [userData, setUserData] = useState({});
    const [config, setConfig] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [userPckgService, setUserPckgService] = useState([]);
    const [looksCreated, setLooksCreated] = useState([]);
    const [serviceCountText, setServiceCountText] = useState('');
    const [workCountText, setWorkCountText] = useState('');
    const [experienceRange, setExperienceRange] = useState('0 Years');
    const [isResumeDownload, setIsResumeDownload] = useState(false);

    const options = [
        'Portfolio',
        'Services',
        'Overview'
    ];

    const experienceOptions = [
        {
            leftText: 'Head Of Styling',
            rightText: 'Mar. 2018 - Present',
            bottomText: 'ELLE India',
            style: { borderBottomWidth: 1.5, borderBottomColor: '#F0EFFF' }
        },
        {
            leftText: 'Lead Personal Stylist',
            rightText: 'Mar. 2016 - Mar 2018',
            bottomText: 'KOOVS',
            style: { borderBottomWidth: 1.5, borderBottomColor: '#F0EFFF' }
        },
        {
            leftText: 'Bachelors Of Styling',
            rightText: 'Mar. 2018 - Present',
            bottomText: 'NYFC'
        },
    ];

    const serviceOptions = [
        {
            title: 'Personal Styling',
            key: 'PERSONAL',
            activeColor: '#79BEFF',
            bgComponent: <PersonalStylingIcon />
        },
        {
            title: 'Makeup Styling',
            key: 'BEAUTY',
            activeColor: '#EF709D',
            bgComponent: <MakeUpStylingIcon />
        },
        {
            title: 'Commercial Styling',
            key: 'COMMERCIAL',
            activeColor: '#6A60DA',
            bgComponent: <CommercialStylingIcon />
        },
        {
            title: 'Sustainable Styling',
            key: 'SUSTAINABLE',
            activeColor: '#35C0C4',
            bgComponent: <SustainableStylingIcon />
        }
    ];

    const socialOptions = [
        {
            leftText: 'Pinterest',
            id: 'pinterest',
            leftIcon: <PinterestIcon />
        },
        {
            leftText: 'Website',
            id: 'website',
            leftIcon: <WebsiteIcon />
        },
        {
            leftText: 'Linkedin',
            id: 'linkedIn',
            leftIcon: <LinkedInIcon />
        },
    ];

    const onClicked = () => {
        const url = `whatsapp://send?phone=${expert.mobileNumber}`;
        Linking.openURL(url);
    }

    const routeToItemList = (title) => {
        navigation.navigate('ConsumerPortfolioList', {
            userRole: expert.currentRole,
            title: title,
            key: title,
            userData: expert
        })
    }

    const onServiceCardClick = (title, color, key, count) => {
        if (count > 0) {
            navigation.navigate('PackageList', {
                pckgColor: color,
                isShow: true,
                pckgTitle: title,
                specialityKey: key,
                userObj: expert
            });
        }
        else {
            navigation.navigate('PackageMgmt', {
                pckgTitle: title,
                pckgColor: color,
                specialityKey: key
            });
        }
    }

    const downloadResume = () => {
        const url = expert.stylistInfo.resumeUrl;
        if (url) {
            // Feel free to change main path according to your requirements.
            // IMPORTANT: A file extension is always required on iOS.
            // You might encounter issues if the file extension isn't included
            // or if the extension doesn't match the mime type of the file.
            setIsResumeDownload(true);
            const fileName = uniqueId.v4().toString();
            const localFile = `${RNFS.DocumentDirectoryPath}/${fileName}.pdf`;

            const options = {
                fromUrl: url,
                toFile: localFile
            };
            RNFS.downloadFile(options).promise
                .then(() => FileViewer.open(localFile))
                .then(() => {
                    setIsResumeDownload(false);
                    // success
                })
                .catch(error => {
                    // error
                });
        } else {
            SHOW_INFO_NOTIFICATION('No Resume file is found');
        }
    }

    const indexBasedComponent = () => {
        switch (activeIndex) {
            case 0: return (
                <View style={[styles.genericContainer, { alignItems: 'flex-start' }]}>
                    {isLoading ?
                        <View style={{ alignSelf: 'center', marginTop: 20 }}>
                            <Loader size={30} color={Colors.PRIMARY} />
                        </View>
                        :
                        <>
                            {workData.map((item, index) => (
                                <ListView
                                    styleObj={{ marginLeft: widthPercentageToDP('8%'), marginTop: 26 }}
                                    itemList={item.work}
                                    title={item.title}
                                    icon={<LookCreatedIcon />}
                                    titleStyle={styles.listTxtStyle}
                                    itemStyle={styles.listContainer}
                                    key={index}
                                    openModal={() => {
                                        togglePortfolioImageModal();
                                        setPortfolioTitle(item.title);
                                    }}
                                    onTitleClick={routeToItemList}
                                />))}
                        </>
                    }
                    {workCountText ? <View style={{ alignSelf: 'center', marginTop: 20 }}>
                        <Text style={styles.aboutMeSectionTitleStyle}>{workCountText}</Text>
                    </View> : <></>}
                </View >
            );
            case 1: return (
                <View style={styles.genericContainer}>
                    <View style={{ width: '85%' }}>
                        <Text style={[styles.listTxtStyle, { marginBottom: 20 }]}>Services Provided</Text>
                    </View>
                    {isLoading ?
                        <Loader size={30} color={Colors.PRIMARY} /> :
                        userPckgService.length ?
                            userPckgService.map((item, index) =>
                                <TouchableOpacity
                                    onPress={() => { onServiceCardClick(item.title, item.activeColor, item.key) }}
                                    key={index}
                                    style={{ width: widthPercentageToDP('85%'), marginBottom: 20, height: heightIntoDP(154) }}
                                    key={index}
                                >
                                    <View style={{ width: '100%', height: '100%' }}>
                                        {item.bgComponent}
                                        <View style={styles.pckgContainer}>
                                            <Text style={[styles.amtStyle, { color: item.activeColor }]}>{item.minCost === item.maxCost ? item.minCost === 0 ? '' : `Starting from ₹ ${currencyFormatter(item.minCost)}` : `₹ ${currencyFormatter(item.minCost)} - ₹ ${currencyFormatter(item.maxCost)}`}</Text>
                                            <Text style={styles.pckgTitleStyle}>{item.title}</Text>
                                            <IconButton
                                                iconRight
                                                buttonStyle={styles.pckgBtnContainer}
                                                iconComponent={<StylistForwardIcon color={item.activeColor} />}
                                                txtStyle={[styles.pckgBtnTxtStyle, { marginLeft: -12, marginRight: -10 }, { color: item.activeColor }]}
                                                iconText={item.count === 0 ? 'New Packages' : `${item.count === 1 ? item.count + ' Package' : item.count + ' Packages'}`}
                                                onSubmit={() => { onServiceCardClick(item.title, item.activeColor, item.key, item.count) }}
                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ) :
                            <View style={{ alignSelf: 'center', marginTop: 20 }}>
                                <Text style={styles.aboutMeSectionTitleStyle}>{serviceCountText}</Text>
                            </View>
                    }
                </View>);
            case 2: return (
                <>
                    <View style={{ width: '85%' }}>
                        <Text style={[styles.listTxtStyle, { marginBottom: 10 }]}>About Me</Text>
                        <Text style={[styles.listdescStyle, { marginBottom: 12 }]}>{expert.stylistInfo.aboutMe}</Text>
                        <View style={styles.iconContainer}>
                            <IconWithText icon={<View style={styles.iconBgStyle}><TrophyIcon /></View>} text={'Hired 0 Times'} containerStyle={styles.aboutMeSection} style={styles.aboutMeSectionTitleStyle} />
                            {Bro(userData).iCanHaz('stylistInfo.isBackgroundChecked') && <IconWithText icon={<View style={styles.iconBgStyle}><ProfileCheckIcon /></View>} text={'Background Checked'} containerStyle={[styles.aboutMeSection, { justifyContent: 'flex-end' }]} style={styles.aboutMeSectionTitleStyle} />}
                            <IconWithText icon={<View style={styles.iconBgStyle}><TimeIcon /></View>} text={`${experienceRange} in business`} containerStyle={styles.aboutMeSection} style={styles.aboutMeSectionTitleStyle} />
                        </View>
                    </View>

                    <View style={{ width: '85%', marginTop: 10 }}>
                        <Text style={[styles.listTxtStyle, { marginBottom: 15 }]}>Experience</Text>
                        {expert.stylistInfo.experiences ? expert.stylistInfo.experiences.map((item, index) =>
                            <ExperienceContent
                                containerStyle={[{ justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }, item.style]}
                                leftText={item.leftText}
                                leftTxtStyle={styles.leftTxtStyle}
                                rightText={item.rightText}
                                rightTxtStyle={styles.rightTxtStyle}
                                bottomText={item.bottomText}
                                item={item}
                                btmTxtStyle={styles.btmTxtStyle}
                                key={index}
                                showLine
                            />
                        ) : <Text style={[styles.listdescStyle, { marginBottom: 12 }]}>No Data Found</Text>}
                    </View>

                    <View style={{ width: '85%', marginTop: 3 }}>
                        <Text style={[styles.listTxtStyle, { marginBottom: 15 }]}>Social Links</Text>
                        {socialOptions.map((item, index) =>
                            <IconWithCustomContent
                                containerStyle={{ justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}
                                leftIcon={item.leftIcon}
                                leftText={item.leftText}
                                leftTxtStyle={[styles.btmTxtStyle, { marginLeft: 8, marginTop: 8 }]}
                                rightIcon={<LookCreatedIcon />}
                                rightTxtStyle={styles.rightTxtStyle}
                                item={expert.stylistInfo.socialMediaLinks ? expert.stylistInfo.socialMediaLinks[item.id] : null}
                                key={index}
                            />
                        )}
                    </View>

                    <View style={{ width: '85%', marginTop: 15 }}>
                        <Text style={[styles.listTxtStyle, { marginBottom: 15 }]}>Resume</Text>
                        {!isResumeDownload ? <TouchableOpacity onPress={() => { downloadResume(expert.stylistInfo.resumeUrl) }}>
                            <View style={styles.resumeBtnContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <ResumeIcon />
                                    <Text style={styles.dwnldTxtStyle}>Download Resume</Text>
                                </View>
                                <DownloadIcon />
                            </View>
                        </TouchableOpacity> :
                            <View style={{ alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                <Loader size={20} color={Colors.PRIMARY} />
                            </View>
                        }
                    </View>
                </>
            );
            default: return <Text>First</Text>
        }
    }

    const getUserServicePackageList = (serviceList, userServiceList) => {
        DataService.getPackageServiceStats(expert.slug).subscribe(
            async data => {
                const resp = await data;
                if (userServiceList) {
                    let userPckgList = serviceList.filter(item => userServiceList.includes(item.key));
                    let objKeys = Object.keys(resp);
                    let objValues = Object.values(resp);
                    let newServiceList = userPckgList.map((item, index) => {
                        let indexVal = objKeys.findIndex(val => val === item.key);
                        let data = {
                            title: userPckgList[index].title,
                            key: userPckgList[index].key,
                            activeColor: userPckgList[index].activeColor,
                            bgComponent: userPckgList[index].bgComponent,
                            count: indexVal < 0 ? 0 : objValues[indexVal].count,
                            maxCost: indexVal < 0 ? 0 : objValues[indexVal].maxCost,
                            minCost: indexVal < 0 ? 0 : objValues[indexVal].minCost
                        }
                        return data;
                    });
                    let filterServiceList = newServiceList.filter(item => item['count'] > 0);
                    setIsLoading(false);
                    setUserPckgService(filterServiceList);
                } else {
                    setIsLoading(false);
                    setUserPckgService([]);
                    setServiceCountText('No Service found');
                }
            },
            error => {
                setIsLoading(false);
            }
        );
    };

    const openSocialUrl = (url) => {
        if (url) {
            try {
                Linking.openURL(url);
            }
            catch (error) {
                console.log(error);
            }
        } else {
            SHOW_INFO_NOTIFICATION('No url found');
        }
    }

    const fetchData = async () => {
        setIsLoading(true);
        const userData = expert;
        const userConfig = await AuthService.getConfig();
        setConfig(userConfig);
        setUserData(expert);
        const expVal = expert.stylistInfo && expert.stylistInfo.experienceRangeObject && expert.stylistInfo.experienceRangeObject['value'];
        if (expVal) {
            setExperienceRange(expVal);
        }
        setServiceCount(userData.stylistInfo.specialities ? userData.stylistInfo.specialities.length || 0 : 0);
        setWorkCount(userData.stylistInfo.typesOfworkDone ? userData.stylistInfo.typesOfworkDone.length || 0 : 0);
        getUserServicePackageList(serviceOptions, userData.stylistInfo.specialities);
        setUserName(userData.name);
        setLooksCreated(userData.stylistInfo.portfolio ? userData.stylistInfo.portfolio.looksCreated ? userData.stylistInfo.portfolio.looksCreated : [] : []);
        let typeWork = userData.stylistInfo.typesOfworkDone;
        if (typeWork) {
            let workData = userData.stylistInfo.portfolio && userData.stylistInfo.portfolio.workPortfolio ? userData.stylistInfo.portfolio.workPortfolio : [];
            let workObj = Object.keys(workData).map(function (key) {
                let obj = {
                    title: key,
                    work: workData[key]
                };
                return obj;
            });
            let filterWorkObj = workObj.filter(item => item['work'] && item['work'].length > 0);
            setWorkData(filterWorkObj);
            if (!filterWorkObj.length > 0) {
                setWorkCountText('No Data found');
            }
        } else {
            setWorkCountText('No Data found');
        }
        setIsLoading(false);
    }

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, [userName, serviceCount, workCount])
    );

    const IconWithText = ({ icon, containerStyle, style, text }) => {
        return (
            <View style={[styles.flex_row_container, containerStyle]}>
                {icon}
                <Text style={[styles.iconTxtStyle, style]}>{transformToCapitalize(text)}</Text>
            </View>
        );
    }

    const IconWithCustomContent = ({ leftIcon, rightIcon, leftText, rightText, leftTxtStyle, rightTxtStyle, containerStyle, bottomText, btmTxtStyle, item }) => {
        return (
            <TouchableOpacity onPress={() => { openSocialUrl(item) }}>
                <View style={[styles.flex_row_container, containerStyle]}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            {leftIcon && leftIcon}
                            {leftText && <Text style={leftTxtStyle}>{leftText}</Text>}
                        </View>
                        {bottomText && <Text style={btmTxtStyle}>{bottomText}</Text>}
                    </View>
                    <View>
                        {rightText && <Text style={rightTxtStyle}>{rightText}</Text>}
                        {rightIcon && rightIcon}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    const ExperienceContent = ({ leftTxtStyle, rightTxtStyle, containerStyle, btmTxtStyle, item }) => {
        return (
            <TouchableOpacity onPress={() => { console.log(item) }}>
                <View style={[styles.flex_row_container, containerStyle, { borderBottomWidth: 1, borderColor: '#F0EFFF' }]}>
                    <View>
                        <Text style={leftTxtStyle}>{transformToCapitalize(item.company)}</Text>
                        <Text style={btmTxtStyle}>{transformToCapitalize(item.designation)}</Text>
                    </View>
                    <View>
                        <Text style={rightTxtStyle}>{`${transformToCapitalize(item.startMonth)},${item.startYear} - ${transformToCapitalize(item.endMonth) + ',' + item.endYear !== getMonthYearDate(new Date()) ? transformToCapitalize(item.endMonth) + ',' + item.endYear : 'Present'}`}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <SafeAreaContainer style={styles.container}>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <HeaderBar containerStyle={{ position: 'relative', top: 0 }}
                    leftIcon={
                        <BackIcon />}
                    leftClick={() => { navigation.goBack() }}
                />

                <View style={styles.profileBgContainer}>
                    <StylistProfileIcon />
                </View>

                <View style={styles.profileContainer}>
                    <View style={styles.profileCardContainer}>
                        {expert.stylistInfo.profilePicUrl ?
                            <FastImage
                                style={{
                                    width: widthIntoDP(105),
                                    height: heightIntoDP(105),
                                    borderRadius: 22,
                                    aspectRatio: widthIntoDP(105) / heightIntoDP(105),
                                }}
                                source={{
                                    uri: expert.stylistInfo.profilePicUrl,
                                    priority: FastImage.priority.high,
                                }}
                                resizeMode={FastImage.resizeMode.cover}
                            /> :
                            <Text style={[styles.title, styles.profileUserName]}>
                                {getFirstAndLastCharacterInString(expert.name)}
                            </Text>}
                    </View>
                    <Text style={styles.title}>{transformToCapitalize(userName)}</Text>
                    {Bro(userData).iCanHaz('stylistInfo.city') && <View style={styles.flex_row_container}>
                        <IconWithText icon={<MapIcon />} text={userData.stylistInfo.city} containerStyle={{ marginTop: 12 }} />
                    </View>}
                </View>

                <View style={[styles.flex_row_container, { marginTop: 18 }]}>
                    <IconButton
                        buttonStyle={styles.msgBtnStyle}
                        txtStyle={styles.msgTxtStyle}
                        iconComponent={<MessageIcon />}
                        iconText={'Message'}
                        onSubmit={onClicked}
                        transparent
                    />
                    <IconButton
                        buttonStyle={{ marginLeft: 8, height: heightIntoDP(48), width: widthIntoDP(48), backgroundColor: 'white' }}
                        iconComponent={<InstagramIcon />}
                        onSubmit={() => { }}
                        transparent
                    />
                </View>

                <View style={styles.sectionContainer}>
                    <View style={[styles.flex_row_container, { width: '100%', justifyContent: 'space-between', paddingHorizontal: 8, height: heightIntoDP(47) }]}>
                        {options.map((item, index) =>
                            <TouchableOpacity onPress={() => { setActiveIndex(index) }} key={index} activeOpacity={1}>
                                <View style={[styles.sectionTitleContainer, { backgroundColor: activeIndex === index ? '#F0EFFF' : Colors.WHITE }]}>
                                    <Text style={[styles.sectionTxtStyle, { color: activeIndex === index ? Colors.PRIMARY : Colors.LABEL }]}>
                                        {item}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                {indexBasedComponent()}

                <View style={{ height: 20 }} />
            </ScrollView>
        </SafeAreaContainer >
    );
};

export default StylistProfile;
