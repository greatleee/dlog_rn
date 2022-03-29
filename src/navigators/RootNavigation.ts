import { createNavigationContainerRef } from '@react-navigation/native';

type NavigatorParamList = {
  Calendar: undefined;
  RecordDrinkModal: undefined;
};

type NavigatorNameList = 'Calendar' | 'RecordDrinkModal';

const createRootNavigation = () => {
  const navigationRef = createNavigationContainerRef<NavigatorParamList>();

  const navigate = (name: NavigatorNameList) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name);
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
