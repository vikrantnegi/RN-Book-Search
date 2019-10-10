import React from 'react';

import { Input, Wrapper, Flat } from '../components/styled';
import AppConfig from '../config/appConfig';
import { fetchDataHandler } from '../utils/utils';
import BookCardComponent from '../components/BookCard';
import BookCardPlaceholder from '../components/BookCardPlaceholder';

const { apiEndPoint } = AppConfig;

export default class ResultScreen extends React.Component {
  state = {
    booksList: [...new Array(10).fill({})],
    isDataFetched: false,
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = async () => {
    const { searchQuery } = this.props.navigation.state.params;

    const { items: books } = await fetchDataHandler(
      `${apiEndPoint}?maxResults=30&q=${searchQuery}`
    );

    console.log({ books });

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

  renderX = () => {
    const { booksList } = this.state;

    return (
      <React.Fragment>
        <Flat
          noMargin
          data={booksList}
          renderItem={this._renderBookComponent}
          keyExtractor={item => item.bookId}
        />
      </React.Fragment>
    );
  };

  render() {
    const { isDataFetched } = this.state;

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
        {isDataFetched ? this.renderX() : this.renderPlaceholders()}
      </Wrapper>
    );
  }
}
