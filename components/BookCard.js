import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import ProgressiveImage from 'react-native-image-progress';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const BookCardComponent = props => {
  const { thumbnail, title, authors, publisher, onPress } = props;

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
          padding: 4,
          backgroundColor: 'transparent',
        }}
      >
        <View
          style={{
            padding: 2,
            marginBottom: 2,
            backgroundColor: 'transparent',
          }}
        >
          <Text numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        </View>

        <View
          style={{
            padding: 2,
            marginTop: responsiveHeight(2),
            marginVertical: 2,
            backgroundColor: 'transparent',
          }}
        >
          <Text numberOfLines={1} ellipsizeMode="tail">
            {authors}
          </Text>
        </View>

        <View
          style={{
            padding: 2,
            marginTop: 2,
            backgroundColor: 'transparent',
          }}
        >
          <Text numberOfLines={1} ellipsizeMode="tail">
            {publisher}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookCardComponent;
