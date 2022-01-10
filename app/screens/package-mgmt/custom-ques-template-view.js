import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconButton from '../../components/buttons/icon-button';
import { HideTemplateIcon } from '../../icons/hide-template';
import { ViewTemplateIcon } from '../../icons/view-template';
import { WhitePlusIcon } from '../../icons/white-plus';
import { Colors, Typography } from "../../theme";
import { Fonts } from "../../theme/fonts";
import { heightIntoDP } from '../../utils/app-util';
import ErrorContainer from '../../components/form/error-container';


export const CustomTemplateView = forwardRef(({ formikProps, template, packageTemplate }, ref) => {
    const [isShowTemplates, setIsShowTemplates] = useState(false);
    let filterData = template.filter(item => !formikProps.values.customerQuestions.includes(item));
    const [templateList, setTemplateList] = useState(filterData);

    const toggleTemplates = () => {
        setIsShowTemplates(!isShowTemplates);
    }

    useImperativeHandle(ref, () => ({
        onAddTemplate(data) {
            if (packageTemplate.includes(data)) {
                let temp = [...templateList];
                temp.unshift(data);
                setTemplateList(temp);
            }
        }
    }));

    const updateTemplateList = (formikProps, index) => {
        setTemplateList(prev => {
            const temp = [...prev];
            const removedItem = temp.splice(index, 1);
            formikProps.values.customerQuestions.push(removedItem);
            return temp;
        });
    };

    const BodyComponent = () => {
        return (
            <>
                {isShowTemplates ?
                    <IconButton
                        buttonStyle={localStyles.useTmpContainer}
                        iconComponent={<HideTemplateIcon />}
                        onSubmit={toggleTemplates}
                    /> :
                    <IconButton
                        buttonStyle={localStyles.useTmpContainer}
                        iconComponent={<ViewTemplateIcon />}
                        onSubmit={toggleTemplates}
                    />


                }

                {isShowTemplates && templateList.map((item, index) => (
                    <TouchableOpacity onPress={() => {
                        formikProps.setFieldValue('customerQuestions', [item, ...formikProps.values.customerQuestions]);
                        updateTemplateList(formikProps, index);
                    }}
                        style={{ width: '100%' }}
                        key={index}
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderColor: '#F0EFFF', borderWidth: 1.5, borderRadius: 12, marginBottom: 10, flexWrap: 'wrap', paddingHorizontal: 8, paddingVertical: 12 }}>
                            <View style={{ width: 16, height: 16, backgroundColor: Colors.PRIMARY, justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
                                <WhitePlusIcon />
                            </View>
                            <View style={{ width: '90%' }}>
                                <Text style={localStyles.templateTxtStyle}>{`"${item}"`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}

            </>
        );
    }
    return (
        <BodyComponent />
    );
});

export const localStyles = StyleSheet.create({
    label2: {
        fontFamily: Fonts.ROMAN,
        fontSize: Typography._14,
        color: Colors.SECONDARY_TEXT,
        marginTop: 18,
        marginBottom: 14
    },
    txtStyle: {
        fontSize: Typography._13,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        textAlignVertical: 'center',
        lineHeight: Typography._20,
        width: '100%'
    },
    charLengthStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        textAlign: 'right',
        marginRight: 10
    },
    useTmpContainer: {
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 25
    },
    tempTextStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        lineHeight: Typography._20
    },
    intervalStyle: {
        borderRadius: 12,
        height: heightIntoDP(50),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    intervalTxtStyle: {
        fontSize: Typography._13,
        fontFamily: Fonts.ROMAN
    },
    descStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        marginBottom: 6
    },
    closetTxtStyle: {
        fontSize: Typography._13,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        marginLeft: 14
    },
    templateTxtStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        lineHeight: Typography._16,
        marginLeft: 14
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
    }
});


export default CustomTemplateView;
