import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import WardrobeProvider from '../context/wardrobe-context';
import { ActiveBookingIcon, InactiveBookingIcon } from '../icons/booking';
import { ActiveChatIcon, InactiveChatIcon } from '../icons/chat';
import { ActiveOutfitsIcon, InactiveOutfitsIcon } from '../icons/outfits';
import { ActiveTeleIcon, InactiveTeleIcon } from '../icons/telescope';
import { ActiveWardrobeIcon, InactiveWardrobeIcon } from '../icons/wardrobe';
import PrivacyPolicy from '../screens/auth/login/privacy-policy';
import TermsConditions from '../screens/auth/login/terms-condition';
import Bookings from '../screens/booking/booking';
import BrandStores from '../screens/brands-stores/brand-stores';
import Chat from '../screens/chat/chat';
import ChatHistory from '../screens/chat/chat-history';
import ExploreScreen from '../screens/explore/explore';
import LookBook from '../screens/outfits/lookbook/lookbook';
import LookBookList from '../screens/outfits/lookbook/lookbook-list';
import ViewLook from '../screens/outfits/lookbook/view-look';
import NewLook from '../screens/outfits/new-look/new-look';
import SaveLook from '../screens/outfits/new-look/save-look';
import Outfits from '../screens/outfits/outfits';
import ShoppingList from '../screens/outfits/shopping-list/shopping-list';
import NewShoppingListName from '../screens/outfits/shopping-list/create-list/list-name';
import ShoppingListAddItems from '../screens/outfits/shopping-list/create-list/add-item';
import ShoppingListItems from '../screens/outfits/shopping-list/create-list/items';
import ProfileAllSet from '../screens/profile/profile-all-set/profile-all-set';
import ProfileOnboarding from '../screens/profile/profile-onboarding/profile-onboarding';
import ApplyAsPro from '../screens/profile/profile-pro-styling/apply-as-pro';
import LetStarted from '../screens/profile/profile-pro-styling/lets-started';
import StartStyling from '../screens/profile/profile-pro-styling/start-styling';
import StylistInstructions from '../screens/profile/profile-pro-styling/stylist-instructions';
import Profile from '../screens/profile/profile/profile';
import StylistProfile from '../screens/profile/stylist-profile/stylist-profile';
import AddFirstItem from '../screens/wardrobe/add-first-item/add-first-item';
import CategoryBrand from '../screens/wardrobe/category-brand/category-brand';
import DeleteCategory from '../screens/wardrobe/delete-catgegory/delete-category';
import RetakeContinue from '../screens/wardrobe/retake-continue/retake-continue';
import ItemScreen from '../screens/wardrobe/wardrobe/item-list';
import Wardrobe from '../screens/wardrobe/wardrobe/wardrobe';
import { Colors, Fonts, Spacing } from '../theme';
import { AppConstants } from '../utils/app-constants';
import Setting from '../screens/settings/setting';
import DiscoverExpert from '../screens/discover-expert/discover-expert';
import SearchExpert from '../screens/discover-expert/search-expert';

/* My Store Screens */
import MyStore from '../screens/my-store/my-store';
import ClientShoppingList from '../screens/my-store/client-shopping-list';
import ClientListItems from '../screens/my-store/client-items';
import NewMyStoreListName from '../screens/my-store/create-list/store-list-name';
import MyStoreAddItems from '../screens/my-store/create-list/store-add-item';
import MyStoreItems from '../screens/my-store/create-list/store-items';
import { InactiveProfileIcon, ActiveProfileIcon } from '../icons/profile';
import { ActiveClientIcon, InactiveClientIcon } from '../icons/client';
import { ActiveStoreIcon, InactiveStoreIcon } from '../icons/store';
import MyClient from '../screens/my-client/my-client';
import ExpertProfile from '../screens/expert-profile/expert-profile';
import Expert from '../screens/expert-profile/expert/expert';
import EditService from '../screens/expert-profile/expert/edit-service';
import EditWork from '../screens/expert-profile/expert/edit-work';
import PackageMgmt from '../screens/package-mgmt/package-mgmt';
import SavePackage from '../screens/package-mgmt/save-package';
import PackageView from '../screens/package-mgmt/package-view';
import PackageList from '../screens/package-mgmt/package-list';
import ExpertList from '../screens/discover-expert/expert-list';
import CategoryList from '../screens/discover-expert/category-list';
import DataService from '../services/data-service';
import ClientLimitReach from '../screens/my-client/client-limit-reach';
import AuthService from '../services/auth'
import { useNavigation } from '@react-navigation/native';
import PortfolioItemList from '../screens/expert-profile/expert/portfolio-item-list';
import ConsumerPackageView from '../screens/package-mgmt/consumer-package-view';
import ClientProfile from '../screens/profile/profile/client-profile';
import ClientBasicInfo from '../screens/profile/profile/client-basic-info';
import ClientWardrobe from '../screens/wardrobe/wardrobe/client-wardrobe';
import ViewItem from '../screens/expert-profile/expert/view-item';
import ConsumerPortfolioList from '../screens/expert-profile/expert/consumer-portfolio-list';
import EditProfile from '../screens/profile/profile/edit-profile';

