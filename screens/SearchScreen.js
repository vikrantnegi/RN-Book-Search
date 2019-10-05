import React from 'react';
import { TouchableOpacity, View, Platform } from 'react-native';
import * as Icon from '@expo/vector-icons';

import { Wrapper, Input } from '../components/styled';
import Logo from '../components/Logo';

export default class SearchScreen extends React.Component {
  state = {
    text: 'Dan brown',
  };

  searchBooks = () => {
    this.props.navigation.navigate('Result', {
      searchQuery: this.state.text,
    });
  };

  render() {
    return (
      <Wrapper normal center>
        <Logo />
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Input
            medium
            value={this.state.text}
            placeholder="Search Books..."
            onChangeText={changedText => this.setState({ text: changedText })}
            style={{
              flex: 1,
              paddingRight: 45,
            }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={this.searchBooks}
          >
            <Icon.Ionicons
              name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
              size={30}
              style={{ marginBottom: -3 }}
            />
          </TouchableOpacity>
        </View>
      </Wrapper>
    );
  }
}
