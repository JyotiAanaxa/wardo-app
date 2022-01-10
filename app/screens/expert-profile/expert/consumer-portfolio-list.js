import React, { Component } from 'react';
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { HeaderBar } from '../../../components/header/header';
import { Loader } from '../../../components/loader/loader';
import { Colors, Fonts, Mixins, Typography } from '../../../theme';
import { FlexContainer, SafeAreaContainer } from '../../../utils/app-container';
import { heightIntoDP } from '../../../utils/app-util';

class ConsumerPortfolioList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isVisible: false,
            itemList: []
        };
        this.page = 0;
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.fetchItems();
        });
    }

    componentWillUnmount() {
        this.props.navigation.removeListener('focus');
        this.setState({ itemList: [] });
    }
    fetchItems = async () => {
        this.setState({ isLoading: true });
        const { key, userData } = this.props.route.params;
        if (key == 'looksCreated') {
            let looksCreatedArr = userData.stylistInfo.portfolio ? userData.stylistInfo.portfolio.looksCreated : [];
            this.setState({ itemList: looksCreatedArr, isLoading: false });
        } else {
            let portfolioArr = userData.stylistInfo.portfolio ? userData.stylistInfo.portfolio.workPortfolio[key] : [];
            this.setState({ itemList: portfolioArr, isLoading: false });
        }
    }

    render() {
        const { title } = this.props.route.params;
        const { navigation } = this.props;
        const { itemList, isLoading } = this.state;

        const Item = ({ item }) => (
            <TouchableOpacity onPress={() => {
                navigation.navigate('ViewItem', { imageUrl: item });
            }} style={{ width: '50%', height: heightIntoDP(230) }}>
                <View style={styles.item}>
                    <FastImage
                        style={{ width: '100%', height: '100%', borderRadius: 18 }}
                        source={{
                            uri: item,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </View>
            </TouchableOpacity>
        );

        const renderItem = ({ item }) => (
            <Item item={item} />
        );

        return (
            <SafeAreaContainer style={{ alignItems: 'center', padding: 20, paddingBottom: heightPercentageToDP('7%'), }}>

                <HeaderBar
                    backButton
                    leftClick={() => navigation.goBack()}
                    title={title}
                    txtStyle={styles.titleStyle}
                />

                <FlatList
                    style={{ marginTop: Platform.OS === 'android' ? 40 : 60, width: Platform.OS === 'android' ? '100%' : '92%' }}
                    contentContainerStyle={itemList && itemList.length > 0 ? { justifyContent: 'center' } : { flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={itemList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={!isLoading ?
                        <FlexContainer>
                            <Text style={styles.msgStyle}>No items found</Text>
                        </FlexContainer> :
                        <Loader color={Colors.PRIMARY} size={30} />}
                    extraData={itemList}
                />
            </SafeAreaContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    item: {
        marginVertical: 15,
        // height: heightIntoDP(260),
        margin: 5,
        borderRadius: 18
    },
    title: {
        fontSize: 32,
    },
    msgStyle: {
        fontSize: Typography._15,
        color: Colors.SECONDARY_TEXT,
        marginTop: 20,
        textTransform: 'capitalize',
        fontFamily: Fonts.ROMAN
    },
    noItemContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: -20
    },

    btnContainer: {
        width: '50%',
        height: heightIntoDP(60),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        borderRadius: 18,
        shadowColor: '#382D7C',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 8,
        position: 'absolute',
        bottom: Platform.OS === 'android' ? heightPercentageToDP('5%') : heightPercentageToDP('10%')
    },

    labelStyle: {
        color: Colors.WHITE,
        fontSize: Typography._16,
        fontFamily: Fonts.MEDIUM,
    },
    rightTxtStyle: {
        color: Colors.PRIMARY,
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
    },
    titleStyle: {
        color: Colors.LABEL,
        fontSize: Typography._16,
        fontFamily: Fonts.HEAVY,
    }
});


export default ConsumerPortfolioList;
