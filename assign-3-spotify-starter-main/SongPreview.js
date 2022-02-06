import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

export default function SongPreview({ navigation, route}) {
  const params = route.params
  return (
    <WebView source={{
          uri: params.preview
        }}/>
  );
}

const styles = StyleSheet.create({
  SongPreview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTwoText: {
    fontSize: 32,
  },
});
