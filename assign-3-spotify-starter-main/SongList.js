import { StyleSheet, Text, SafeAreaView,
  View,
  Platform,
  TouchableOpacity,
  Image, } from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";

export default function SongList() {
  return(
    <View>
    </View>
  );
}

const styles = StyleSheet.create({

});
