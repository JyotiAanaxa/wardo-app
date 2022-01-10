import { Input, Text, View } from 'native-base';
import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import IconButton from '../../../components/buttons/icon-button';
import { CalenderIcon } from '../../../icons/calender';
import { CrossIcon } from '../../../icons/cross';
import { NewExperienceIcon } from '../../../icons/new-experience';
import { Colors, Typography } from '../../../theme';
import { Fonts } from '../../../theme/fonts';
import { getMonthYearDate } from '../../../utils/app-util';
import { AddExperienceIcon } from '../../../icons/add-experience';


const AddExperience = ({ formikProps, value }) => {
    const [fromdate, setFromDate] = useState(new Date());
    const [tilldate, setTillDate] = useState(new Date());
    const [fromshow, setFromShow] = useState(false);
    const [tillshow, setTillShow] = useState(false);

    const showFromPicker = useCallback((value) => setFromShow(value), []);
    const showTillPicker = useCallback((value) => setTillShow(value), []);

    const onValueChange = useCallback(
        (index, property, formikProps, event, newDate) => {
            if (event === 'dismissedAction') {
                if (property === 'from') {
                    showFromPicker(false);
                } else {
                    showTillPicker(false);
                }
            } else {
                if (property === 'from') {
                    showFromPicker(false);
                    setFromDate(newDate);
                } else {
                    showTillPicker(false);
                    setTillDate(newDate);
                }
                formikProps.setFieldValue(`experiences[${index}].${property}`, getMonthYearDate(newDate));
            }
        },
        [fromdate, showFromPicker, tilldate, showTillPicker],
    );

    const onAddRow = (formikProps) => {
        formikProps.setFieldValue('experiences', [...formikProps.values[value], {
            from: '',
            tillNow: '',
            companyName: '',
            designation: ''
        }]);
    }

    const onRemoveRow = (index) => {
        let temp = formikProps.values[value];
        temp.splice(index, 1);
        formikProps.setFieldValue('experiences', [...temp]);
    }

    return (
        <>
            {formikProps.values[value].map((item, index) => {
                return <View style={styles.container} key={index}>
                    <TouchableOpacity onPress={() => { onRemoveRow(index) }}>
                        <View style={styles.cancelStyle}>
                            <CrossIcon />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.rowContainer}>
                        <Text style={styles.labelStyle}>Company Name</Text>
                        <View style={styles.inputContainer}>
                            <Input
                                style={styles.txtStyle}
                                placeholder={'Eg. Fashion Exports'}
                                placeholderTextColor={'#D0D0D0'}
                                keyboardType={'default'}
                                autoCapitalize="none"
                                autoCompleteType="off"
                                autoFocus={false}
                                autoCorrect={false}
                                onChangeText={formikProps.handleChange(`${value}[${index}].company`)}
                                onBlur={formikProps.handleBlur(`${value}[${index}].company`)}
                                value={formikProps.values[value][index]['company']}
                            />
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.labelStyle}>Designation</Text>
                        <View style={styles.inputContainer}>
                            <Input
                                style={styles.txtStyle}
                                placeholder={'Eg. Wardrobe Stylist'}
                                placeholderTextColor={'#D0D0D0'}
                                keyboardType={'default'}
                                autoCapitalize="none"
                                autoCompleteType="off"
                                autoFocus={false}
                                autoCorrect={false}
                                onChangeText={formikProps.handleChange(`${value}[${index}].designation`)}
                                onBlur={formikProps.handleBlur(`${value}[${index}].designation`)}
                                value={formikProps.values[value][index]['designation']}
                            />
                        </View>
                    </View>
                    <View style={styles.flexContainer}>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.labelStyle}>From</Text>
                            <TouchableOpacity onPress={() => showFromPicker(true)}>
                                <View style={[styles.inputContainer, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                                    <Text style={styles.txtStyle}>{formikProps.values[value][index]['from']}</Text>
                                    <CalenderIcon />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.labelStyle}>To</Text>
                            <TouchableOpacity onPress={() => showTillPicker(true)}>
                                <View style={[styles.inputContainer, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                                    <Text style={styles.txtStyle}>{formikProps.values[value][index]['tillNow']}</Text>
                                    <CalenderIcon />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {fromshow && (
                        <MonthPicker
                            onChange={(event, date) => { onValueChange(index, 'from', formikProps, event, date) }}
                            value={fromdate}
                            minimumDate={new Date(0, 0)}
                            maximumDate={new Date()}
                        />
                    )}
                    {tillshow && (
                        <MonthPicker
                            onChange={(event, date) => { onValueChange(index, 'tillNow', formikProps, event, date) }}
                            value={tilldate}
                            minimumDate={new Date(0, 0)}
                            maximumDate={new Date()}
                            locale='en-US'
                        />
                    )}
                </View>
            })}
            <IconButton
                iconComponent={formikProps.values[value].length > 0 ? <AddExperienceIcon /> : <NewExperienceIcon />}
                buttonStyle={{}}
                onSubmit={() => { onAddRow(formikProps) }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        borderRadius: 20,
        padding: 16, justifyContent: 'space-between',
        marginBottom: 15
    },
    cancelStyle: {
        alignSelf: 'flex-end'
    },
    inputContainer: {
        borderRadius: 8,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 10,
        height: 40,
        marginBottom: 10
    },
    labelStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        color: Colors.LABEL,
        marginBottom: 8
    },
    txtStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        color: Colors.LABEL,
        textAlignVertical: 'center'
    },

    rowContainer: {},
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default AddExperience;
