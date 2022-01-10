import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const RNBottomSheet = ({ body, onPress }) => {
    const sheetRef = React.useRef(null);

    useEffect(() => {
        sheetRef.current.snapTo(1);
    }, []);

    return (
        <>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'papayawhip',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button
                    title="Open Bottom Sheet"
                    onPress={() => sheetRef.current.snapTo(0)}
                />
            </View>
            <BottomSheet
                ref={sheetRef}
                initialSnap={0}
                snapPoints={[100, 0]}
                borderRadius={10}
                renderContent={body}
            />
        </>
    );
}

export default RNBottomSheet;