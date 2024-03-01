import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Appbar, ThemeProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './ResizeMapStyles';

const ResizeMap = ({ navigation }) => {
  return (
    <>
      <View>
        {/* Appbar */}
        <Appbar.Header style={styles.top_Bar} dark={true} mode='center-aligned'>
          <View style={styles.appBarContent}>
            <Text
              style={styles.appBarTextStyle}
              onPress={() => {
                navigation.navigate('SavedTemplatesScreen');
              }}
            >
              Save
            </Text>
            <Text
              style={styles.appBarTextStyle}
              onPress={() => {
                navigation.navigate('SavedTemplatesScreen');
              }}
            >
              Cancel
            </Text>
          </View>
        </Appbar.Header>
      </View>
      {/* Image view */}
      <View style={styles.imageView}>
        <Image
          style={styles.imageStyling}
          source={{ uri: 'https://i.ibb.co/GkDvJSp/map-img.jpg' }}
        />
      </View>
    </>
  );
};

export default ResizeMap;