enableScreens();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();
const WardrobeStack = createNativeStackNavigator();
const OutfitStack = createNativeStackNavigator();
const StoreStack = createNativeStackNavigator();
const CreateLookStack = createNativeStackNavigator();
const ProfileOnboardingStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const ExpertNavStack = createNativeStackNavigator();
const ExpertProfileStack = createNativeStackNavigator()
const MyClientStack = createNativeStackNavigator();
const ChatStack = createNativeStackNavigator();


export const WardrobeNavigator = () => {
    return (
        <WardrobeStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Wardrobe'>
            <WardrobeStack.Screen name="Wardrobe" component={Wardrobe} />
            <WardrobeStack.Screen name="Profile" component={ProfileNavigator} />
            <WardrobeStack.Screen name="AddFirstItem" component={AddFirstItem} />
            <WardrobeStack.Screen name="RetakeContinue" component={RetakeContinue} />
            <WardrobeStack.Screen name="ItemScreen" component={ItemScreen} />
            <WardrobeStack.Screen name="DeleteCategory" component={DeleteCategory} />
            <WardrobeStack.Screen name="StylistProfile" component={StylistProfile} />
            <WardrobeStack.Screen name="EditProfile" component={EditProfile} />
        </WardrobeStack.Navigator>
    );
}

export const OutfitNavigator = () => {
    return (
        <OutfitStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            // initial route changed to My Store temporarily for QA
            initialRouteName='Outfits'
        >
            <OutfitStack.Screen name="Outfits" component={Outfits} />
            <OutfitStack.Screen name="LookBook" component={LookBook} />
            <OutfitStack.Screen name="LookBookList" component={LookBookList} />
            <OutfitStack.Screen name="ViewLook" component={ViewLook} />
            <OutfitStack.Screen name="Profile" component={ProfileNavigator} />
            <OutfitStack.Screen name="EditProfile" component={EditProfile} />
            <OutfitStack.Screen name="ShoppingList" component={ShoppingList} />
            <OutfitStack.Screen name="NewShoppingListName" component={NewShoppingListName} />
            <OutfitStack.Screen name="ShoppingListAddItems" component={ShoppingListAddItems} />
            <OutfitStack.Screen name="ShoppingListItems" component={ShoppingListItems} />
            <OutfitStack.Screen name="StylistProfile" component={StylistProfile} />
        </OutfitStack.Navigator>
    );
}

export const StoreNavigator = () => {
    return (
        <StoreStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            // initial route changed to My Store temporarily for QA
            initialRouteName='MyStore'
        >
            {/* My Store Screens  */}
            <StoreStack.Screen name="MyStore" component={MyStore} />
            <StoreStack.Screen name="ClientShoppingList" component={ClientShoppingList} />
            <StoreStack.Screen name="ClientListItems" component={ClientListItems} />
            <StoreStack.Screen name="NewMyStoreListName" component={NewMyStoreListName} />
            <StoreStack.Screen name="MyStoreAddItems" component={MyStoreAddItems} />
            <StoreStack.Screen name="MyStoreItems" component={MyStoreItems} />
        </StoreStack.Navigator>
    );
}

export const ChatNavigator = () => {
    return (
        <ChatStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='ChatHistory'
        >
            <ChatStack.Screen name="ChatHistory" component={ChatHistory} />
            <ChatStack.Screen name="Setting" component={Setting} />
        </ChatStack.Navigator>
    );
}

export const CreateLookNavigator = () => {
    return (
        <CreateLookStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="NewLook">
            <CreateLookStack.Screen name="NewLook">
                {props => (
                    <NewLook
                        {...props}
                        initialParams={{
                            lookSaveType: AppConstants.DEFAULT_LOOK_SAVE_TYPE,
                        }}
                    />
                )}
            </CreateLookStack.Screen>
            <CreateLookStack.Screen name="SaveLook" component={SaveLook} />
        </CreateLookStack.Navigator>
    );
}

