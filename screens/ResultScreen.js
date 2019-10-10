import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { Input, Wrapper, Flat, Body } from '../components/styled';
import AppConfig from '../config/appConfig';
import { fetchDataHandler } from '../utils/utils';
import BookCardComponent from '../components/BookCard';
import BookCardPlaceholder from '../components/BookCardPlaceholder';
import LottieAnimationComponent from '../components/LottieAnimationComponent';

const { apiEndPoint } = AppConfig;

export default class ResultScreen extends React.Component {
  state = {
    booksList: [...new Array(10).fill({})],
    isDataFetched: false,
    noResult: false,
    text: '',
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = async () => {
    const { searchQuery } = this.props.navigation.state.params;

    const { items: books, totalItems } = await fetchDataHandler(
      `${apiEndPoint}?maxResults=30&q=${searchQuery}`
    );

    if (!totalItems) {
      this.setState({ noResult: true });

      return;
    }

    const booksList = books.map(book => {
      const {
        volumeInfo: {
          title,
          authors,
          publisher,
          publishedDate,
          description,
          imageLinks,
          averageRating,
        },
        id: bookId,
      } = book;

      return {
        bookId,
        thumbnail: imageLinks.thumbnail,
        title,
        authors: authors ? authors.toString().replace(/,/g, ', ') : '-',
        publisher: publisher ? publisher.toString().replace(/"/g, '') : '-',
        publishedDate: publishedDate ? publishedDate.substring(0, 4) : '-',
        description: description || 'No Description',
        averageRating,
      };
    });

    this.setState({
      booksList,
      isDataFetched: true,
    });
  };

  _renderBookComponent = ({ item }) => {
    const {
      thumbnail,
      title,
      authors,
      publisher,
      bookId,
      averageRating,
    } = item;

    return (
      <BookCardComponent
        key={bookId}
        title={title}
        authors={authors}
        publisher={publisher}
        thumbnail={thumbnail}
        averageRating={averageRating}
        onPress={() =>
          this.props.navigation.navigate('BookDetail', {
            bookDetails: item,
          })
        }
      />
    );
  };

  renderPlaceholders = () =>
    this.state.booksList.map((e, i) => <BookCardPlaceholder key={i} />);

  renderX = filteredListData => (
    <React.Fragment>
      <Flat
        noMargin
        data={filteredListData}
        renderItem={this._renderBookComponent}
        keyExtractor={item => item.bookId}
      />
    </React.Fragment>
  );

  renderNoResult = () => (
    <LottieAnimationComponent
      style={{
        height: responsiveHeight(40),
        width: responsiveHeight(40),
      }}
      animationSource={require('../assets/not-found.json')}
    />
  );

  render() {
    const { isDataFetched, noResult, text, booksList } = this.state;

    const filteredListData = isDataFetched
      ? [...booksList].filter(book => {
          const { title } = book;

          if (text === '') return book;
          if (title.toLowerCase().includes(text.toLowerCase())) return book;
        })
      : booksList;

    return (
      <Wrapper>
        <Input
          medium
          value={this.state.text}
          placeholder="Search Books..."
          onChangeText={changedText => this.setState({ text: changedText })}
          style={{
            marginBottom: 10,
            marginTop: 10,
          }}
        />
        {noResult
          ? this.renderNoResult()
          : isDataFetched
          ? this.renderX(filteredListData)
          : this.renderPlaceholders()}
      </Wrapper>
    );
  }
}
