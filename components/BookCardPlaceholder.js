import React from 'react';
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
  <Placeholder
    Animation={ShineOverlay}
    style={{
      marginVertical: 6,
      marginHorizontal: 10,
      borderRadius: 4,
    }}
    Left={props => (
      <PlaceholderMedia
        style={[
          props.style,
          {
            width: responsiveWidth(22),
            height: responsiveHeight(16),
          },
        ]}
      />
    )}
  >
    <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={70} />
    <PlaceholderLine style={{ marginTop: responsiveHeight(1.5) }} width={50} />
    <PlaceholderLine width={50} />
  </Placeholder>
);

export default BookCardPlaceholderComponent;