export const ProfileOnboardingNavigator = () => {
    return (
        <ProfileOnboardingStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='StylistInstructions'>
            <ProfileOnboardingStack.Screen name="StylistInstructions" component={StylistInstructions} />
            <ProfileOnboardingStack.Screen name="ProfileAllSet" component={ProfileAllSet} />
            <ProfileOnboardingStack.Screen name="StartStyling" component={StartStyling} />
            <ProfileOnboardingStack.Screen name="LetStarted" component={LetStarted} />
            <ProfileOnboardingStack.Screen name="ApplyAsPro" component={ApplyAsPro} />
            <ProfileOnboardingStack.Screen name="TermsOfUse" component={TermsConditions} />
            <ProfileOnboardingStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <ProfileOnboardingStack.Screen name="ProfileOnbarding" component={ProfileOnboarding} />
        </ProfileOnboardingStack.Navigator>
    );
}

export const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Profile'>
            <ProfileStack.Screen name="Profile" component={Profile} />
            <ProfileStack.Screen name="Setting" component={Setting} />
            {/* <ProfileStack.Screen name="StartStyling" component={StartStyling} /> */}
        </ProfileStack.Navigator>
    );
}


export const RootNavigator = () => {
    return (
        <WardrobeProvider>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Main'
                mode='modal'>
                <RootStack.Screen name="Main" component={BottomTabNavigator} />
                <RootStack.Screen name="Brands" component={BrandStores} />
                <RootStack.Screen name="CreateLook" component={CreateLookNavigator} />
                <RootStack.Screen name="CategoryBrand" component={CategoryBrand} />
                <RootStack.Screen name="ShoppingList" component={ShoppingList} />
                <RootStack.Screen name="StylistInstructions" component={ProfileOnboardingNavigator} />
                <RootStack.Screen name="TermsOfUse" component={TermsConditions} />
                <RootStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
                <RootStack.Screen name="PackageView" component={PackageView} />
                <RootStack.Screen name="ViewItem" component={ViewItem} />
                <RootStack.Screen name="ChatApp" component={Chat} />
                {/* add full screen appear as modal */}
            </RootStack.Navigator>
        </WardrobeProvider>
    );
}

const ExpertNavigator = () => {
    return (
        <ExpertNavStack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="DiscoverExpert">
            <ExpertNavStack.Screen name="DiscoverExpert" component={DiscoverExpert} />
            <ExpertNavStack.Screen name="SearchExpert" component={SearchExpert} />
            <ExpertNavStack.Screen name="ExpertList" component={ExpertList} />
            <ExpertNavStack.Screen name="CategoryList" component={CategoryList} />
            <ExpertNavStack.Screen name="StylistProfile" component={StylistProfile} />
            <ExpertNavStack.Screen name="PackageList" component={PackageList} />
            <ExpertNavStack.Screen name="PortfolioItemList" component={PortfolioItemList} />
            <ExpertNavStack.Screen name="ConsumerPortfolioList" component={ConsumerPortfolioList} />
            <ExpertNavStack.Screen name="ClientProfile" component={ClientProfile} />
        </ExpertNavStack.Navigator>
    )
};

export const BottomTabNavigator = () => {
    return (

        <Tab.Navigator
            initialRouteName="Outfits"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    switch (route.name) {
                        case 'Explore':
                            return focused ? <ActiveTeleIcon /> : <InactiveTeleIcon />
                        case 'Bookings':
                            return focused ? <ActiveBookingIcon /> : <InactiveBookingIcon />
                        case 'Wardrobe':
                            return focused ? <ActiveWardrobeIcon /> : <InactiveWardrobeIcon />
                        case 'Outfits':
                            return focused ? <ActiveOutfitsIcon /> : <InactiveOutfitsIcon />
                        case 'Chat':
                            return focused ? <ActiveChatIcon /> : <InactiveChatIcon />
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: Colors.PRIMARY,
                inactiveTintColor: Colors.SECONDARY_TEXT,
                statusBarStyle: 'light-content',
                style: styles.tabContainer,
                labelStyle: styles.labelStyle,
                allowFontScaling: true,
            }}
        >
            <Tab.Screen
                name="Explore"
                component={ExpertNavigator}
                options={{
                    tabBarLabel: 'Explore'
                }}
            />
            <Tab.Screen
                name="Bookings"
                component={Bookings}
                options={{
                    tabBarLabel: 'Bookings',
                }}
            />
            <Tab.Screen
                name="Wardrobe"
                component={WardrobeNavigator}
                options={{
                    tabBarLabel: 'Wardrobe',
                }}
            />
            <Tab.Screen
                name="Outfits"
                component={OutfitNavigator}
                options={{
                    tabBarLabel: 'Outfits',
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatNavigator}
                options={{
                    tabBarLabel: 'Chat',
                }}
            />
        </Tab.Navigator>
    );
};

