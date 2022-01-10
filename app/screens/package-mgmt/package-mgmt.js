import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ThemeButton from '../../components/buttons/theme-button';
import { HeaderBar } from '../../components/header/header';
import { CartIcon } from '../../icons/cart';
import { CheckboxIcon } from '../../icons/checkbox';
import { CustomerIcon } from '../../icons/customer';
import { DeliverableIcon } from '../../icons/deliverable';
import { FillPencilIcon } from '../../icons/fill-pencil';
import { FillPlusIcon } from '../../icons/fill-plus';
import { QuestionIcon } from '../../icons/question';
import AuthService from '../../services/auth';
import DataService from '../../services/data-service';
import { SafeAreaContainer } from '../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK, SHOW_INFO_NOTIFICATION } from '../../utils/app-util';
import CustomerQuestionModal from './customer-question-modal';
import EnterCostModal from './enter-cost-modal';
import PackageTypeModal from './package-type';
import SelectPackageModal from './select-package';
import { styles } from './style';
import WhatTheyGetModal from './what-they-get-modal';
import WhyDoItModal from './why-do-it-modal';
import Bro from 'brototype';
import { Loader } from '../../components/loader/loader';
import { Colors } from '../../theme';


export const PackageMgmt = ({ route, navigation }) => {
    const { pckgTitle, pckgColor, specialityKey } = route.params;
    const [isPckgModalVisible, setIsPckgModalVisible] = useState(false);
    const [isSelectPckgModalVisible, setIsSelectPckgModalVisible] = useState(false);
    const [isWhatModalVisible, setIsWhatModalVisible] = useState(false);
    const [isWhyModalVisible, setIsWhyModalVisible] = useState(false);
    const [isCustomerQuesModalVisible, setIsCustomerQuestModalVisible] = useState(false);
    const [isEnterCostModalVisible, setIsEnterCostModalVisible] = useState(false);
    const [pckgType, setPckgType] = useState(pckgTitle);
    const [activeColor, setActiveColor] = useState(pckgColor);
    const [speciality, setSpeciality] = useState(specialityKey);
    const [pckgTemplate, setPckgTemplate] = useState(null);
    const [pckgObj, setPckgObj] = useState({ speciality: speciality });
    const [userSlug, setUserSlug] = useState(null);
    const [selectedPackageIconUrl, setSelectedPackageIconUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const togglePckgModal = () => {
        setIsPckgModalVisible(!isPckgModalVisible);
    }

    const toggleSelectPackageModal = () => {
        setIsSelectPckgModalVisible(!isSelectPckgModalVisible);
    }

    const toggleWhatModal = () => {
        setIsWhatModalVisible(!isWhatModalVisible);
    }

    const toggleWhyModal = () => {
        setIsWhyModalVisible(!isWhyModalVisible);
    }

    const toggleCustomerQuesModal = () => {
        setIsCustomerQuestModalVisible(!isCustomerQuesModalVisible);
    }

    const toggleEnterCostModal = () => {
        setIsEnterCostModalVisible(!isEnterCostModalVisible);
    }

    const onChangePckgType = (type, color, speciality) => {
        setPckgType(type);
        setActiveColor(color);
        setSpeciality(speciality);
    }

    const getPackageTemplate = () => {
        setIsLoading(true);
        DataService.getPackageTemplateBySpeciality(speciality).subscribe(
            async data => {
                const resp = await data;
                setPckgTemplate(resp);
                setIsLoading(false)
            },
            error => {
                setIsLoading(false);
                DEFAULT_ERROR_CALLBACK(error);
            }
        )
    }

    const setPackageIcon = (data) => {
        setSelectedPackageIconUrl(data.iconUrl);
    }

    const updatePackageObj = (obj) => {
        if (obj.customerQuestions) {
            let temp = [];
            for (let i = 0; i < obj.customerQuestions.length; i++) {
                if (obj.customerQuestions[i] !== '') {
                    temp.push(obj.customerQuestions[i]);
                }
            }
            obj.customerQuestions = temp.push('');
            obj.customerQuestions = temp;
            pckgObj.customerQuestions = temp;
        }

        if (obj.deliverables) {
            let temp = [];
            for (let i = 0; i < obj.deliverables.length; i++) {
                if (obj.deliverables[i] !== '') {
                    temp.push(obj.deliverables[i]);
                }
            }
            obj.deliverables = temp.push('');
            obj.deliverables = temp;
            pckgObj.deliverables = temp;
        }
        obj.speciality = speciality;
        setPckgObj(obj);
    }

    const submitPackage = () => {
        let tempObj = pckgObj;
        if (!(tempObj && tempObj.selectedPackage)) {
            SHOW_INFO_NOTIFICATION('Please select package');
            return;
        }

        if (!(tempObj && tempObj.whyText)) {
            SHOW_INFO_NOTIFICATION('Please fill why do it');
            return;
        }

        if (!(tempObj && tempObj.duration && tempObj.deliverables)) {
            SHOW_INFO_NOTIFICATION('Please fill what they get');
            return;
        } else {
            let temp = tempObj.deliverables;
            temp.pop();
            tempObj.deliverables = temp;
        }

        if (!(tempObj && tempObj.customerQuestions)) {
            tempObj.customerQuestions = [];
        } else {
            let temp = tempObj.customerQuestions;
            temp.pop();
            tempObj.customerQuestions = temp;
        }

        if (!(tempObj && tempObj.cost)) {
            SHOW_INFO_NOTIFICATION('Please enter cost');
            return;
        }

        tempObj.userSlug = userSlug;
        navigation.navigate('SavePackage', {
            pckgObj: tempObj,
            pckgIconUrl: selectedPackageIconUrl,
            pckgColor: activeColor,
            pckgTitle: pckgTitle
        });
    }

    const getUserSlug = async () => {
        const userData = await AuthService.getUser();
        setUserSlug(userData.slug);
    }

    useEffect(() => {
        getPackageTemplate();
        getUserSlug();
    }, [speciality]);

    const QuestionContainer = ({ style, quesTitle, quesDesc, onClick }) => (
        <View style={{ width: '100%', position: 'relative', marginBottom: 18, marginTop: 2 }}>
            <TouchableOpacity onPress={onClick}>
                <View style={[styles.inputContainer, style]}>
                    <Text style={styles.questTitleStyle}>{quesTitle}</Text>
                    <Text style={styles.quesDescStyle}>{quesDesc}</Text>
                </View>
            </TouchableOpacity>
            <View style={{ position: 'absolute', top: -22, right: -24 }}>
                <FillPlusIcon />
            </View>
        </View>
    );

    const AnswerContainer = ({ style, answer, onEditClick, iconUrl, icon }) => (
        <View style={{ width: '100%', position: 'relative', marginBottom: 18, marginTop: 2 }}>
            <TouchableOpacity onPress={onEditClick}>
                <View style={[styles.inputContainer, style, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '90%' }}>
                        <View style={styles.iconContainer}>
                            {iconUrl ?
                                <Image
                                    source={{ uri: iconUrl }}
                                    style={{ width: '100%', height: '100%', borderRadius: 14, aspectRatio: 1 }}
                                    resizeMode='contain'
                                />
                                :
                                icon
                            }
                        </View>
                        <Text numberOfLines={2}
                            ellipsizeMode='tail'
                            style={styles.answerStyle}>
                            {answer}
                        </Text>
                    </View>
                    <View style={{ alignSelf: 'flex-end', alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: -12, width: '10%' }}>
                        <Text style={styles.editTxtStyle}>{'Edit'}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{ position: 'absolute', top: -6, right: -4 }}>
                <CheckboxIcon />
            </View>
        </View>
    );

    return (
        <SafeAreaContainer>
            <HeaderBar
                containerStyle={{ top: 0, position: 'relative' }}
                backButton
                leftClick={() => {
                    navigation.goBack();
                }}
            />
            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {isLoading ?
                    <Loader color={Colors.PRIMARY} size={30} /> :
                    <View style={styles.container}>
                        <View style={styles.pckgContainer}>
                            <View>
                                <Text style={styles.packageTitle}>Create New Package</Text>
                                <Text style={styles.packageSubTitle}>{pckgType}</Text>
                            </View>
                            <View style={[styles.packageColorStyle, { backgroundColor: activeColor }]} />
                        </View>

                        <TouchableOpacity onPress={togglePckgModal}>
                            <View style={styles.chngTypeStyle}>
                                <FillPencilIcon />
                                <Text style={styles.changeTypeTxtStyle}>Change Type</Text>
                            </View>
                        </TouchableOpacity>

                        {!pckgObj.selectedPackage ? <QuestionContainer
                            quesTitle={'Select a Package'}
                            quesDesc={'What type of service will your client receive'}
                            onClick={toggleSelectPackageModal}
                        />
                            :
                            <AnswerContainer
                                style={{ borderStyle: 'solid', borderColor: '#F2F2F2' }}
                                answer={`${pckgObj.selectedPackage}`}
                                onEditClick={toggleSelectPackageModal}
                                iconUrl={pckgObj.selectedPackageDetails.iconUrl}
                            />}


                        {!pckgObj.whyText ? <QuestionContainer
                            quesTitle={'Why do it'}
                            quesDesc={'What will your client get out this service'}
                            onClick={toggleWhyModal}
                        />
                            :
                            <AnswerContainer
                                style={{ borderStyle: 'solid', borderColor: '#F2F2F2' }}
                                answer={`${pckgObj.whyText}`}
                                onEditClick={toggleWhyModal}
                                icon={<QuestionIcon />}
                            />}

                        {!(pckgObj.deliverables && pckgObj.deliverables.length - 1 !== 0) ? <QuestionContainer
                            quesTitle={'What they get'}
                            quesDesc={'What will your client get out of this service'}
                            onClick={toggleWhatModal}
                        />
                            :
                            <AnswerContainer
                                style={{ borderStyle: 'solid', borderColor: '#F2F2F2' }}
                                answer={`${pckgObj.deliverables[pckgObj.deliverables.length - 1] === '' ? pckgObj.deliverables.length - 1 : pckgObj.deliverables.length} ${pckgObj.deliverables.length - 1 > 1 ? 'Deliverables' : 'Deliverable'}`}
                                onEditClick={toggleWhatModal}
                                icon={<DeliverableIcon />}
                            />}

                        {!(pckgObj.customerQuestions && pckgObj.customerQuestions.length - 1 !== 0) ? <QuestionContainer
                            quesTitle={'Customer questions (optional)'}
                            quesDesc={'Any specific questions to ask new customers'}
                            onClick={toggleCustomerQuesModal}
                        />
                            :
                            <AnswerContainer
                                style={{ borderStyle: 'solid', borderColor: '#F2F2F2' }}
                                answer={`${pckgObj.customerQuestions[pckgObj.customerQuestions.length - 1] === '' ? pckgObj.customerQuestions.length - 1 : pckgObj.customerQuestions.length} ${pckgObj.customerQuestions.length - 1 > 1 ? 'Customer Questions' : 'Customer Question'}`}
                                onEditClick={toggleCustomerQuesModal}
                                icon={<CustomerIcon />}
                            />}

                        {!pckgObj.cost ? <QuestionContainer
                            quesTitle={'Select a Cost'}
                            quesDesc={`You're meeting your stylist, what are your goals`}
                            onClick={toggleEnterCostModal}
                        />
                            :
                            <AnswerContainer
                                style={{ borderStyle: 'solid', borderColor: '#F2F2F2' }}
                                answer={`Rs. ${pckgObj.cost}`}
                                onEditClick={toggleEnterCostModal}
                                icon={<CartIcon />}
                            />}
                    </View>}
            </ScrollView>

            <PackageTypeModal
                isVisible={isPckgModalVisible}
                onSwipeHide={togglePckgModal}
                pckgTitle={pckgType}
                onChangePckg={onChangePckgType}
            />

            <SelectPackageModal
                isVisible={isSelectPckgModalVisible}
                onSwipeHide={toggleSelectPackageModal}
                pckgTemplate={pckgTemplate}
                pckgObj={pckgObj}
                updatePckgSubmit={updatePackageObj}
                setPackageIcon={setPackageIcon}
            />

            <WhatTheyGetModal
                isVisible={isWhatModalVisible}
                onSwipeHide={toggleWhatModal}
                pckgTemplate={Bro(pckgTemplate).iCanHaz('whatTexts')}
                pckgObj={pckgObj}
                updatePckgSubmit={updatePackageObj}
            />

            <WhyDoItModal
                isVisible={isWhyModalVisible}
                onSwipeHide={toggleWhyModal}
                pckgTemplate={pckgTemplate}
                pckgObj={pckgObj}
                updatePckgSubmit={updatePackageObj}
            />

            <CustomerQuestionModal
                isVisible={isCustomerQuesModalVisible}
                onSwipeHide={toggleCustomerQuesModal}
                pckgTemplate={Bro(pckgTemplate).iCanHaz('customerQuestions')}
                pckgObj={pckgObj}
                updatePckgSubmit={updatePackageObj}
            />

            <EnterCostModal
                isVisible={isEnterCostModalVisible}
                onSwipeHide={toggleEnterCostModal}
                pckgTemplate={pckgTemplate}
                pckgObj={pckgObj}
                updatePckgSubmit={updatePackageObj}
            />
            <ThemeButton
                buttonStyle={styles.btnContainer}
                label={pckgObj.cost ? 'Next' : 'Please Input all the details'}
                labelStyle={styles.labelStyle}
                onSubmit={submitPackage}
            />

        </SafeAreaContainer>
    );
}

export default PackageMgmt;