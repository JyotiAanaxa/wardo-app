import { useFocusEffect } from "@react-navigation/native";
import Bro from "brototype";
import { Formik } from "formik";
import { Input } from "native-base";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import DocumentPicker from 'react-native-document-picker';
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import IconButton from "../../../components/buttons/icon-button";
import ThemeButton from "../../../components/buttons/theme-button";
import ErrorContainer from "../../../components/form/error-container";
import { HeaderBar } from "../../../components/header/header";
import ListView from "../../../components/list-view/list-view";
import { Loader } from "../../../components/loader/loader";
import { CommercialStylingIcon } from "../../../icons/commercial-styling";
import { LinkedInIcon } from "../../../icons/linkedIn";
import { LookCreatedIcon } from "../../../icons/look-created-arrow";
import { MakeUpStylingIcon } from "../../../icons/make-up-styling";
import { MapIcon } from "../../../icons/map";
import { MediaDownIcon } from "../../../icons/media-down";
import { MediaUpIcon } from "../../../icons/media-up";
import { PersonalStylingIcon } from "../../../icons/personal-styling";
import { PinterestIcon } from "../../../icons/pinterest";
import { ProfileCheckIcon } from "../../../icons/profile-check";
import { ProfileIcon } from "../../../icons/profile-icon";
import { RemoveBadgeItemIcon } from "../../../icons/remove-item-badge-icon";
import { StylistForwardIcon } from "../../../icons/styling-forward";
import { StylistProfileIcon } from "../../../icons/stylist-profile";
import { SustainableStylingIcon } from "../../../icons/sustainable-styling";
import { TimeIcon } from "../../../icons/time";
import { TrophyIcon } from "../../../icons/trophy";
import { UploadIcon } from "../../../icons/upload";
import { WebsiteIcon } from "../../../icons/website";
import AuthService from "../../../services/auth";
import DataService from '../../../services/data-service.js';
import { AboutValidation } from "../../../services/validations";
import { Colors, Fonts, Typography } from "../../../theme";
import { SafeAreaContainer } from "../../../utils/app-container";
import { currencyFormatter, DEFAULT_ERROR_CALLBACK, heightIntoDP, SHOW_INFO_NOTIFICATION, transformToCapitalize, widthIntoDP } from '../../../utils/app-util';
import AddExperience from "./add-experience";
import AddPortfolioModalOption from "./add-portfolio-modal";
import ResumeUploadModal from "./resume-loader-modal";
import { styles } from './style';
import ProfilePic from "../../../components/profile-pic";

