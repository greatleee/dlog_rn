import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRecoilState } from 'recoil';
import colors from '@constants/colors';
import styled from '@emotion/native';
import RecordDrinkModalSection from './Section';
import { DrinkTypes, DrinkTypesInfo } from '../../models/drinkType';
import { recordDrinkModalAtom } from '../../atoms/recordDrinkModal.atoms';

const DrinkAmountSection: React.FC = () => {
  const title = '얼마나 마셨오?';
  const [recordDrinkModalState, setRecordDrinkModalState] =
    useRecoilState(recordDrinkModalAtom);

  const getAmount = (drinkType: DrinkTypes): number => {
    const drinkAmount = recordDrinkModalState.drinkAmounts.find(
      drinkAmount => drinkAmount.type === drinkType
    );
    return drinkAmount ? drinkAmount.amount : 0;
  };

  const changeAmount = (drinkType: DrinkTypes, step: 1 | -1) => {
    let drinkAmounts = recordDrinkModalState.drinkAmounts.map(drinkAmount => {
      if (drinkAmount.type === drinkType) {
        const amount = drinkAmount.amount + step;
        return {
          type: drinkType,
          amount: amount < 1 ? 0 : amount,
        };
      }
      return drinkAmount;
    });

    setRecordDrinkModalState({
      ...recordDrinkModalState,
      drinkAmounts,
    });
  };

  return (
    <RecordDrinkModalSection title={title}>
      {DrinkTypesInfo.map((info, index) => (
        <Row key={info.type} style={index !== 0 ? styles.notFirstRow : {}}>
          <View>
            <Text>
              {info.label} {getAmount(info.type)} 병 ({info.unit})
            </Text>
          </View>

          <Buttons>
            <TouchableOpacity
              style={styles.addButton}
              onPress={changeAmount.bind(null, info.type, 1)}
            >
              <Icon name="add-outline" size={28}></Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={changeAmount.bind(null, info.type, -1)}>
              <Icon name="remove-outline" size={28}></Icon>
            </TouchableOpacity>
          </Buttons>
        </Row>
      ))}
    </RecordDrinkModalSection>
  );
};

const Row = styled.View`
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 24px;
`;

const Buttons = styled.View`
  flex-direction: row;
  border: 1px solid ${colors.gray400};
  border-radius: 4px;
`;

const styles = StyleSheet.create({
  notFirstRow: {
    marginTop: 8,
  },
  addButton: {
    borderRightWidth: 1,
    borderRightColor: colors.gray400,
  },
});

export default DrinkAmountSection;
