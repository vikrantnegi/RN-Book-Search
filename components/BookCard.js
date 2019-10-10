import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import ProgressiveImage from 'react-native-image-progress';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Body, Rate, BookCard } from './styled';

const BookCardComponent = props => {
  const {
    thumbnail,
    title,
    authors,
    publisher,
    averageRating,
    onPress,
  } = props;

  const rating = averageRating ? <Rate rating={averageRating} /> : null;

  return (
    <BookCard>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          padding: 8,
        }}
      >
        <View
          style={{
            flex: 1,
            height: responsiveHeight(16),
            width: responsiveWidth(16),
            marginRight: 10,
          }}
        >
          <ProgressiveImage
            source={{ uri: thumbnail }}
            style={{
              borderRadius: 4,
              resizeMode: 'contain',
              height: '100%',
              width: '100%',
            }}
            imageStyle={{ borderRadius: 1 }}
            indicator={Progress.Circle}
            blurRadius={0}
            indicatorProps={{
              size: 28,
            }}
          />
        </View>

        <View
          style={{
            flex: 3,
            padding: 5,
          }}
        >
          <Body medium bold>
            {title}
          </Body>
          <Body numberOfLines={1} ellipsizeMode="tail">
            by {authors}
          </Body>
          {rating}
        </View>
      </TouchableOpacity>
    </BookCard>
  );
};

export default BookCardComponent;
