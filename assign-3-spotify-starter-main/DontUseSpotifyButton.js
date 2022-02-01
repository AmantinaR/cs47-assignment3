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
import Song from './Song';



export default function SpotifyButton() {

  return(
    <Pressable style = {styles.button}
      onPress={() => promptAsync()}>
        <View style={styles.flexparent}>
          <Image source={Images.spotify} style={styles.logo}/>
          <Text style = {styles.text}>CONNECT WITH SPOTIFY</Text>
        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 99999,
    backgroundColor: Colors.spotify,
    padding: 10,

  },
  text: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Arial Rounded MT Bold',
    marginLeft: 10
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 20
  },
  flexparent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
