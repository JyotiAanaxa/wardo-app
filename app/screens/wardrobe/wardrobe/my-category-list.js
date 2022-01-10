import React, { Component } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors, Fonts, Typography } from '../../../theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import IconButton from '../../../components/buttons/icon-button';
import { BorderEditIcon } from '../../../icons/border-edit';

export class MyCategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let FlatItem = ({ item, isShow, isClient, clientSlug }) => (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('ItemScreen', { category: item.title, isShow: isShow, isClient: isClient, clientSlug: clientSlug });
        }}>
        <View style={styles.item}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <FastImage
              style={{ height: heightPercentageToDP('10%'), width: heightPercentageToDP('10%'), alignSelf: 'center' }}
              source={{
                uri: item.iconUrl,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.labelStyle}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );

    let SectionItem = ({ innerItem, onIconClick, isClient, clientSlug }) => (
      <>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={titleStyle}>{innerItem.title}</Text>
          {isClient ? <></> : <IconButton
            iconComponent={<BorderEditIcon />}
            buttonStyle={{ marginRight: 10 }}
            onSubmit={() => { onIconClick(innerItem.title, innerItem.index) }}
          />}
        </View>
        <FlatList
          horizontal
          data={innerItem.data}
          renderItem={({ item }) => (
            <FlatItem item={item} isShow={this.props.isShow} isClient={isClient} clientSlug={clientSlug} />
          )}
          keyExtractor={item => item.id}
          extraData={this.state}
          showsHorizontalScrollIndicator={false}
        />
      </>
    );

    const { styleObj, titleStyle, itemList, onEditIconClick, isClient, clientSlug } = this.props;
    return (
      <SafeAreaView style={[styles.container, styleObj]}>
        <FlatList
          data={itemList}
          renderItem={({ item }) => <SectionItem
            innerItem={item}
            onIconClick={onEditIconClick}
            isClient={isClient}
            clientSlug={clientSlug} />}
          keyExtractor={item => item.index}
          extraData={this.state}
          contentContainerStyle={{ flex: 1, justifyContent: 'flex-start', paddingBottom: 70 }}
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
    justifyContent: 'center',
    width: Platform.OS === 'android' ? heightPercentageToDP('15.5%') : heightPercentageToDP('15'),
    height: Platform.OS === 'android' ? heightPercentageToDP('15.5%') : heightPercentageToDP('15%'),
    marginTop: 15,
    marginLeft: -10,
    marginBottom: 10,
    marginRight: Platform.OS === 'android' ? heightPercentageToDP('1.4%') : heightPercentageToDP('0.8%'),
    position: 'relative',
  },
  labelStyle: {
    marginTop: 12,
    fontSize: Typography.SMALL,
    color: Colors.LABEL,
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center',
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
    right: -10,
  },
});

export default MyCategoryList;
