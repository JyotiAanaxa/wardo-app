import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import { FullScreenModal } from '../components/modals/full-screen-modal/full-screen-modal';
import { FlexContainer } from './app-container';
import { Colors, Fonts, Typography } from '../theme';
import { t } from './i18n';
// import InternetIcon from '../components/icons/internet-connection-svg';

export const CheckInternetConnection = () => {
    const netInfo = useNetInfo();

    const body = (
        <FlexContainer>
            {/* <InternetIcon /> */}
            <View
                style={styles.container}>
                <Text style={styles.label}>{'' + t('net.primary')}</Text>
                <Text style={styles.bodyStyle}>
                    {'' + t('net.secondary')}
                </Text>
            </View>
        </FlexContainer>
    );

    return !netInfo.isConnected ? <FullScreenModal
        modalStyle={styles.body}
        isVisible={!netInfo.isConnected}
        body={body} />
        : null;
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    label: {
        fontSize: Typography.REGULAR,
        color: Colors.BLACK,
        opacity: 0.5,
        fontWeight: 'bold',
        fontFamily: Fonts.BOLD,
    },
    bodyStyle: {
        fontSize: Typography.SMALL,
        color: Colors.BLACK,
        lineHeight:Platform.OS=== 'android' ? 16 : 18,
        opacity: 0.3,
        textAlign: 'center',
        paddingHorizontal: '10%',
        marginTop: 20,
        fontFamily: Fonts.MEDIUM,
    },
});

export default CheckInternetConnection;
