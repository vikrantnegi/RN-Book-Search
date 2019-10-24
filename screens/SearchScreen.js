import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from 'styled-components';

import { Search, Wrapper } from '../components/styled';
import Logo from '../components/Logo';

import { ThemeContext } from '../config/theme';

class SearchScreen extends React.Component {
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
          <ThemeContext.Consumer>
            {({ toggleTheme, theme }) => (
              <TouchableOpacity
                onPress={toggleTheme}
                style={{
                  position: 'absolute',
                  top: 50,
                  right: 20,
                  justifyContent: 'center',
                }}
              >
                <Ionicons
                  name={theme === 'light' ? 'ios-moon' : 'ios-sunny'}
                  size={32}
                  color={this.props.theme.colors.primary}
                />
              </TouchableOpacity>
            )}
          </ThemeContext.Consumer>

          <Logo />
          <Search
            onSearchChange={changedText => this.setState({ text: changedText })}
            onBlur={this.searchBooks}
            // textStyle={{}}
          />
        </Wrapper>
      </KeyboardAvoidingView>
    );
  }
}

export default withTheme(SearchScreen);
