import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Keyboard, Animated } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire';
import FieldPics from './ScreenAnimations/FieldPics';
import { HideWithKeyboard, ShowWithKeyboard } from 'react-native-hide-with-keyboard';

class Chat extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || 'Chat!',
      });
  state = {
    messages: [],
  };

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    )
      
}

componentWillUnmount() {
  Fire.shared.off()
}

get user() {
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
  }
 
  render() {
    return (
        <View style={{ flex: 1}}>
        <ScrollView style={{ height: Dimensions.get('window').height }}>
        <View style={{paddingTop: 8, paddingBottom: 28, backgroundColor:'#51A149', borderColor: '#799D86', borderWidth: 4}}>
        <FieldPics/>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer} >
        <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
      </ScrollView>
        </ScrollView>
    </View>
      
    );
  }
}

const styles = StyleSheet.create({
    contentContainer: {
      height: Dimensions.get('window').height*.60,
      zIndex: -1,
      backgroundColor: '#D0F0C0',
      borderColor: '#799D86', 
      borderWidth: 2
    },
  });


export default Chat;