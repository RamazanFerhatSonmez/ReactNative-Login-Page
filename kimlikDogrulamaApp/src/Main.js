import React , { Component } from 'react';
import { Text , View } from 'react-native';
import * as Firebase from 'firebase';
import Header from './GlobalJS/Header';
import LoginForm from './LoginForm';
import CardSection from './CardSection';
import Button from './GlobalJS/Button';
import Spinner from './Spinner';

class Main  extends Component {
  state = { loggedIn: null };
  componentWillMount() {
      Firebase.initializeApp({
        apiKey: 'AIzaSyCRBt-b1_h9x5g2D84dsSUx6mBhW7jHA1g',
        authDomain: 'kimlikdogrulamaapp-f70c9.firebaseapp.com',
        databaseURL: 'https://kimlikdogrulamaapp-f70c9.firebaseio.com',
        projectId: 'kimlikdogrulamaapp-f70c9',
        storageBucket: 'kimlikdogrulamaapp-f70c9.appspot.com',
        messagingSenderId: '627800264855'
      });
      Firebase.auth().onAuthStateChanged((user) => {
         if(user){
           this.setState({ loggedIn: true });
         }else{
            this.setState({ loggedIn: false });
         }
      });
  }
  clickLogout() {
    Firebase.auth().signOut();
  }
  renderContent() {
    switch (loggedIn) {
      case true:
        return (
          <CardSection>
             <Button onPress={this.clickLogout.bind(this)}> CIKIŞ </Button>
          </CardSection>
        );
      case false:
        ' (
            <LoginForm />
        );
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }
  render() {
        return (
            <View>
                <Header headerText="GIRIS" />
                { this.renderContent()}
            </View>
        );
    }
}
export default Main;
