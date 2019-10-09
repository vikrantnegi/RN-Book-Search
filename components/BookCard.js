import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import ProgressiveImage from 'react-native-image-progress';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Body, Rate } from './styled';

const BookCardComponent = props => {
  const {
    thumbnail,
    title,
    authors,
    publisher,
    averageRating,
    onPress,
  } = props;

  console.log(averageRating);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        marginVertical: 6,
        borderRadius: 4,
      }}
    >
      <View
        style={{
          flex: 1,
          height: responsiveHeight(16),
          width: responsiveWidth(16),
          backgroundColor: 'transparent',
          padding: 2,
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
          imageStyle={{ borderRadius: 4 }}
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
        <Rate rating={averageRating} />
      </View>
    </TouchableOpacity>
  );
};

export default BookCardComponent;
