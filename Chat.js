import React, {Fragment, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Balloon from './Balloon';

const KEYBOARD_AVOIDING_BEHAVIOR = Platform.select({
  ios: 'padding',
  android: 'height',
});

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  scrollViewContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    top: 10,
  },
  sendButton: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    height: 40,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 5,
  },
  messageTextInputContainer: {
    justifyContent: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: 'transparent',
    borderTopColor: Colors.light,
    alignItems: 'center',
    flexDirection: 'row',
  },
  messageTextInput: {
    flex: 1,
    minHeight: 40,
    maxHeight: 90,
    paddingHorizontal: 12,
    fontSize: 17,
    paddingTop: 8,
    marginHorizontal: 5,
    borderColor: Colors.light,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
});

const Chat = ({route}) => {
  const [message, setMessage] = useState('');
  const chat = route.params.chat;
  const currentUser = route.params.currentUser;
  return (
    <Fragment>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {chat &&
          chat.messages.map((message) => (
            <Balloon message={message} currentUser={currentUser} />
          ))}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={KEYBOARD_AVOIDING_BEHAVIOR}
        keyboardVerticalOffset={76}>
        <SafeAreaView>
          <View style={styles.messageTextInputContainer}>
            <TextInput
              style={styles.messageTextInput}
              placeholder="Digite sua mensagem..."
              placeholderTextColor={Colors.light}
              multiline
              value={message}
            />
            <TouchableOpacity
              style={styles.sendButton}
              disabled={!message}
              onPress={() => null}>
              <Text>Enviar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Fragment>
  );
};

export default Chat;
