import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Progress from 'react-native-progress';
import ProgressiveImage from 'react-native-image-progress';
import * as ExpoIcon from '@expo/vector-icons';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { Body, Rate, Wrapper } from './styled';

class BookDetailComponent extends Component {
  _openLinkToBook = async linkType => {
    const { bookData } = this.props;

    await WebBrowser.openBrowserAsync(bookData[linkType]);
  };

  _renderViewMoreLess = (onPress, viewBody) => (
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
      <Body
        style={{
          color: '#000',
        }}
      >
        {viewBody}
      </Body>
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
        averageRating,
      },
    } = this.props;

    const rating = averageRating ? (
      <Rate starSize={30} rating={averageRating} />
    ) : null;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 10,
        }}
      >
        <Wrapper>
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
              <Body small style={styles.detailsHeading}>
                Title
              </Body>
              <Body medium style={styles.details}>
                {title}
              </Body>
              <Body small style={styles.detailsHeading}>
                Author
              </Body>
              <Body medium style={styles.details}>
                {authors} ({publishedDate})
              </Body>
              <Body small style={styles.detailsHeading}>
                Publisher
              </Body>
              <Body medium style={styles.details}>
                {publisher}
              </Body>
              {rating}
            </View>
          </View>
          <Body style={styles.lyrics}>{description}</Body>

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
        </Wrapper>
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
    marginRight: 10,
  },
  detailsHeading: { marginBottom: 3 },
  details: {
    marginBottom: 15,
  },
  lyrics: {
    paddingBottom: 20,
    lineHeight: 22,
  },
});

export default BookDetailComponent;
