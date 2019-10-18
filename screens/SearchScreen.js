import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { Wrapper, Search } from '../components/styled';
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
        <KeyboardAvoidingView enabled behavior="position">
          <Logo />
          <Search
            onSearchChange={changedText => this.setState({ text: changedText })}
            onBlur={this.searchBooks}
          />
        </KeyboardAvoidingView>
      </Wrapper>
    );
  }
}
