import styled from 'styled-components/native';
import {COLORS} from '../../../constants';

export const Label = styled.Text`
  font-size: ${({fontSize}) => fontSize};
  line-height: ${({lineHeight}) => lineHeight};
  font-family: ${({fontFamily}) => fontFamily};
  font-weight: ${({fontWight}) => fontWight};
  color: ${({color}) => (color ? `${COLORS[color]}` : COLORS['white-default'])};
`;
