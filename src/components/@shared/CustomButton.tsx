import styled from '@emotion/native';
import React from 'react';

type Props = {
  bgColor: string;
  textColor?: string;
  onPress?: () => void;
  isDisabled?: boolean;
};

const DlogButton: React.FC<Props> = ({
  children,
  bgColor,
  textColor,
  onPress,
  isDisabled = false,
}) => {
  const getOpacity = () => {
    if (isDisabled) return 0.3;
    else return 1;
  };

  return (
    <ButtonContainer
      style={{ backgroundColor: bgColor, opacity: getOpacity() }}
      onPress={onPress}
      disabled={isDisabled}
    >
      {typeof children === 'string' ? (
        <ButtonText style={{ color: textColor }}>{children}</ButtonText>
      ) : (
        children
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 14px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
`;

export default DlogButton;
