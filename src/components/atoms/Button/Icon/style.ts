import styled from 'styled-components/native';
import {COLORS} from '../../../../constants';

interface PropsButton {
  background?: string;
}

export const Button = styled.TouchableOpacity<PropsButton>`
  background-color: ${({background}) =>
    background ? `${COLORS[background]}` : `transparent`};
`;
