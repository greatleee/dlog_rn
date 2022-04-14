import { createNavigationContainerRef } from '@react-navigation/native';

type RecordDrinkModalParams = {
  date: string;
};

export type NavigatorParamList = {
  Calendar: undefined;
  RecordDrinkModal: RecordDrinkModalParams;
};

type NavigatorNameList = 'Calendar' | 'RecordDrinkModal';
type ParamsType = RecordDrinkModalParams | undefined;

const createRootNavigation = () => {
  const navigationRef = createNavigationContainerRef<NavigatorParamList>();

  const navigate = (name: NavigatorNameList, params: ParamsType) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  };

  const goBack = () => {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  };

  return {
    navigationRef,
    navigate,
    goBack,
  };
};

const RootNavigation = createRootNavigation();

export default RootNavigation;
