import styled from '@emotion/native';
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Chip from '../@shared/Chip';

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const IconTouchable = styled.TouchableOpacity`
  width: 48px;
  height: 100%;
  align-items: center;
`;

const MonthMover: React.FC = () => {
  return (
    <Container>
      <IconTouchable>
        <Icon name="chevron-back" size={24} />
      </IconTouchable>
      <Chip bgColor="black">
        <Text style={{ color: 'white' }}>test</Text>
      </Chip>
      <IconTouchable>
        <Icon name="chevron-forward" size={24} />
      </IconTouchable>
    </Container>
  );
};

export default MonthMover;
