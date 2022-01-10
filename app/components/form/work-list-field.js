import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box';
import { ActiveCheckBoxIcon } from '../../icons/active-checkbox';
import { InactiveCheckBoxIcon } from '../../icons/inactive-checkbox';
import { SHOW_INFO_NOTIFICATION, convertFromValuesToFlatListObj } from '../../utils/app-util';

class WorkListField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.itemList
        };
    }

    componentDidMount() {
        this.getUserInfo();
    }

    updateWorkList = (index, tempList, formikProps) => {
        let { value } = this.props;
        tempList[index].checked = !tempList[index].checked;
        let selectedObj = tempList.filter(item => item.checked);
        let selectedArr = selectedObj.map(item => item.value);
        formikProps.setFieldValue(value, selectedArr);
        this.setState({ data: tempList });
    }

    selectService = (index, formikProps, value) => {
        let { data } = this.state;
        let { editWork, userObj } = this.props;
        const tempList = data;
        if (editWork && tempList[index].checked) {
            const portfolioData = userObj.portfolio.workPortfolio;
            if (portfolioData[tempList[index].label] && portfolioData[tempList[index].label].length) {
                Alert.alert(
                    //title
                    '',
                    //body
                    'Are you sure you want to hide this category?',
                    [
                        {
                            text: 'Yes',
                            onPress: () => {
                                this.updateWorkList(index, tempList, formikProps);
                            }
                        },
                        {
                            text: 'No',
                            onPress: () => console.log('No Pressed'), style: 'cancel'
                        },
                    ],
                    { cancelable: false },
                    //clicking out side of alert will not cancel
                );
            } else {
                this.updateWorkList(index, tempList, formikProps);
            }
        } else {
            this.updateWorkList(index, tempList, formikProps);
        }
    }

    getUserInfo = () => {
        let { data } = this.state;
        let { userObj, value, formikProps } = this.props;
        let tempList = convertFromValuesToFlatListObj(data, (userObj[value] || []));
        formikProps.setFieldValue(value, userObj[value]);
        this.setState({ data: tempList });
    }


    render() {
        const { data } = this.state;
        const { touchContainer, itemStyle, titleStyle, numColumns, checkboxStyle, formikProps, value } = this.props;

        let Item = ({ item, index }) => (

            <TouchableOpacity style={touchContainer} onPress={() => { this.selectService(index, formikProps, value) }} activeOpacity={1} key={index}>
                <View style={[itemStyle, this.props.numColumns > 1 && index % 2 === 0 ? { marginLeft: 8, marginRight: 10 } : { marginLeft: 10, marginRight: 8 }]}>
                    <Text style={titleStyle}>{item.label}</Text>
                    <CheckBox
                        style={checkboxStyle}
                        onClick={() => { this.selectService(index, formikProps, value) }}
                        isChecked={item.checked}
                        unCheckedImage={<InactiveCheckBoxIcon />}
                        checkedImage={<ActiveCheckBoxIcon />} />
                </View>
            </TouchableOpacity>
        );

        return (
            <>
                <FlatList
                    style={styles.container}
                    numColumns={numColumns}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item, index }) => <Item item={item} index={index} />}
                    keyExtractor={item => item.index}
                    extraData={this.state}
                />
                {
                    formikProps.errors[value] && formikProps.touched[value] && (
                        SHOW_INFO_NOTIFICATION(formikProps.errors[value])
                    )}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginBottom: heightPercentageToDP('14%')
    },
    linearGradient: {
        width: '100%',
        height: 150
    },
});


export default WorkListField;