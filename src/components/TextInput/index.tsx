import React from 'react';
import {
  Text,
  TextInput as RNTextInput,
  View,
  TextInputProps,
  StyleSheet,
  Dimensions,
} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  error?: string;
}

export default function TextInput({error, ...props}: CustomTextInputProps) {
  return (
    <View style={styles.container}>
      <RNTextInput style={styles.textInput} {...props} />
      {error && <Text style={styles.errorText}>* {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  textInput: {
    backgroundColor: '#FFFFFF80',
    padding: 10,
    width: Dimensions.get('screen').width - 80,
    borderRadius: 8,
  },
  errorText: {
    color: '#FFF',
  },
});
