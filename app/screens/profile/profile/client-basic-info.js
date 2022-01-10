import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderBar } from '../../../components/header/header';
import { Heading } from '../../../components/heading/heading';
import { SafeAreaContainer } from '../../../utils/app-container';
import { heightIntoDP, getFormattedDate } from '../../../utils/app-util';
import { Colors, Typography, Fonts } from '../../../theme';
import { Switch } from 'react-native-switch';

export const ClientBasicInfo = ({ route, navigation }) => {
    const { userData } = route.params;

    const getLabelForAgeRange = (ageValue) => {
        switch (ageValue) {
            case "BELOW_18": return "Below 18 years old";
            case "_18_24": return "18 - 24 years old";
            case "_25_30": return "25 - 30 years old";
            case "_31_40": return "31 - 40 years old";
            case "_41_50": return "41 - 50 years old";
            case "ABOVE_50": return "Above 50 years old";
            default: return "Default Input"
        }
    }

    return (
        <SafeAreaContainer>
            <HeaderBar
                containerStyle={{ top: 0 }}
                backButton
                leftClick={() => {
                    navigation.goBack();
                }}
            />

            <View style={{ width: '85%', alignSelf: 'center', marginTop: heightIntoDP(45) }}>
                <Heading
                    title={'Client Information'}
                    align='left'
                    style={{ color: Colors.LABEL }}
                />

                <View style={{ width: '100%', marginTop: heightIntoDP(25) }}>
                    <Text style={styles.basicTxtStyle}>Basic Information</Text>
                </View>

                <View style={{ width: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 22 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.infoLabel}>Age</Text>
                            <Text style={styles.infoValue}>{getLabelForAgeRange(userData.ageRange)}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.infoLabel}>Phone Number</Text>
                            <Text style={styles.infoValue}>{userData.mobileNumber}</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.infoLabel}>Date Connected</Text>
                            <Text style={styles.infoValue}>{getFormattedDate(userData.dateCreated)}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.infoLabel}>Eco-Friendly Mode</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Switch
                                    value={userData.ecoFriendlyOpted}
                                    circleSize={25}
                                    barHeight={25}
                                    backgroundActive={Colors.Switch.BACKGROUND_ACTIVE}
                                    backgroundInactive={Colors.Switch.BACKGROUND_INACTIVE}
                                    circleActiveColor={Colors.Switch.CIRCLE_ACTIVE}
                                    circleInActiveColor={Colors.Switch.CIRCLE_INACTIVE}
                                    innerCircleStyle={[styles.innerCircleStyle, { borderColor: userData.ecoFriendlyOpted ? Colors.Switch.BACKGROUND_ACTIVE : Colors.Switch.BACKGROUND_INACTIVE }]} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={false}
                                    renderInActiveText={false}
                                    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                                <Text style={[styles.infoValue, { marginLeft: 10, marginTop: 10 }]}>{userData.ecoFriendlyOpted ? 'Active' : 'Inactive'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaContainer >
    );
};

export const styles = StyleSheet.create({
    basicTxtStyle: {
        fontFamily: Fonts.HEAVY,
        fontSize: Typography._15,
        color: Colors.LABEL
    },
    infoLabel: {
        fontFamily: Fonts.ROMAN,
        fontSize: Typography._13,
        color: Colors.SECONDARY_TEXT,
        marginBottom: 11
    },
    infoValue: {
        fontFamily: Fonts.HEAVY,
        fontSize: Typography._15,
        color: Colors.PRIMARY,
        marginBottom: 11
    },
    innerCircleStyle: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1
    }
})

export default ClientBasicInfo;
