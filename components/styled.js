import { KeyboardAvoidingView, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { mapToTheme as theme } from 'styled-map';
import StarRating from 'react-native-star-rating';
import SafeAreaView from 'react-native-safe-area-view';
import SearchBar from 'react-native-material-design-searchbar';

export const Row = styled.View`
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;

export const Line = styled.View`
  height: 2px;
  background-color: ${props => props.theme.colors.shadow};
  width: 200px;
  margin: 20px 0;
`;

export const RowAligned = styled(Row)`
  align-items: ${theme('flexAlign')};
  justify-content: ${theme('flexAlign')};
`;

export const Block = styled.View`
  margin-bottom: ${theme('spacing')};
`;

export const Spacer = styled(Block)`
  margin-top: ${theme('spacing')};
`;

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  padding-horizontal: ${theme('spacing')};
  background-color: ${props => props.theme.colors.bg};
`;

export const FullScreenWrapper = styled(Wrapper)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.loadingBg};
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.colors.bg};
`;

export const Flat = styled(Scroll)`
  flex: 1;
  background-color: ${props => props.theme.colors.bg};
  padding-horizontal: ${theme('spacing')};
`.withComponent(FlatList);

export const Body = styled.Text`
  font-size: ${theme('size')};
  font-weight: ${theme('fontWeight')};
  color: ${theme('colors')};
  margin-bottom: ${theme('spacing')};
  margin-top: ${props => props.marginTop || 0};
  opacity: ${props => (props.faded ? 0.6 : 1)};
  text-align: ${theme('textAlign')};
  align-self: ${theme('flexAlign')};
  margin-right: ${props =>
    props.marginRight ? props.theme.spacing.default : 0};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#9B9B9B',
})`
  height: ${props => props.theme.height.input};
  color: ${props => props.theme.colors.default};
  background-color: ${props => props.theme.colors.shadow};
  border-radius: 5;
  padding-horizontal: ${theme('spacing')};
  text-align-vertical: top;
  align-self: stretch;
  font-size: ${theme('size')};
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${theme('colors')};
  height: ${theme('button')};
  width: ${props => props.width || props.theme.layout.width}
  margin-top: ${theme('spacing')};
  margin-right: ${props =>
    props.marginRight ? props.theme.spacing.default : 0}
`;

export const BookCard = styled.View`
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 5px 12px;
`;

export const Search = styled(SearchBar).attrs(props => ({
  autoCorrect: false,
  placeholder: 'Search Books...',
  padding: 5,
  returnKeyType: 'search',
  height: 50,
}))``;

export const Rate = styled(StarRating).attrs(props => ({
  disabled: true,
  maxStars: 5,
  fullStarColor: '#f1c40f',
  starSize: 20,
  iconSet: 'Ionicons',
  emptyStar: 'ios-star-outline',
  fullStar: 'ios-star',
  halfStar: 'ios-star-half',
  containerStyle: { justifyContent: 'flex-start' },
  starStyle: { marginHorizontal: 1 },
}))`
  align-items: flex-start;
`;
