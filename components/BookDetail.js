import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import ProgressiveImage from 'react-native-image-progress';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import ReadMore from 'react-native-read-more-text';
import { Body, Rate, Button, Scroll, BookCard } from './styled';

class BookDetailComponent extends Component {
  _openLinkToBook = async linkType => {
    const { bookData } = this.props;

    await WebBrowser.openBrowserAsync(bookData[linkType]);
  };

  _renderTruncatedFooter = handlePress => (
    <Body marginTop={5} primary onPress={handlePress}>
      Read more
    </Body>
  );

  _renderRevealedFooter = handlePress => (
    <Body marginTop={5} primary onPress={handlePress}>
      Show less
    </Body>
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
      <Scroll showsVerticalScrollIndicator={false}>
        <BookCard style={{ padding: 8, marginTop: 12 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginBottom: 15,
            }}
          >
            <ProgressiveImage
              source={{ uri: medium === null ? thumbnail : medium }}
              style={styles.albumImage}
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
              <Body small bold style={styles.detailsHeading}>
                Title
              </Body>
              <Body medium style={styles.details}>
                {title}
              </Body>
              <Body small bold style={styles.detailsHeading}>
                Author
              </Body>
              <Body medium style={styles.details}>
                {authors} ({publishedDate})
              </Body>
              <Body small bold style={styles.detailsHeading}>
                Publisher
              </Body>
              <Body medium style={styles.details}>
                {publisher}
              </Body>
              {rating}
            </View>
          </View>
          <ReadMore
            numberOfLines={5}
            renderTruncatedFooter={this._renderTruncatedFooter}
            renderRevealedFooter={this._renderRevealedFooter}
          >
            <Body style={styles.cardText}>{description}</Body>
          </ReadMore>
          <Button
            primary
            width="100%"
            onPress={() => this._openLinkToBook('infoLink')}
          >
            <Body white center noMargin>
              Read on Play Store
            </Body>
          </Button>
        </BookCard>
      </Scroll>
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
  cardText: {
    marginBottom: 20,
    lineHeight: 25,
  },
});

export default BookDetailComponent;
