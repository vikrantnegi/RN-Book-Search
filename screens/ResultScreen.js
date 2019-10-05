import React from 'react';
import { FlatList, View } from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from 'rn-placeholder';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { Input } from '../components/styled';
import AppConfig from '../config/appConfig';
import { fetchDataHandler } from '../utils/utils';
import BookCardComponent from '../components/BookCard';

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
      `${apiEndPoint}?maxResults=40&q=${searchQuery}`
    );

    const booksList = books.map(book => {
      const {
        volumeInfo: {
          title,
          authors,
          publisher,
          publishedDate,
          description,
          imageLinks,
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
      };
    });

    this.setState({
      booksList,
      isDataFetched: true,
    });
  };

  _renderBookComponent = ({ item }) => {
    const { thumbnail, title, authors, publisher, bookId } = item;

    return (
      <BookCardComponent
        key={bookId}
        title={title}
        authors={authors}
        publisher={publisher}
        thumbnail={thumbnail}
        onPress={() => {}}
      />
    );
  };

  renderPlaceholders = () =>
    this.state.booksList.map((e, i) => (
      <Placeholder
        key={i}
        Animation={ShineOverlay}
        style={{
          marginVertical: 6,
          borderRadius: 4,
        }}
        Left={props => (
          <PlaceholderMedia
            style={[
              props.style,
              {
                width: responsiveWidth(22),
                height: responsiveHeight(16),
              },
            ]}
          />
        )}
      >
        <PlaceholderLine
          style={{ marginTop: responsiveHeight(1) }}
          width={80}
        />
        <PlaceholderLine
          style={{ marginTop: responsiveHeight(2) }}
          width={50}
        />
        <PlaceholderLine width={80} />
      </Placeholder>
    ));

  renderX = () => {
    const { booksList } = this.state;

    return (
      <React.Fragment>
        <FlatList
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
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Input
          medium
          value={this.state.text}
          placeholder="Search Books..."
          onChangeText={changedText => this.setState({ text: changedText })}
          style={{
            marginBottom: 10,
          }}
        />
        {isDataFetched ? this.renderX() : this.renderPlaceholders()}
      </View>
    );
  }
}
