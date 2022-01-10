import { Text, Image, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ArrowDownIcon } from '../../icons/arrow-down';
import { ArrowUpIcon } from '../../icons/arrow-up';

const ToggleButton = (
    { txt, txtStyle, onSubmit, container, innerContainer, isVisible, upComponent, downComponent }
) => {
    return (
        <TouchableOpacity
            onPress={onSubmit}
            style={container}>
            <View style={innerContainer}>
                {txtStyle && <Text style={txtStyle}>{txt}</Text>}
                {isVisible ? (upComponent ? upComponent : <ArrowUpIcon />)
                    : (downComponent ? downComponent : <ArrowDownIcon />)
                }
            </View>
        </TouchableOpacity>
    );
};

export default ToggleButton;