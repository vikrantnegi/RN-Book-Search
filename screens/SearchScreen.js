import React from 'react';
import {
  Keyboard,
  FlatList,
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Body,
  Wrapper,
  LoginWrapper,
  Input,
  Button,
  Scroll,
  Spacer,
} from '../components/styled';
import Logo from '../components/Logo';
import AppConfig from '../config/appConfig';

export default class SearchScreen extends React.Component {
  state = {
    text: '',
  };

  render() {
    return (
      <Wrapper normal center style={{}}>
        <Logo />
        <Input
          medium
          value={this.state.text}
          placeholder="Search Books..."
          onChangeText={changedText => this.setState({ text: changedText })}
        />
      </Wrapper>
    );
  }
}
