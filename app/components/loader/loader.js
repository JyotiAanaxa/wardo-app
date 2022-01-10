import React from 'react';
import { ActivityIndicator } from 'react-native';

export const Loader = ({ color, size }) => {
    return (
        <ActivityIndicator size={size} color={color} animating={true} />
    );
};