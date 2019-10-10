import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { showMessage } from 'react-native-flash-message';
import SearchBar from 'react-native-material-design-searchbar';

import { Wrapper, Input, Row, Search } from '../components/styled';
import Logo from '../components/Logo';

export default class SearchScreen extends React.Component {
  state = {
    text: '',
  };

  searchBooks = () => {
    if (this.state.text === '') {
      showMessage({
        message: 'Search query cannot be empty',
      });
      return;
    }

    this.props.navigation.navigate('Result', {
      searchQuery: this.state.text,
    });
  };

  render() {
    return (
      <Wrapper normal style={{ justifyContent: 'center' }}>
        <Logo />
        <Search
          onSearchChange={changedText => this.setState({ text: changedText })}
          onFocus={() => console.log('On Focus')}
          onBlur={this.searchBooks}
        />
      </Wrapper>
    );
  }
}
