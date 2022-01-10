import React from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import { Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import { Colors, Fonts, Typography } from '../../theme';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import BackIcon from '../../icons/back.js';
import IconButton from '../buttons/icon-button';

export const HeaderBar = ({
    containerStyle,
    headerStyle,
    backgroundColor,
    statusBarColor,
    leftIcon,
    centerIcon,
    leftClick,
    txtStyle,
    rightBtnDisabled,
    rightIcon,
    rightText,
    rightClick,
    rightBtnStyle,
    rightTxtStyle,
    title,
    subTitle,
    backButton
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Header
                style={{ backgroundColor: backgroundColor, alignItems: 'center', ...headerStyle }}
                noShadow={true}
                hasTabs={true}
                androidStatusBarColor={statusBarColor || Colors.STATUS_BAR}
                iosBarStyle={"dark-content"}
            >
                <Left style={{ flex: 1 }}>
                    {backButton ? <IconButton iconComponent={<BackIcon />} onSubmit={leftClick} /> :
                        <TouchableOpacity onPress={leftClick}>
                            <View>
                                {leftIcon}
                            </View>
                        </TouchableOpacity>}
                </Left>
                <Body style={{ flex: 1, alignItems: 'center' }}>
                    <View>
                        {centerIcon}
                    </View>
                    <Title style={txtStyle ? txtStyle : styles.txtStyle}>{title}</Title>
                    {subTitle && <Subtitle style={styles.subTxtStyle}>{subTitle}</Subtitle>}
                </Body>
                <Right style={{ flex: 1 }}>
                    <TouchableOpacity
                        disabled={rightBtnDisabled}
                        onPress={rightClick}>
                        <View style={[styles.btnStyle, rightBtnStyle]}>
                            {rightText ? <Text style={rightTxtStyle}>{rightText}</Text> : rightIcon}
                        </View>
                    </TouchableOpacity>
                </Right>
            </Header>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        position: 'absolute',
        paddingHorizontal: Platform.OS === 'android' ? 4 : 10,
        top: Platform.OS === 'android' ? 0 : 30,
        zIndex: 999

    },
    btnStyle: {
        padding: 8
    },
    txtStyle: {
        color: Colors.LABEL,
        fontSize: Typography.H2,
        fontFamily: Fonts.BOLD,
        fontWeight: '900'
    },
    subTextStyle: {

    }
})
