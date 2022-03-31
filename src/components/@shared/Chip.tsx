import React from 'react';
import styled from '@emotion/native';

type Props = {
  bgColor: string;
  onPress?: () => {};
};

const ChipContainer = styled.TouchableOpacity`
  border-radius: 100px;
  padding: 4px 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Chip: React.FC<Props> = ({ children, bgColor, onPress }) => {
  return (
    <ChipContainer style={{ backgroundColor: bgColor }} onPress={onPress}>
      {children}
    </ChipContainer>
  );
};

export default Chip;
