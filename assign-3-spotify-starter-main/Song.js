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

export default function Song(props) {
  const duration = props.id + 1
  return(
    <View style={styles.songParent}>
      <View style={styles.id}>
        <Text style={styles.text}> {duration} </Text>
      </View>
      <View style={styles.albumpic}>
        <Image style = {styles.picture} source={{uri: props.url}}/>
      </View>
      <View style={styles.songtitle}>
        <Text style = {styles.text} numberOfLines={1}> {props.title} </Text>
        <Text style = {styles.textLight} numberOfLines={1}> {props.artist} </Text>
      </View>
      <View style={styles.albumname}>
        <Text style = {styles.text} numberOfLines={1}> {props.album} </Text>
      </View>
      <View style={styles.durationstyle}>
        <Text style = {styles.text}> {props.duration} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  songParent: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    width: '100%',
    height: 80,
    marginVertical: -3

  },
  id: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0
  },
  albumpic: {
    width: '19%',
    height: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: 60,
    height: 60
  },
  songtitle: {
    width: '25%',
    justifyContent: 'center',
  },
  albumname: {
    width: '25%',
    justifyContent: 'center',
  },
  durationstyle: {
    width: '10%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: Colors.gray,
    fontFamily: 'Arial Rounded MT Bold'
  },
  textLight: {
    fontSize: 12,
    color: Colors.gray,
    fontFamily: 'Arial'
  }

});
