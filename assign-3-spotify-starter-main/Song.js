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
        <Text style = {styles.text}> {props.title} </Text>
        <Text style = {styles.text}> {props.artist} </Text>
      </View>
      <View style={styles.albumname}>
        <Text style = {styles.text}> {props.album} </Text>
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
    //borderWidth: 1,
    //borderColor: 'green',
    width: '100%',
    height: 80,
    marginVertical: 4

  },
  id: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 1,
    //borderColor: 'white',
    marginLeft: 0
  },
  albumpic: {
    width: '19%',
    height: '100%',
    //borderWidth: 1,
    //borderColor: 'white',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: 80,
    height: 80
  },
  songtitle: {
    width: '25%',
    //borderWidth: 1,
    //borderColor: 'white',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  albumname: {
    width: '20%',
    //borderWidth: 1,
    //borderColor: 'white',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  durationstyle: {
    width: '10%',
    //borderWidth: 1,
    //borderColor: 'white',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: Colors.gray,
    fontFamily: 'Arial Rounded MT Bold'
  }

});
