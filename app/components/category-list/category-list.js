import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Colors, Typography, Fonts } from '../../theme';
import CheckBox from 'react-native-check-box'
import { CheckboxIcon } from '../../icons/checkbox';

export class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.itemList
        };
    }

    toggleChecked = (id) => {
        let list = this.state.items;
        list[id].checked = !list[id].checked;
        this.setState({ list });
    }

    render() {

        let Item = ({ item }) => (
            <TouchableOpacity activeOpacity={0.8} onPress={() => { this.toggleChecked(item.index) }}>
                <View style={styles.item}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ height: '75%', width: '75%', alignSelf: 'center' }}
                            resizeMode='contain'
                            source={require('../../../assets/img/sweater.png')}
                        />
                        <Text style={styles.labelStyle}>{item.title}</Text>
                    </View>
                    {item.checked && <CheckBox
                        style={styles.checkboxStyle}
                        onClick={() => { this.toggleChecked(item.index) }}
                        isChecked={item.checked}
                        checkedImage={<CheckboxIcon />}
                    />}
                </View>
            </TouchableOpacity>
        );

        const { items } = this.state;
        const { category, styleObj, titleStyle } = this.props;
        return (
            <SafeAreaView style={[styles.container, styleObj]}>
                <Text style={titleStyle}>{category}</Text>
                <FlatList
                    horizontal
                    data={items}
                    renderItem={({ item }) => <Item item={item} />}
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
        marginVertical: 12,
        marginRight: 12,
        position: 'relative'
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
    }
});

export default CategoryList;