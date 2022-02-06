import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

export default function SongDetails({ navigation, route }) {
  const params = route.params
  return (
    <WebView source={{
          uri: params.uri
        }}/>
  );
}

const styles = StyleSheet.create({
  SongDetails: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenOneText: {
    fontSize: 32,
  },
});
