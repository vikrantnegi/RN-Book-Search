import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Platform,
  StyleSheet,
  Image,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Progress from 'react-native-progress';
import ProgressiveImage from 'react-native-image-progress';
import * as ExpoIcon from '@expo/vector-icons';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

class BookDetailComponent extends Component {
  _openLinkToBook = async linkType => {
    const { bookData } = this.props;
    console.log(bookData);

    await WebBrowser.openBrowserAsync(bookData[linkType]);
  };

  _renderViewMoreLess = (onPress, viewText) => (
    <TouchableBounce
      onPress={() => onPress()}
      style={{
        alignItems: 'center',
        width: responsiveWidth(20),
        borderRadius: 40,
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(1),
        marginLeft: responsiveWidth(66),
        paddingVertical: 4,
        backgroundColor: '#FFF',
      }}
    >
      <Text
        style={{
          color: '#000',
        }}
      >
        {viewText}
      </Text>
    </TouchableBounce>
  );

  render() {
    const {
      bookData: {
        thumbnail,
        title,
        authors,
        publishedDate,
        publisher,
        description,
        images: { medium, large },
      },
    } = this.props;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginBottom: 15,
            }}
          >
            <ProgressiveImage
              source={{ uri: medium === null ? thumbnail : medium }}
              style={styles.albumImage}
              indicator={Progress.Circle}
              resizeMode="contain"
              blurRadius={0}
              indicatorProps={{
                size: 28,
              }}
            />
            <View
              style={{
                flex: 1,
                alignSelf: 'center',
              }}
            >
              <Text style={styles.detailsHeading}>Title</Text>
              <Text style={styles.details}>{title}</Text>
              <Text style={styles.detailsHeading}>Author</Text>
              <Text style={styles.details}>
                {authors} ({publishedDate})
              </Text>
              <Text style={styles.detailsHeading}>Publisher</Text>
              <Text style={styles.details}>{publisher}</Text>
            </View>
          </View>
          <Text style={styles.lyrics}>{description}</Text>

          <TouchableBounce
            onPress={() => this._openLinkToBook('infoLink')}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 4,
              borderRadius: 100,
              marginTop: 8,
            }}
          >
            <ExpoIcon.Ionicons name="ios-cart" />
          </TouchableBounce>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  albumImage: {
    height: responsiveHeight(25),
    width: '40%',
    marginRight: 25,
  },
  detailsHeading: { marginBottom: 3 },
  details: {
    marginBottom: 15,
    fontSize: 16,
  },
  lyrics: {
    lineHeight: 22,
    paddingBottom: 20,
  },
});

export default BookDetailComponent;
