import React from 'react';
import { KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { Search, Wrapper } from '../components/styled';
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
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}
      >
        <Wrapper normal style={{ justifyContent: 'center' }}>
          <Logo />
          <Search
            onSearchChange={changedText => this.setState({ text: changedText })}
            onBlur={this.searchBooks}
          />
        </Wrapper>
      </KeyboardAvoidingView>
    );
  }
}
