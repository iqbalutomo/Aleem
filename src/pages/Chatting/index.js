import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts, getData, showError} from '../../utils';
import {Fire} from '../../config';

const Chatting = ({navigation, route}) => {
  const dataUstadz = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then(res => {
      console.log('user login: ', res);
      setUser(res);
    });
  }, []);

  const chatSend = () => {
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const data = {
      sendBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`,
      chatContent: chatContent,
    };
    console.log('data untuk di kirim: ', data);
    // kirim ke firebase
    Fire.database()
      .ref(
        `chatting/${user.uid}_${dataUstadz.data.uid}/allChat/${year}-${month}-${date}`,
      )
      .push(data)
      .then(res => {
        setChatContent('');
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        desc={dataUstadz.data.category}
        title={dataUstadz.data.fullName}
        onPress={() => navigation.goBack()}
        photo={{uri: dataUstadz.data.photo}}
      />
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.chatDate}>Kamis, 3 Juni, 2021</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
