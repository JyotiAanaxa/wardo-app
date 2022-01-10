import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { PlusIcon } from '../../icons/plus';
import { Colors, Fonts, Typography } from '../../theme';
import { heightIntoDP } from '../../utils/app-util';

export class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.itemList
        };
    }

    render() {
        const { items } = this.state;
        const { title, styleObj, titleStyle, icon, itemStyle, itemComponent, openModal, onTitleClick } = this.props;

        let Item = ({ item }) => (
            <View style={styles.item}>
                <FastImage
                    style={{
                        width: '100%', height: heightIntoDP(230), borderRadius: 18
                    }}
                    source={{
                        uri: item,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
        );

        let EmptyComponent = () => (
            <TouchableOpacity activeOpacity={0.8} onPress={() => { openModal() }}>
                <View style={styles.listContainer}>
                    <PlusIcon />
                    <Text style={styles.emptyTextStyle}>Add Showcase Image</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <SafeAreaView style={[styles.container, styleObj]}>
                <TouchableOpacity onPress={() => { onTitleClick(title) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Text style={titleStyle}>{title}</Text>
                        {icon}
                    </View>
                </TouchableOpacity>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={items}
                    renderItem={({ item }) => <Item item={item} />}
                    ListEmptyComponent={<EmptyComponent />}
                    keyExtractor={item => item.index}
                    extraData={this.state}
                />

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: 150,
        height: heightIntoDP(230),
        backgroundColor: '#F2F2F2',
        marginRight: 10,
        marginTop: 22,
        borderRadius: 10,
        justifyContent: 'center',
        borderRadius: 18,
        marginVertical: 12,
        marginRight: 12,
        position: 'relative',
        flexWrap: 'wrap'
    },
    labelStyle: {
        fontSize: Typography.TINY,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.BOLD,
        textAlign: 'center'
    },
    ckboxContainer: {
        position: 'absolute',
        top: -8,
        right: 2,
    },
    checkboxStyle: {
        backgroundColor: Colors.WHITE,
        padding: 0,
        margin: 0,
        position: 'absolute',
        top: -10,
        right: -10
    },
    listContainer: {
        height: 220,
        width: 150,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 22,
        padding: 30,
        paddingTop: 59,
        borderRadius: 18
    },
    listTxtStyle: {
        fontSize: Typography._15,
        fontFamily: Fonts.ROMAN,
        color: Colors.LABEL,
        lineHeight: 22,
        marginRight: 10
    },
    emptyTextStyle: {
        fontSize: Typography._13,
        fontFamily: Fonts.HEAVY,
        color: Colors.SECONDARY_TEXT,
        textAlign: 'center',
        lineHeight: 18,
        marginTop: 58
    }
});

export default ListView;