import React from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import firebase from 'firebase';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;

  function handlePress() {
    const db = firebase.firestore();
    const ref = db.collection('memos');
    ref.add({
      bodyText: 'Hello',
    })
      .then((docRef) => {
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('Error', error);
      });
  }

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton
        name='check'
        onPress={handlePress}
      />
    </KeyboardSafeView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex:1,
  },
  input: {
    flex:1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  }
})
