import * as React from 'react';
import { StyleSheet, Text, SafeAreaView,
  View,
  Platform,
  TouchableOpacity,
  Image, FlatList} from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import Song from './Song';
import { Colors } from './Themes';
import { Images } from './Themes';
import  millisToMinuteSeconds  from "./utils/millisToMinuteSeconds";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const renderSong = (track) => {
  const firstArtist = track.item.artists
  const firstImage = track.item.album.images[0]
  console.log(track.item)
  console.log('\n')
  return(
  <Song
    url = {firstImage.url}
    title = {track.item.name}
    artists = {track.item.artists}
    album = {track.item.album.name}
    id = {track.index}
    duration = {millisToMinuteSeconds(track.item.duration_ms)}
    details = {track.item.external_urls.spotify}
    preview = {track.item.preview_url}

  />);
}

export default function SongList({data}) {
  //console.log(JSON.stringify(data));
  return(
    <SafeAreaView style={styles.listParent}>
      <View style={styles.headerParent}>
        <Image source={Images.spotify} style={styles.logo}/>
        <Text style={styles.text}> My Top Tracks</Text>
      </View>
      <FlatList
        data = {data}
        renderItem={(track) => renderSong(track)}
        keyExtractor={(track) => track.index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listParent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 4
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Arial Rounded MT Bold',
    marginVertical: 12
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 7
  },
  headerParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  }
});
