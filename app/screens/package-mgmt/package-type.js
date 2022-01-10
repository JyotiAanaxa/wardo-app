import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { BottomHalfModal } from '../../components/modals/bottom-half-modal/bottomhalf-modal';
import { styles } from './style';
import { PersonalStylingIcon } from '../../icons/personal-styling';
import { MakeUpStylingIcon } from '../../icons/make-up-styling';
import { CommercialStylingIcon } from '../../icons/commercial-styling';
import { SustainableStylingIcon } from '../../icons/sustainable-styling';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { heightIntoDP } from '../../utils/app-util';
import IconButton from '../../components/buttons/icon-button';
import { StylistForwardIcon } from '../../icons/styling-forward';

export const PackageTypeModal = ({ isVisible, onSwipeHide, pckgTitle, onChangePckg }) => {
    const serviceOptions = [
        {
            title: 'Personal Styling',
            key: 'PERSONAL',
            amtRange: '₹ 5,000 - ₹ 50,000',
            activeColor: '#79BEFF',
            bgComponent: <PersonalStylingIcon width={widthPercentageToDP('100%')} height={heightIntoDP(145)} />
        },
        {
            title: 'Makeup Styling',
            amtRange: '₹ 5,000 - ₹ 50,000',
            key: 'BEAUTY',
            activeColor: '#EF709D',
            bgComponent: <MakeUpStylingIcon width={widthPercentageToDP('100%')} height={heightIntoDP(145)} />
        },
        {
            title: 'Commercial Styling',
            amtRange: '₹ 5,000 - ₹ 50,000',
            key: 'COMMERCIAL',
            activeColor: '#6A60DA',
            bgComponent: <CommercialStylingIcon width={widthPercentageToDP('100%')} height={heightIntoDP(145)} />
        },
        {
            title: 'Sustainable Styling',
            amtRange: '₹ 5,000 - ₹ 50,000',
            key: 'SUSTAINABLE',
            activeColor: '#35C0C4',
            bgComponent: <SustainableStylingIcon width={widthPercentageToDP('100%')} height={heightIntoDP(145)} />
        }
    ];

    const onPckgClicked = (title, color, key) => {
        onChangePckg(title, color, key);
        onSwipeHide();
    }

    const BodyComponent = () => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.modalHeading}>
                    <Text style={styles.heading}>Package Type</Text>
                </View>

                <ScrollView>
                    {serviceOptions.map((item, index) =>
                        <TouchableOpacity
                            onPress={() => { onPckgClicked(item.title, item.activeColor, item.key) }}
                            key={index}
                            style={{
                                width: widthPercentageToDP('100%'), marginBottom: 20, height: heightIntoDP(145)
                            }}
                            key={index}
                        >
                            <View style={{ width: '100%', height: '100%' }}>
                                {item.bgComponent}
                                <View style={styles.pckgCardContainer}>
                                    <Text style={styles.pckgTitleStyle}>{item.title}</Text>
                                    <IconButton
                                        buttonStyle={styles.pckgBtnContainer}
                                        iconComponent={<StylistForwardIcon color={item.activeColor} />}
                                        txtStyle={[styles.pckgBtnTxtStyle, { marginLeft: -12, marginRight: -10 }, { color: item.activeColor }]}
                                        iconText={item.title === pckgTitle ? 'Selected' : 'Select'}
                                        onSubmit={() => { onPckgClicked(item.title, item.activeColor, item.key) }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
        );
    }
    return (
        <BottomHalfModal
            isVisible={isVisible}
            onSwipeHide={onSwipeHide}
            body={<BodyComponent />}
            bodyContainer={{ paddingBottom: 0 }}
        />
    );
}

export default PackageTypeModal;
