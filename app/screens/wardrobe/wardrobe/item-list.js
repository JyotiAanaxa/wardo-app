import React, { Component, useCallback } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { HeaderBar } from '../../../components/header/header';
import { Loader } from '../../../components/loader/loader';
import { NoItemFoundIcon } from '../../../icons/no-item';
import DataService from '../../../services/data-service';
import { Colors, Fonts, Mixins, Typography } from '../../../theme';
import { SafeAreaContainer, FlexContainer } from '../../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK, heightIntoDP } from '../../../utils/app-util';
import ThemeButton from '../../../components/buttons/theme-button';
import { HangerIcon } from '../../../icons/hanger';
import ModalOption from './modal-option';

class ItemScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isVisible: false,
            isImageLoading: false,
            itemList: [],
            isRefresh: false,
            hasLoadMore: false
        };
        this.page = 0;
    }


    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.setState({ itemList: [] });
            this.fetchItems(this.page);
        });
    }

    onSwipeHide = () => {
        this.setState({ isVisible: false });
    }

    onModalOpen = () => {
        this.setState({ isVisible: true });
    }

    onSubmit = (img) => {
        const { category } = this.props.route.params;
        this.setState({ isVisible: false });
        this.props.navigation.navigate('RetakeContinue', {
            imgSrc: img,
            category: category
        });
    }

    onGallerySubmit = (img) => {
        const { category } = this.props.route.params;
        this.setState({ isVisible: false });
        this.props.navigation.navigate('CategoryBrand', {
            imgSrc: img,
            category: category
        });
    }

    handleRefresh = (page) => {
        const { category } = this.props.route.params;
        if (category) {
            this.setState({ isRefresh: true });
            DataService.myItems(category, page).subscribe(
                resp => {
                    this.setState({
                        itemList: resp.content,
                        isRefresh: false
                    });
                },
                error => {
                    this.setState({ isRefresh: false });
                    DEFAULT_ERROR_CALLBACK(error);
                });
        }
    }


    fetchItems = (page) => {
        const { category, clientSlug } = this.props.route.params;
        if (category) {
            this.setState({ isLoading: true });
            DataService.myItems(category, page, clientSlug).subscribe(
                async (resp) => {
                    const response = await resp.content;
                    let listData = this.state.itemList;
                    let data = listData.concat(response); //concate list with response
                    this.setState({
                        itemList: data,
                        isLoading: false,
                    });
                },
                error => {
                    this.setState({ isLoading: false });
                    DEFAULT_ERROR_CALLBACK(error);
                });
        }
    }

    handleLoadMore = () => {
        if (this.state.isLoading) {
            this.page = this.page + 1; // increase page by 1
            this.fetchItems(this.page); // method for API call
        }
    }

    /* on component mount or is current screen */

    render() {
        const { category, isShow, isClient } = this.props.route.params;
        const { navigation } = this.props;
        const { itemList, isRefresh, isLoading, isVisible } = this.state;

        const Item = ({ item }) => (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('DeleteCategory', {
                    imgSrc: item.imageUrl,
                    brandLabel: item.brandName,
                    id: item.id,
                    isClient: isClient
                })
            }}>
                <View style={styles.item}>
                    <FastImage
                        style={{ width: '100%', height: '100%' }}
                        source={{
                            uri: item.imageUrl,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
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
                    title={category}
                    rightIcon={isClient ? <></> : !isLoading && itemList.length > 0 && <HangerIcon />}
                    rightClick={isClient ? () => { } : this.onModalOpen}
                />

                <FlatList
                    style={{ marginTop: Platform.OS === 'android' ? 40 : 60, width: Platform.OS === 'android' ? '100%' : '92%' }}
                    contentContainerStyle={itemList && itemList.length === 0 && Mixins.FLEX}
                    numColumns={3}
                    data={itemList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={!isLoading ?
                        <FlexContainer>
                            <View style={styles.noItemContainer}>
                                <NoItemFoundIcon />
                            </View>
                            <Text style={styles.msgStyle}>No items found</Text>
                            {isClient ? <></> : <ThemeButton
                                onSubmit={this.onModalOpen}
                                buttonStyle={styles.btnContainer}
                                labelStyle={styles.labelStyle}
                                label={'Add Item'}
                            />}
                        </FlexContainer> :
                        <Loader color={Colors.PRIMARY} size={30} />}
                    extraData={this.state.itemList}
                />

                <ModalOption
                    isVisible={isVisible}
                    onSwipeHide={this.onSwipeHide}
                    isShow={isShow}
                    onCameraClick={() => {
                        this.setState({ isVisible: false })
                        navigation.navigate('AddFirstItem', {
                            category: category
                        })
                    }}
                    onSubmit={({ image }) => this.onSubmit(image)}
                    onGallerySubmit={({ image }) => this.onGallerySubmit(image)}
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
        height: heightPercentageToDP('15%'),
        width: heightPercentageToDP('14%'),
        marginVertical: 15,
        margin: 5
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
});


export default ItemScreen;
