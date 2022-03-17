import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
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

const Balloon = ({message, currentUser}) => {
  const sent = currentUser === message.sentBy;
  const balloonColor = sent ? styles.balloonSent : styles.balloonReceived;
  const balloonTextColor = sent
    ? styles.balloonTextSent
    : styles.balloonTextReceived;
  const bubbleWrapper = sent
    ? styles.bubbleWrapperSent
    : styles.bubbleWrapperReceived;
  return (
    <View>
      <View style={{...styles.bubbleWrapper, ...bubbleWrapper}}>
        <View style={{...styles.balloon, ...balloonColor}}>
          <Text style={{...styles.balloonText, ...balloonTextColor}}>
            {message.content}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Balloon;
