import React, {Component} from 'react';
import { Image } from 'react-native'
import { StyleSheet, Text, View, Button, Alert } from 'react-native';


// export default class testText extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
//           <Text>Hello, world!</Text>
//       </View>
//       ); 
//     }
//   }

export default class testPicture extends Component {
  render() {
    let pic = {
      uri: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
      
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
