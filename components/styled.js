import { KeyboardAvoidingView, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { mapToTheme as theme } from 'styled-map';
import SafeAreaView from 'react-native-safe-area-view';

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

export const Wrapper = styled.View`
  flex: 1;
  align-items: ${theme('flexAlign')};
  justify-content: ${theme('flexAlign')};
  padding-horizontal: ${theme('spacing')};
  background-color: ${props => props.theme.colors.bg};
`;

export const Bg = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.bg};
`.withComponent(SafeAreaView);

export const LoginWrapper = styled(Wrapper)`
  padding-horizontal: 0;
  width: 260px;
`.withComponent(KeyboardAvoidingView);

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
  color: ${theme('colors')};
  margin-bottom: ${theme('spacing')};
  margin-top: ${props => props.marginTop || 0};
  opacity: ${props => (props.faded ? 0.6 : 1)};
  text-align: ${theme('textAlign')};
  align-self: ${theme('flexAlign')};
  margin-right: ${props =>
    props.marginRight ? props.theme.spacing.default : 0};
`;

export const Input = styled.TextInput`
  height: ${props => props.theme.height.input};
  border-bottom-color: ${props => props.theme.colors.shadow};
  border-bottom-width: 1px;
  margin-bottom: ${theme('spacing')};
  color: ${theme('colors')};
  text-align-vertical: top;
  align-self: stretch;
`;

export const Heading = styled(Body)``;

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

const Shadow = styled.View`
  shadow-color: ${props => props.theme.colors.shadow};
  shadow-offset: 0px 0px;
  shadow-radius: 4px;
`;

export const Header = styled.View`
  height: ${props => props.theme.height.header};
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${theme('spacing')};
`;
