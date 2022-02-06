import * as React from 'react';
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
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

export default function Song(props) {
  const id = props.id + 1
  const navigation = useNavigation();
  return(
    <View style={styles.songParent}>
      <View style={styles.id}>
        <Pressable onPress={() => navigation.navigate('SongPreview', {preview: props.preview})}>
          <Ionicons name="play-circle" size={22} color={Colors.spotify}/>
        </Pressable>
      </View>
      <Pressable style={styles.albumpic} onPress={() => navigation.navigate('SongDetails', {uri: props.details})}>
        <Image style = {styles.picture} source={{uri: props.url}}/>
      </Pressable>
      <Pressable style={styles.songtitle} onPress={() => navigation.navigate('SongDetails', {uri: props.details})}>
        <Text style = {styles.text} numberOfLines={1}> {props.title} </Text>
        <View>
          {props.artists.map((item, idx) => {
            return <Text style = {styles.textLight} numberOfLines={1}> {item.name} </Text>
          })}
        </View>

        <Text style = {styles.textLight} numberOfLines={1}> {props.artist} </Text>
      </Pressable>
      <Pressable style={styles.albumname} onPress={() => navigation.navigate('SongDetails', {uri: props.details})}>
        <Text style = {styles.text} numberOfLines={1}> {props.album} </Text>
      </Pressable>
      <Pressable style={styles.durationstyle} onPress={() => navigation.navigate('SongDetails', {uri: props.details})}>
        <Text style = {styles.text}> {props.duration} </Text>
      </Pressable>
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
  },
  rowParent: {
    flexDirection: 'row',
  }

});
