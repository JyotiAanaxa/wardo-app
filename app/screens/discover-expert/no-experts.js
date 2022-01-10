import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import NoResultFoundIcon from '../../icons/no-result-found-icon';

import {
    Text,
    View,
} from 'react-native';
import { Colors, Typography, Fonts } from '../../theme';
import { dpToHeightPercent } from '../../utils/app-util';


const NoExpertFound = () => (
    <View flex={1} justifyContent="center" alignItems="center">
        <NoResultFoundIcon />
        <Text style={styles.noResultTitle}>We are sorry</Text>
        <Text style={styles.noResultSubTitle}>
            We don't have any experts with that name Perhaps you can search another
            name?
    </Text>
    </View>
);



export default NoExpertFound;

const styles = EStyleSheet.create({

    noResultTitle: {
        color: Colors.LABEL,
        fontSize: Typography._20,
        lineHeight: Typography._18,
        fontFamily: Fonts.HEAVY,
        marginTop: dpToHeightPercent(30),
        marginBottom: dpToHeightPercent(10),
    },

    noResultSubTitle: {
        maxWidth: 250,
        color: '#979797',
        fontSize: Typography._12,
        lineHeight: Typography._16,
        fontFamily: Fonts.ROMAN,
        textAlign: 'center',
    },
});