const Expert = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [serviceCount, setServiceCount] = useState(0);
    const [servicePckg, setServicePckg] = useState([]);
    const [workCount, setWorkCount] = useState(0);
    const [workData, setWorkData] = useState([]);
    const [userData, setUserData] = useState({});
    const [config, setConfig] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isUserDataLoading, setIsUserDataLoading] = useState(false);
    const [togglePortfolioModal, setTogglePortfolioModal] = useState(false);
    const [portfolioTitle, setPortfolioTitle] = useState(null);
    const [userPckgService, setUserPckgService] = useState([]);
    const [looksCreated, setLooksCreated] = useState([]);
    const [isResumeUploaded, setIsResumeUploaded] = useState(false);
    const [isPinterestShow, setIsPinterestShow] = useState(true);
    const [isWebsiteShow, setIsWebsiteShow] = useState(true);
    const [isLinkedInShow, setIsLinkedInShow] = useState(true);
    const [experienceRange, setExperienceRange] = useState('0 Years');

    let hideArr = [];

    const options = [
        'Portfolio',
        'Services',
        'Overview'
    ];


    const togglePinterest = () => {
        setIsPinterestShow(!isPinterestShow);
    }

    const toggleWebsite = () => {
        setIsWebsiteShow(!isWebsiteShow);
    }

    const toggleLinkedIn = () => {
        setIsLinkedInShow(!isLinkedInShow);
    }

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
            placeholder: 'Eg. https://pinterest.com/mandy',
            value: 'pinterestUrl',
            state: isPinterestShow,
            toggleBtn: togglePinterest,
            leftIcon: <PinterestIcon />
        },
        {
            leftText: 'Website',
            placeholder: 'Eg. https://www.mandy.com',
            value: 'websiteUrl',
            state: isWebsiteShow,
            toggleBtn: toggleWebsite,
            leftIcon: <WebsiteIcon />
        },
        {
            leftText: 'Linkedin',
            placeholder: 'Eg. https://www.linkedin.com/mandy',
            value: 'linkedInUrl',
            state: isLinkedInShow,
            toggleBtn: toggleLinkedIn,
            leftIcon: <LinkedInIcon />
        },
    ];

    const togglePortfolioImageModal = () => {
        setTogglePortfolioModal(!togglePortfolioModal);
    }

    const onPortfolioItemClick = (img) => {
        let tempUserObj = userData;
        let temp = {};
        for (let i = 0; i < workData.length; i++) {
            temp[workData[i].title] = workData[i].work
        }
        temp[portfolioTitle] ? temp[portfolioTitle] = temp[portfolioTitle].concat(img) : temp[portfolioTitle] = [img];
        tempUserObj.stylistInfo.portfolio.workPortfolio = temp;
        AuthService.patchUpdate('stylistInfo.portfolio.workPortfolio', tempUserObj).subscribe(
            async (data) => {
                SHOW_INFO_NOTIFICATION('Item added successfully');
                togglePortfolioImageModal();
                fetchData();
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
                togglePortfolioImageModal();
            });
    }

    const routeToItemList = (title) => {
        navigation.navigate('PortfolioItemList', {
            userRole: userData.currentRole,
            title: title,
            key: title,
        })
    }

    const onServiceCardClick = (title, color, key, count) => {
        if (count > 0) {
            navigation.navigate('PackageList', {
                pckgColor: color,
                isShow: false,
                pckgTitle: title,
                specialityKey: key,
                userObj: userData
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

    const onUpdateExpertProfile = (userObj) => {
        setIsUserDataLoading(true);
        let tempUserObj = userData;
        tempUserObj.stylistInfo = userObj;
        AuthService.patchUpdate('stylistInfo', tempUserObj).subscribe(
            data => {
                setIsUserDataLoading(false);
                SHOW_INFO_NOTIFICATION('Expert Profile is updated successfully');
                fetchData();
            },
            error => {
                console.log(error.response.data);
                setIsUserDataLoading(false);
                DEFAULT_ERROR_CALLBACK(error);
            });
    }

    const onUploadResume = async (formikProps) => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
            });
            setIsResumeUploaded(true);
            const imageUrl = await DataService.uploadImageFile(res);
            if (imageUrl) {
                console.log(imageUrl);
                formikProps.setFieldValue('resumeUrl', imageUrl);
                SHOW_INFO_NOTIFICATION('Resume uploaded sucessfully');
            }
            setIsResumeUploaded(false);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    }

    const transformExperienceData = (data) => {
        let objArr = [];
        for (let i = 0; i < data.length > 0; i++) {
            let obj = {};
            obj.company = data[i].company;
            obj.designation = data[i].designation;
            obj.from = `${transformToCapitalize(data[i].startMonth)},${data[i].startYear}`;
            if (data[i].endMonth) {
                obj.tillNow = `${transformToCapitalize(data[i].endMonth)},${data[i].endYear}`;
            }
            else {
                obj.tillNow = '';
            }
            objArr.push(obj);
        }
        return objArr;
    }

    const indexBasedComponent = () => {
        switch (activeIndex) {
            case 0: return (
                <View style={[styles.genericContainer, { alignItems: 'flex-start' }]}>
                    <EditPropertyComponent
                        heading={'My Work'}
                        subheading={`${workCount === 1 ? workCount + ' catgeory' : workCount + ' categories'} selected`}
                        onEditClick={() => { navigation.navigate('EditWork', { userObj: userData }) }}
                    />
                    {isLoading ?

                        <View style={{ alignSelf: 'center', marginTop: 40 }}>
                            <Loader size={30} color={Colors.PRIMARY} />
                        </View> :
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
                </View>
            );
            case 1: return (
                <View style={styles.genericContainer}>
                    <EditPropertyComponent
                        heading={'My Expertise'}
                        subheading={`${serviceCount === 1 ? serviceCount + ' catgeory' : serviceCount + ' categories'} selected`}
                        onEditClick={() => { navigation.navigate('EditService', { userObj: userData, config: config }) }}
                    />

                    <View style={{ width: '85%' }}>
                        <Text style={[styles.listTxtStyle, { marginBottom: 20 }]}>Services Provided</Text>
                    </View>
                    {isLoading ?
                        <Loader size={30} color={Colors.PRIMARY} /> :
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
                        )}
                </View>);
            case 2: return (
                <Formik
                    initialValues={{
                        aboutMe: userData.stylistInfo.aboutMe,
                        experiences: userData.stylistInfo.experiences ? transformExperienceData(userData.stylistInfo.experiences) : [],
                        resumeUrl: userData.stylistInfo.resumeUrl ? userData.stylistInfo.resumeUrl : '',
                        pinterestUrl: userData.stylistInfo.socialMediaLinks ? userData.stylistInfo.socialMediaLinks.pinterest : '',
                        websiteUrl: userData.stylistInfo.socialMediaLinks ? userData.stylistInfo.socialMediaLinks.website : '',
                        linkedInUrl: userData.stylistInfo.socialMediaLinks ? userData.stylistInfo.socialMediaLinks.linkedIn : ''
                    }}
                    validationSchema={AboutValidation}
                    onSubmit={values => {
                        let overviewObj = userData.stylistInfo;
                        overviewObj.aboutMe = values.aboutMe;
                        overviewObj.resumeUrl = values.resumeUrl ? values.resumeUrl.replace('undefined', '') : null;
                        let socialLinksObj = {
                            pinterest: values.pinterestUrl,
                            website: values.websiteUrl,
                            linkedIn: values.linkedInUrl
                        };
                        overviewObj.socialMediaLinks = socialLinksObj;
                        if (values.experiences.length > 0) {
                            let tempExpArr = [];
                            for (let i = 0; i < values.experiences.length; i++) {
                                let tempExpObj = {};
                                if (!values.experiences[i].company) {
                                    SHOW_INFO_NOTIFICATION('Company field in experience cannot be empty');
                                    return;
                                }
                                if (!values.experiences[i].designation) {
                                    SHOW_INFO_NOTIFICATION('Designation field in experience cannot be empty');
                                    return;
                                }
                                if (values.experiences[i].from) {
                                    let startArr = values.experiences[i].from.toString().split(',');
                                    tempExpObj.startMonth = startArr[0].toUpperCase();
                                    tempExpObj.startYear = startArr[1];
                                } else {
                                    SHOW_INFO_NOTIFICATION('From field in experience cannot be empty');
                                    return;
                                }
                                if (values.experiences[i].tillNow) {
                                    let endArr = values.experiences[i].tillNow.toString().split(',');
                                    tempExpObj.endMonth = endArr[0].toUpperCase();
                                    tempExpObj.endYear = endArr[1];
                                    if (parseInt(tempExpObj.startYear) > parseInt(tempExpObj.endYear)) {
                                        SHOW_INFO_NOTIFICATION('From field in experience cannot be greater than To field');
                                        return;
                                    }
                                }
                                tempExpObj.company = values.experiences[i].company;
                                tempExpObj.designation = values.experiences[i].designation;
                                tempExpArr.push(tempExpObj);
                            }
                            overviewObj.experiences = tempExpArr;
                        } else {
                            overviewObj.experiences = null;
                        }
                        onUpdateExpertProfile(overviewObj);
                    }}>
                    {formikProps => (
                        <>
                            <View style={styles.genericContainer}>
                                <View style={{ width: '85%' }}>
                                    <Text style={[styles.listTxtStyle, { marginBottom: 10 }]}>About Me</Text>
                                    <View style={{ borderRadius: 15, borderWidth: 1.5, borderColor: '#F0EFFF', padding: 4, paddingLeft: 10, marginBottom: 20 }}>
                                        <Input
                                            style={styles.aboutTxtStyle}
                                            placeholder={'Enter description...'}
                                            placeholderTextColor={Colors.SECONDARY_TEXT}
                                            keyboardType={'default'}
                                            autoCapitalize="none"
                                            multiline={true}
                                            autoCompleteType="off"
                                            autoFocus={false}
                                            autoCorrect={false}
                                            onChangeText={formikProps.handleChange('aboutMe')}
                                            onBlur={formikProps.handleBlur('aboutMe')}
                                            value={formikProps.values['aboutMe']}
                                        />
                                    </View>
                                    <View style={styles.iconContainer}>
                                        <IconWithText icon={<View style={styles.iconBgStyle}><TrophyIcon /></View>} text={'Hired 0 Times'} containerStyle={styles.aboutMeSection} style={styles.aboutMeSectionTitleStyle} />
                                        {Bro(userData).iCanHaz('stylistInfo.isBackgroundChecked') && <IconWithText icon={<View style={styles.iconBgStyle}><ProfileCheckIcon /></View>} text={'Background Checked'} containerStyle={[styles.aboutMeSection, { justifyContent: 'flex-end' }]} style={styles.aboutMeSectionTitleStyle} />}
                                        <IconWithText icon={<View style={styles.iconBgStyle}><TimeIcon /></View>} text={`${experienceRange} in business`} containerStyle={styles.aboutMeSection} style={styles.aboutMeSectionTitleStyle} />
                                    </View>
                                </View>

                                <View style={{ width: '85%', marginTop: 12 }}>
                                    <Text style={[styles.listTxtStyle, { marginBottom: 15 }]}>Education & Experience</Text>
                                    <View style={{ marginTop: -3, marginBottom: 18 }}>
                                        <AddExperience formikProps={formikProps} value={'experiences'} />
                                    </View>
                                </View>

                                <View style={{ width: '85%', marginTop: 3 }}>
                                    <Text style={[styles.listTxtStyle, { marginBottom: 15 }]}>Social Links</Text>
                                    {socialOptions.map((item, index) =>
                                        <IconWithCustomContent
                                            containerStyle={{ justifyContent: 'space-between', marginBottom: 2, alignItems: 'center', width: '100%' }}
                                            leftIcon={item.leftIcon}
                                            leftText={item.leftText}
                                            leftTxtStyle={[styles.btmTxtStyle, { marginLeft: 8, marginTop: 8 }]}
                                            rightIcon={<LookCreatedIcon />}
                                            rightTxtStyle={styles.rightTxtStyle}
                                            key={index}
                                            state={item.state}
                                            toggleState={item.toggleBtn}
                                            formikProps={formikProps}
                                            value={item.value}
                                            placeholder={item.placeholder}
                                            key={index}
                                        />
                                    )}
                                </View>

                                <View style={{ width: '85%', marginTop: 15 }}>
                                    <Text style={[styles.listTxtStyle, { marginBottom: 15 }]}>Resume (*only pdf files allowed)</Text>
                                    <TouchableOpacity onPress={() => { onUploadResume(formikProps) }} style={{ height: heightPercentageToDP('10%') }}>
                                        <View style={styles.resumeBtnContainer} >
                                            <UploadIcon />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <ThemeButton
                                buttonStyle={{ backgroundColor: Colors.PRIMARY, borderRadius: 18, marginVertical: 40, width: widthIntoDP(190), height: heightIntoDP(60), justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                                label={'Save'}
                                labelStyle={{ fontSize: Typography._14, fontFamily: Fonts.MEDIUM, color: Colors.WHITE }}
                                onSubmit={formikProps.handleSubmit}
                                isLoading={isUserDataLoading}
                            />
                        </>
                    )}
                </Formik>
            );
            default: return <Text>First</Text>
        }
    }

    const getUserServicePackageList = (serviceList, userServiceList) => {
        DataService.getPackageServiceStats(userData.slug).subscribe(
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
                    setUserPckgService(newServiceList);
                }
                setIsLoading(false);

            },
            error => {
                setIsLoading(false);
            }
        );
    };

    const fetchData = async () => {
        setIsLoading(true);
        const userData = await AuthService.getUser();
        const userConfig = await AuthService.getConfig();
        setConfig(userConfig);
        setUserData(userData);
        const expVal = userData && userData.stylistInfo && userData.stylistInfo.experienceRangeObject && userData.stylistInfo.experienceRangeObject['value'];
        if (expVal) {
            setExperienceRange(expVal);
        }
        setServiceCount(userData.stylistInfo.specialities ? userData.stylistInfo.specialities.length || 0 : 0);
        setWorkCount(userData.stylistInfo.typesOfworkDone ? userData.stylistInfo.typesOfworkDone.length || 0 : 0);
        getUserServicePackageList(serviceOptions, userData.stylistInfo.specialities);
        setUserName(userData.name);
        setLooksCreated(userData.stylistInfo.portfolio ? userData.stylistInfo.portfolio.looksCreated : []);
        if (userData.stylistInfo.typesOfworkDone) {
            let workPortfolioArr = userData.stylistInfo.portfolio && userData.stylistInfo.portfolio.workPortfolio ? userData.stylistInfo.portfolio.workPortfolio : [];
            let workObj = Object.keys(workPortfolioArr).map(function (key) {
                let obj = {
                    title: key,
                    work: workPortfolioArr[key]
                };
                return obj;
            });
            setWorkData(workObj);
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

    const IconWithCustomContent = ({ leftIcon, placeholder, formikProps, value, rightIcon, leftText, rightText, leftTxtStyle, rightTxtStyle, containerStyle, bottomText, btmTxtStyle, state, toggleState }) => {
        return (
            <View style={styles.socialMediaContainer}>
                <View style={[styles.flex_row_container, containerStyle]}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            {leftIcon && leftIcon}
                            {leftText && <Text style={leftTxtStyle}>{leftText}</Text>}
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { toggleState() }}>
                        <View style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'flex-end' }}>
                            {state ? <MediaUpIcon /> : <MediaDownIcon />}
                        </View>
                    </TouchableOpacity>
                </View>
                {state && <View style={styles.editMediaContainer}>
                    <Input
                        style={styles.aboutTxtStyle}
                        placeholder={placeholder}
                        placeholderTextColor={'#D0D0D0'}
                        keyboardType={'url'}
                        autoCapitalize="none"
                        autoCompleteType="off"
                        autoFocus={false}
                        autoCorrect={false}
                        onChangeText={formikProps.handleChange(`${value}`)}
                        onBlur={formikProps.handleBlur(`${value}`)}
                        value={formikProps.values[value]}
                    />
                    {formikProps.values[value] ? <IconButton
                        iconComponent={<RemoveBadgeItemIcon height={18} width={18} />}
                        buttonStyle={styles.cancelBtnStyle}
                        onSubmit={() => {
                            formikProps.setFieldValue(value, '');
                        }}
                    /> : <></>}
                </View>}
                {
                    formikProps.errors[value] && formikProps.touched[value] && (
                        <ErrorContainer formikProps={formikProps} value={value} />
                    )}
            </View>
        );
    }


    const EditPropertyComponent = ({ heading, subheading, btnText = 'Edit', onEditClick, btnStyle, style }) => {
        return (
            <View style={[styles.editContainer, style]}>
                <View>
                    <Text style={styles.editHeading}>{heading}</Text>
                    <Text style={styles.editSubheading}>{subheading}</Text>
                </View>
                <View>
                    <ThemeButton
                        buttonStyle={[styles.editBtnContainer, btnStyle]}
                        labelStyle={styles.editLabelStyle}
                        label={btnText}
                        onSubmit={onEditClick}
                    />
                </View>
            </View>
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
                        <View style={{ paddingLeft: 6 }}>
                            <ProfilePic currentUser />
                        </View>
                    }
                    leftClick={() => { navigation.navigate('ExpertProfile') }}
                />

                <View style={styles.profileBgContainer}>
                    <StylistProfileIcon />
                </View>

                <View style={styles.profileContainer}>
                    <View style={styles.profileCardContainer}>
                        {isLoading ?
                            <Loader size={20} color={Colors.PRIMARY} /> :
                            userData.stylistInfo &&

                            <ProfilePic
                                url={userData.stylistInfo.profilePicUrl}
                                name={userData.name}
                                gender={userData.gender}
                                style={{
                                        width: widthIntoDP(105),
                                        height: heightIntoDP(105),
                                        borderRadius: 22,
                                        aspectRatio: widthIntoDP(105) / heightIntoDP(105),
                                }}
                                textStyle={[styles.title, styles.profileUserName]}
                            />
                        }
                    </View>
                    <Text style={styles.title}>{userName}</Text>
                    {Bro(userData).iCanHaz('stylistInfo.city') && <View style={styles.flex_row_container}>
                        <IconWithText icon={<MapIcon />} text={userData.stylistInfo.city} containerStyle={{ marginTop: 12 }} />
                    </View>}
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

            <AddPortfolioModalOption
                isVisible={togglePortfolioModal}
                onSwipeHide={togglePortfolioImageModal}
                onCameraClick={({ image }) => onPortfolioItemClick(image)}
                onGallerySubmit={({ image }) => onPortfolioItemClick(image)}
            />

            <ResumeUploadModal
                isVisible={isResumeUploaded}
            />

        </SafeAreaContainer >
    );
};

export default Expert;
