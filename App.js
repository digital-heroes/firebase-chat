/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Fragment, useRef, useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import database from '@react-native-firebase/database';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useEffect} from 'react';
import Chat from './Chat';
import Chats from './Chats';
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  bubbleWrapper: {
    flexDirection: 'column',
  },
  bubbleWrapperSent: {
    alignSelf: 'flex-end',
    marginLeft: 40,
  },
  bubbleWrapperReceived: {
    alignSelf: 'flex-start',
    marginRight: 40,
  },
  balloon: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 16,
  },
  balloonSent: {
    backgroundColor: Colors.white,
  },
  balloonReceived: {
    backgroundColor: Colors.primary,
  },
  balloonText: {
    fontSize: 18,
  },
  balloonTextSent: {
    color: Colors.black,
  },
  balloonTextReceived: {
    color: Colors.white,
  },
});


const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const messagesWrapperRef = useRef();
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  const chatRef = database().ref('/applications/17/chat');
  const messageRef = database().ref('/applications/3/chat/messages');
  // const fetchMessages = () => {
  //   chatRef.on(
  //     'value',
  //     (snapshot) => {
  //       console.warn('test');
  //       if (snapshot.val()) {
  //         console.warn(snapshot.val());
  //       }
  //     },
  //     (error) => console.error(error),
  //   );
  // };
  // useEffect(() => {
  //   fetchMessages();
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <Fragment>
  //     <ScrollView
  //       ref={messagesWrapperRef}
  //       onContentSizeChange={() =>
  //         messagesWrapperRef.current.scrollToEnd({animated: true})
  //       }
  //       contentContainerStyle={{
  //         paddingHorizontal: 20,
  //         paddingVertical: 20,
  //       }}>
  //       {user &&
  //         messages.map(({id, phone, userId, attachment, content, date}) => (
  //           <View style={styles.container}>
  //             <View style={{...styles.bubbleWrapper}}>
  //               <View style={{...styles.balloon}}>
  //                 <Text style={{...styles.balloonText}}>{content}</Text>
  //               </View>
  //             </View>
  //           </View>
  //         ))}
  //     </ScrollView>
  //   </Fragment>
  // );
};

export default App;
