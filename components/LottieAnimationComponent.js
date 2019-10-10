import React, { Component } from 'react';
import { View } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Lottie from 'lottie-react-native';

class LottieAnimationComponent extends Component {
  componentWillMount = () => {
    setTimeout(
      () => {
        this.animation.play();
      },
      100,
      this
    );
  };

  render() {
    const { animationSource, style } = this.props;

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Lottie
          loop
          autoPlay
          source={animationSource}
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: responsiveHeight(60),
            height: responsiveHeight(60),
            ...style,
          }}
        />
      </View>
    );
  }
}

export default LottieAnimationComponent;
