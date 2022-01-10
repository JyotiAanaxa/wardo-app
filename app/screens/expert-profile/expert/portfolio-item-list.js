import React, { Component } from 'react';
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { HeaderBar } from '../../../components/header/header';
import { Loader } from '../../../components/loader/loader';
import AuthService from '../../../services/auth';
import { Colors, Fonts, Mixins, Typography } from '../../../theme';
import { AppConstants } from '../../../utils/app-constants';
import { FlexContainer, SafeAreaContainer } from '../../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK, heightIntoDP, SHOW_INFO_NOTIFICATION } from '../../../utils/app-util';
import AddPortfolioModalOption from './add-portfolio-modal';

class PortfolioItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isVisible: false,
            itemList: [],
            togglePortfolioModal: false
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
        const { key } = this.props.route.params;
        const userData = await AuthService.getUser();
        let portfolioArr = userData.stylistInfo.portfolio ? userData.stylistInfo.portfolio.workPortfolio[key] : [];
        this.setState({ itemList: portfolioArr, isLoading: false });
    }

    togglePortfolioImageModal = () => {
        this.setState({ togglePortfolioModal: !this.state.togglePortfolioModal });
    }

    onPortfolioItemClick = async (img) => {
        let { key } = this.props.route.params;
        const userData = await AuthService.getUser();
        let tempUserObj = userData;
        let temp = tempUserObj.stylistInfo.portfolio.workPortfolio;
        temp[key] ? temp[key] = temp[key].concat(img) : temp[key] = [img];
        tempUserObj.stylistInfo.portfolio.workPortfolio = temp;
        AuthService.patchUpdate('stylistInfo.portfolio', tempUserObj).subscribe(
            async (data) => {
                SHOW_INFO_NOTIFICATION('Item added successfully');
                this.togglePortfolioImageModal();
                this.fetchItems();
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
                this.togglePortfolioImageModal();
            });
    }

    render() {
        const { title, userRole, itemArr } = this.props.route.params;
        console.log(itemArr);
        const { navigation } = this.props;
        const { itemList, isLoading, togglePortfolioModal } = this.state;

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
                    rightText={userRole === AppConstants.ROLE.CONSUMER ? '' : 'Add Image'}
                    rightTxtStyle={styles.rightTxtStyle}
                    rightClick={userRole === AppConstants.ROLE.CONSUMER ? () => { } : () => { this.togglePortfolioImageModal() }}
                />

                <FlatList
                    style={{ marginTop: Platform.OS === 'android' ? 40 : 60, width: Platform.OS === 'android' ? '100%' : '92%', alignSelf: 'center', marginBottom: 20 }}
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

                <AddPortfolioModalOption
                    isVisible={togglePortfolioModal}
                    onSwipeHide={this.togglePortfolioImageModal}
                    onCameraClick={({ image }) => this.onPortfolioItemClick(image)}
                    onGallerySubmit={({ image }) => this.onPortfolioItemClick(image)}
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


export default PortfolioItemList;
