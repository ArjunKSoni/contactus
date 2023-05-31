import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, SafeAreaView, StyleSheet, Text, View, StatusBar, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const EmailVal = (mail) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (reg.test(mail))
  }

  const sendEmail = () => {
    emailjs.sendForm('service_zq6k8g7', 'template_i6vswhh', { name, email, mobile, message }, 'lNrL3V7dweavQ-afy')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: "ArjunKSoni1234@gmail.com",
  //     pass: "AKSoni@1234",
  //   },
  // });
  // const options = {
  //   from: "ArjunKSoni1234@gmail.com",
  //   to: 'aksoni0520@gmail.com',
  //   subject: "Assignment React Native by Arjun Kumar Soni",
  //   message: `Name:- ${name}
  //   Email:- ${email}
  //   Mobile Number:- ${mobile}
  //   Message:- ${message}`,
  // };

  const pressed = () => {
    if (EmailVal(email.trim()) !== true) {
      Alert.alert("invalid Email")
    }
    else if (name.trim() === "") {
      Alert.alert("Name is required")
    }
    else if (mobile.trim().length !== 10) {
      Alert.alert("invalid mobile number")
    }
    else {
      sendEmail();
      // transporter.sendMail(options, (err) => {
      //   if (err) Alert.alert(err)
      //   else { Alert.alert("Message send successfully..") }
      // });
      setname(""); setemail(""); setmessage(""); setmobile("")
    }
  }
  return (
    <ImageBackground
      source={require("./assets/bg.jpg")}
      resizeMode="cover"
    >
      <SafeAreaView className="h-screen">
        <View style={{ backgroundColor: "#00000080" }} className="items-center justify-center">
          <Text className="text-white p-5 font-bold text-xl">Contact us</Text>
        </View>
        <View className="mt-6">
          <View className="flex items-center justify-center">
            <TextInput
              placeholderTextColor={"gainsboro"}
              placeholder='Name'
              className="w-4/5 mt-1 h-10 mb-5 text-lg font-bold border-b-green-600 text-white border-b-2 rounded px-5"
              autoCapitalize='none'
              value={name}
              onChangeText={(e) => setname(e.trim())}
              autoCorrect={false}
            />
            <TextInput
              placeholderTextColor={"gainsboro"}
              placeholder='Mobile Number'
              keyboardType='numeric'
              value={mobile}
              onChangeText={(e) => setmobile(e.trim())}
              className="w-4/5 mt-1 h-10 mb-5 text-lg font-bold border-b-green-600 text-white border-b-2 rounded px-5"
              autoCapitalize='none'
              autoCorrect={false}
            />
            <TextInput
              placeholderTextColor={"gainsboro"}
              placeholder='Email'
              value={email}
              onChangeText={(e) => setemail(e.trim())}
              keyboardType='email-address'
              className="w-4/5 mt-1 h-10 mb-6 text-lg font-bold border-b-green-600 text-white border-b-2 rounded px-5"
              autoCapitalize='none'
              autoCorrect={false}
            />
            <Text className="text-white font-bold text-xl">Write something for us..</Text>
            <TextInput
              placeholderTextColor={"gainsboro"}
              value={message}
              onChangeText={(e) => setmessage(e)}
              placeholder='Message'
              multiline={true}
              numberOfLines={4}
              keyboardType='default'
              style={{ backgroundColor: "#00000080", height: 200, textAlignVertical: 'top' }}
              className="w-4/5 mt-1 h-10 mb-5 text-lg  text-white border-b-2 py-2 rounded-xl px-5"
              autoCapitalize='sentences'
              autoCorrect={false}
            />
            <TouchableOpacity onPress={pressed} className=" py-3 px-5 bg-green-500 rounded-xl" pre>
              <Text className="text-white font-bold text-lg">Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar barStyle="light-content" />

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

});