export const StylistRootNavigator = () => {
    const navigation = useNavigation();

    useEffect(() => {
        DataService.getClientsCount().subscribe(
            async data => {
                const user = await AuthService.getUser();
                const isFree =
                    ((user || {}).stylistInfo || {}).onboardingPlan === 'FREE';

                if (isFree && data.data >= 3) {
                    navigation.navigate('ClientLimitReach');
                }
            },
            error => {
                console.error(error);
            },
        );
    }, []);

    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Main'
            mode='modal'>
            <RootStack.Screen name="Main" component={StylistBottomTabNavigator} />
            <RootStack.Screen name="EditService" component={EditService} />
            <RootStack.Screen name="EditWork" component={EditWork} />
            <RootStack.Screen name="PackageMgmt" component={PackageMgmt} />
            <RootStack.Screen name="SavePackage" component={SavePackage} />
            <RootStack.Screen name="PackageView" component={PackageView} />
            <RootStack.Screen name="ClientLimitReach" component={ClientLimitReach} />
            <RootStack.Screen name="CreateLook" component={CreateLookNavigator} />
            <RootStack.Screen name="ViewItem" component={ViewItem} />
            <RootStack.Screen name="ChatApp" component={Chat} />
            {/* add full screen appear as modal */}
        </RootStack.Navigator>
    );
}

const ExpertProfileNavigator = () => {
    return (
        <ExpertProfileStack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="Expert">
            <ExpertProfileStack.Screen name="Expert" component={Expert} />
            <ExpertProfileStack.Screen name="ExpertProfile" component={ExpertProfile} />
            <ExpertProfileStack.Screen name="Setting" component={Setting} />
            <ExpertProfileStack.Screen name="PackageList" component={PackageList} />
            <ExpertProfileStack.Screen name="PortfolioItemList" component={PortfolioItemList} />
        </ExpertProfileStack.Navigator>
    )
};

const MyClientNavigator = () => {
    return (
        <MyClientStack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="MyClients">
            <MyClientStack.Screen name="MyClients" component={MyClient} />
            <MyClientStack.Screen name="LetStarted" component={LetStarted} />
            <MyClientStack.Screen name="ClientProfile" component={ClientProfile} />
            <MyClientStack.Screen name="LookBook" component={LookBook} />
            <MyClientStack.Screen name="LookBookList" component={LookBookList} />
            <MyClientStack.Screen name="ViewLook" component={ViewLook} />
            <MyClientStack.Screen name="ClientBasicInfo" component={ClientBasicInfo} />
            <MyClientStack.Screen name="ClientWardrobe" component={ClientWardrobe} />
            <MyClientStack.Screen name="ItemScreen" component={ItemScreen} />
            <MyClientStack.Screen name="DeleteCategory" component={DeleteCategory} />
            <MyClientStack.Screen name="ClientShoppingList" component={ClientShoppingList} />
            <MyClientStack.Screen name="ExpertProfile" component={ExpertProfile} />
        </MyClientStack.Navigator>
    )
};

export const StylistBottomTabNavigator = () => {
    return (

        <Tab.Navigator
            initialRouteName="MyClients"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    switch (route.name) {
                        case 'Profile':
                            return focused ? <ActiveProfileIcon /> : <InactiveProfileIcon />
                        case 'MyClients':
                            return focused ? <ActiveClientIcon /> : <InactiveClientIcon />
                        case 'MyStore':
                            return focused ? <ActiveStoreIcon /> : <InactiveStoreIcon />
                        case 'Chat':
                            return focused ? <ActiveChatIcon /> : <InactiveChatIcon />
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: Colors.PRIMARY,
                inactiveTintColor: Colors.SECONDARY_TEXT,
                statusBarStyle: 'light-content',
                style: styles.tabContainer,
                labelStyle: styles.labelStyle,
                allowFontScaling: true,
            }}
        >
            <Tab.Screen
                name="Profile"
                component={ExpertProfileNavigator}
                options={{
                    tabBarLabel: 'Profile'
                }}
            />
            <Tab.Screen
                name="MyClients"
                component={MyClientNavigator}
                options={{
                    tabBarLabel: 'My Clients',
                }}
            />
            <Tab.Screen
                name="MyStore"
                component={StoreNavigator}
                options={{
                    tabBarLabel: 'My Store',
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatNavigator}
                options={{
                    tabBarLabel: 'Chat',
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: Platform.OS === 'android' ? Spacing.TAB_BAR_HEIGHT : heightPercentageToDP('11%'),
        paddingTop: 12,
        paddingBottom: Platform.OS === 'android' ? 10 : 25,
        position: 'absolute',
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 14,
        zIndex: 1000
    },
    labelStyle: {
        fontFamily: Fonts.MEDIUM,
        marginTop: 4,
        fontSize: Platform.OS == 'android' ? heightPercentageToDP('1.5%') : heightPercentageToDP('1.4%')
    }
});
