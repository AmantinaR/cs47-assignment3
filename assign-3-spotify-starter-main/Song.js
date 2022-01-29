import { StyleSheet, Text, SafeAreaView,
  View,
  Platform,
  TouchableOpacity,
  Image, Pressable} from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import { Colors } from './Themes';
import { Images } from './Themes';

export default function Song({ url, title, artist, album, duration }) {
  return(
    <View style={styles.songParent}>
      <View style={styles.id}>
        <Text style={styles.text}> 0 </Text>
      </View>
      <View style={styles.albumpic}>
      </View>
      <View style={styles.songtitle}>
      </View>
      <View style={styles.albumname}>
      </View>
      <View style={styles.durationstyle}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  songParent: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: 'white'
  },
  id: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white'
  },
  albumpic: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'white'
  },
  songtitle: {
    width: '25%',
    borderWidth: 1,
    borderColor: 'white'
  },
  albumname: {
    width: '20%',
    borderWidth: 1,
    borderColor: 'white'
  },
  durationstyle: {
    width: '10%',
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Arial Rounded MT Bold'
  }

});
