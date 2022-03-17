import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import UserDefaultImage from './user.png';

const styles = StyleSheet.create({
  chatItemContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  userPairImage: {
    width: 38,
    height: 38,
    marginRight: 12,
  },
  userPairPhone: {
    fontWeight: '500',
    marginBottom: 6,
  },
  chatLastMessage: {
    fontWeight: '300',
    color: '#999',
  },
  container: {
    marginTop: 16,
    marginHorizontal: 16,
  },
});

const ChatItem = ({navigation, chat, currentUser}) => {
  const [userPair] = chat.users.filter((u) => u.id !== currentUser);
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate('Chat', {chat, currentUser});
      }}>
      <View key={chat.id} style={styles.chatItemContainer}>
        <Image source={UserDefaultImage} style={styles.userPairImage} />
        <View>
          <Text style={styles.userPairPhone}>{userPair.phone}</Text>
          <Text style={styles.chatLastMessage}>
            {chat.messages[chat.messages.length - 1]?.content}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ChatItem;
