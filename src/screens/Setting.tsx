import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const Setting: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <WebView source={{ uri: 'https://litt.ly/soolzzi' }} />
    </SafeAreaView>
  );
};

export default Setting;
