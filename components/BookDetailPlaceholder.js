import React from 'react';
import { View } from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from 'rn-placeholder';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const BookCardPlaceholderComponent = () => (
  <View style={{ padding: 10 }}>
    <Placeholder
      Animation={ShineOverlay}
      style={{
        marginBottom: 15,
      }}
      Left={props => (
        <PlaceholderMedia
          style={[
            props.style,
            {
              height: responsiveHeight(30),
              width: '40%',
            },
          ]}
        />
      )}
    >
      <PlaceholderLine style={{ marginTop: responsiveHeight(2) }} width={30} />
      <PlaceholderLine width={75} />
      <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
      <PlaceholderLine width={75} />
      <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={30} />
      <PlaceholderLine width={75} />
    </Placeholder>
    <Placeholder Animation={ShineOverlay}>
      <PlaceholderLine style={{ marginTop: responsiveHeight(0.5) }} />
      <PlaceholderLine style={{ marginTop: responsiveHeight(0.5) }} />
      <PlaceholderLine style={{ marginTop: responsiveHeight(0.5) }} />
      <PlaceholderLine style={{ marginTop: responsiveHeight(0.5) }} />
      <PlaceholderLine style={{ marginTop: responsiveHeight(0.5) }} />
      <PlaceholderLine style={{ marginTop: responsiveHeight(0.5) }} />
    </Placeholder>
  </View>
);

export default BookCardPlaceholderComponent;
