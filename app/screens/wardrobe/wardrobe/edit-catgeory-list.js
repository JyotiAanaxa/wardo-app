import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, Fonts, Typography } from '../../../theme';
import CheckBox from 'react-native-check-box';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { CheckboxIcon } from '../../../icons/checkbox';
import { heightIntoDP, widthIntoDP } from '../../../utils/app-util';

export class EditCategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.itemList
        };
    }

    toggleChecked = (data) => {
        let list = this.state.items;
        let index = data.index;
        list[index].checked = !list[index].checked;
        this.setState({ list });
        let updateArr = list.filter(item => item.checked === true);
        let categoryList = updateArr.map(item => {
            let data = {
                iconUrl: item.iconUrl,
                name: item.name
            };
            return data;
        });
        this.props.onUpdateCategoryList({ list: categoryList });
    }


    render() {
        let FlatItem = ({ item, index }) => (
            <TouchableOpacity activeOpacity={0.8} onPress={() => {
                this.toggleChecked(item);
            }}>
                <View style={styles.item}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', zIndex: -1 }}>
                        <View style={{ width: '100%', height: '85%' }}>
                            <FastImage
                                style={{ height: '100%', width: '100%', alignSelf: 'center' }}
                                source={{
                                    uri: item.iconUrl,
                                    priority: FastImage.priority.normal,
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.labelStyle}>{item.name}</Text>
                    </View>
                    {item.checked && <CheckBox
                        style={styles.checkboxStyle}
                        onClick={() => { this.toggleChecked(item) }}
                        isChecked={item.checked}
                        checkedImage={<CheckboxIcon />}
                    />}
                </View>
            </TouchableOpacity>
        );

        const { styleObj } = this.props;
        const { items } = this.state;
        return (
            <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', padding: 8 }}>
                <FlatList
                    numColumns={4}
                    data={items}
                    renderItem={({ item }) => <FlatItem item={item} />}
                    keyExtractor={item => item.index}
                    extraData={this.state}
                    style={{ flex: 1, width: '100%', marginTop: 25 }}
                    contentContainerStyle={{ justifyContent: 'center', alignSelf: 'center', marginLeft: 5 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: widthPercentageToDP('18.2%'),
        height: heightPercentageToDP('13.5%'),
        marginRight: 10,
        borderRadius: 18,
        borderWidth: 1,
        zIndex: -1,
        borderColor: '#D0D0D0',
        paddingTop: 20,
        paddingBottom: 22,
        paddingHorizontal: 10,
        marginTop: 8,
        marginBottom: 3,
        position: 'relative'
    },
    labelStyle: {
        marginTop: 8,
        marginBottom: 8,
        fontSize: Typography._10,
        color: Colors.LABEL,
        fontFamily: Fonts.MEDIUM,
        textAlign: 'center',
    },
    checkboxStyle: {
        padding: 0,
        margin: 0,
        position: 'absolute',
        top: -6,
        right: -8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.12,
        elevation: 16,
    },
});

export default EditCategoryList;
