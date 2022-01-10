import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Colors, Typography, Fonts } from '../../../theme';
import CheckBox from 'react-native-check-box';
import FastImage from 'react-native-fast-image';
import { CheckboxIcon } from '../../../icons/checkbox';

export class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.itemList
        };
    }

    toggleChecked = (id, index) => {
        let list = this.props.itemList;
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list[i].data.length; j++) {
                list[i].data[j].checked = false;
            }
        }
        this.setState({ list });
        list[index].data[id].checked = !list[index].data[id].checked;
        this.props.onSubmit({ label: list[index].data[id].checked ? list[index].data[id].title : '' })
        this.setState({ list });
    }

    render() {

        let FlatItem = ({ item, index }) => (
            <TouchableOpacity activeOpacity={0.8} onPress={() => {
                this.toggleChecked(item.index, index);
            }}>
                <View style={styles.item}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <FastImage
                            style={{ height: '70%', width: '70%', alignSelf: 'center' }}
                            source={{
                                uri: item.iconUrl,
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.labelStyle}>{item.title}</Text>
                    </View>
                    {item.checked && <CheckBox
                        style={styles.checkboxStyle}
                        onClick={() => { this.toggleChecked(item.index, index) }}
                        isChecked={item.checked}
                        checkedImage={<CheckboxIcon />}
                    />}
                </View>
            </TouchableOpacity>
        );

        let SectionItem = ({ innerItem }) => (
            <>
                <Text style={titleStyle}>{innerItem.title}</Text>
                <FlatList
                    horizontal
                    data={innerItem.data}
                    renderItem={({ item }) => <FlatItem item={item} index={innerItem.index} />}
                    keyExtractor={item => item.id}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
                />
            </>
        );

        const { items } = this.state;
        const { styleObj, titleStyle, itemList } = this.props;
        return (
            <SafeAreaView style={[styles.container, styleObj]}>
                <FlatList
                    data={items}
                    renderItem={({ item }) => <SectionItem innerItem={item} />}
                    keyExtractor={item => item.id}
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
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: Colors.GREY,
        borderRadius: 18,
        width: 80,
        height: 100,
        marginVertical: 15,
        padding: 5,
        marginRight: 10,
        position: 'relative'
    },
    labelStyle: {
        fontSize: Typography.TINY,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.BOLD,
        textAlign: 'center',
        marginTop: 8
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
        borderRadius: 30,
        top: -8.5,
        right: -8.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 4,
    }
});

export default CategoryList;