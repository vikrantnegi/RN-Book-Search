import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { fetchDataHandler } from '../utils/utils';
import BookDetailComponent from '../components/BookDetail';
import AppConfig from '../config/appConfig';
import BookDetailsPlaceholder from '../components/BookDetailPlaceholder';

const { apiEndPoint } = AppConfig;

class BookDetailScreen extends Component {
  state = {
    isDataFetched: false,
    bookData: {},
  };

  componentDidMount = () => {
    this._fetchBookData();
  };

  _fetchBookData = async () => {
    const { bookDetails } = this.props.navigation.state.params;

    const {
      volumeInfo: {
        categories,
        imageLinks: { medium, large },
        infoLink,
      },
      accessInfo: { webReaderLink },
    } = await fetchDataHandler(`${apiEndPoint}/${bookDetails.bookId}`);

    const bookData = {
      ...bookDetails,
      images: { medium: medium || null, large: large || null },
      categories: categories ? categories.toString().replace(/,/g, ', ') : '-',
      infoLink,
      webReaderLink,
    };

    setTimeout(
      () => {
        this.setState({ isDataFetched: true, bookData });
      },
      1000,
      this
    );
  };

  _renderViewMoreLess = (onPress, viewText) => (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        alignItems: 'center',
        width: responsiveWidth(20),
        borderRadius: 40,
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(1),
        marginLeft: responsiveWidth(66),
        paddingVertical: 4,
      }}
    >
      <Text
        style={{
          color: '#000',
        }}
      >
        {viewText}
      </Text>
    </TouchableOpacity>
  );

  render() {
    const { isDataFetched, bookData } = this.state;

    return (
      <React.Fragment>
        {isDataFetched ? (
          <BookDetailComponent bookData={bookData} {...this.props} />
        ) : (
          <BookDetailsPlaceholder />
        )}
      </React.Fragment>
    );
  }
}

export default BookDetailScreen;
