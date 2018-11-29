import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Title,
    Text,
    Thumbnail,
    View,
    Header,
    Left,
    Right,
    Icon,
    Button,
    Label,
} from 'native-base';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, AsyncStorage } from 'react-native';
import AlertCheck from '../../components/alertcheck/';
import PLoading from '../../components/loading';
import splash from '../splash/index';
import { searchUser,emailLogin,faccebookLogin } from '../../actions';
import welcome from '../welcome/index';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
  LoginButton,
  AccessToken
} = FBSDK;


class AuthScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            isDialog: false
        }
    }

    onEmailLogin(){
        var { dispatch } = this.props;
        if(this.props.navigation.state.params.type == 'login'){
            dispatch(NavigationActions.navigate({routeName: 'emaillogin'}));
        }else{
            dispatch(NavigationActions.navigate({routeName: 'emailsignup', params: {interest: this.props.navigation.state.params.interest}}));
        }
    }

    onPhoneLogin(){
        var { dispatch } = this.props;
        if(this.props.navigation.state.params.type == 'login'){
            dispatch(NavigationActions.navigate({routeName: 'phonelogin'}));
        }else{
            dispatch(NavigationActions.navigate({routeName: 'phonesignup', params: {interest: this.props.navigation.state.params.interest}}));
        }
    }

    onFacebookLogin(){
        console.log('facebook login')
      this.setState({isLoading:true});
      var { dispatch } = this.props;
      var  interest = this.props.navigation.state.params.interest;
      try {
          console.log('check')
          LoginManager.logOut();
      LoginManager.logInWithReadPermissions(['public_profile']).then(
      (result) => {
          console.log('result********************')
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              // getting facebook user data
              console.log(data,"asdasdasd");
                fetch('https://graph.facebook.com/v2.8/me?fields=email,gender,locale,age_range,relationship_status,birthday,name&access_token=' + data.accessToken)
                .then((response) => response.json())
                .then((json) => {
                  console.log(json,'asdasd=========');
                  // Some user object has been set up somewhere, build that user here
                  const user = [];
                  user.name = json.name;
                  user.id = json.id;
                  user.email = json.email;
                  user.gender = json.gender;
                  user.birthday = json.birthday;
                  user.username = json.name;
                  searchUser(user).then(data => {
                    console.log(data);
                    console.log('----------------------------------------')
                    if(data.status == 0 ){
                      this.setState({isLoading:false});
                      dispatch(NavigationActions.navigate({routeName: 'facebooksignup', params: {user: user,interest: interest}}));
                    }else if(data.status == 1){
                        faccebookLogin(user.email, user.id)
                      .then(data => {
                          console.log(data,'**************************');
                          //hide indicator
                          // this.setState({
                          //     isLoading: false
                          // });
                          if(data.code != undefined){
                              var errorText = "";
                              switch(data.code){
                                  case API.RESPONSE.LOGIN.EMPTYEMAIL:
                                      errorText = "Please input your email address.";
                                      break;
                                  case API.RESPONSE.LOGIN.EMPTYPASSWORD:
                                      errorText = "Please input your password.";
                                      break;
                                  case API.RESPONSE.LOGIN.NOTMATCH:
                                      errorText = "Those credentials don't look right. Please try again.";
                                      break;
                              }
                              this.setState({
                                  isLoading:false,
                                  isError: true,
                                  errorText: errorText
                              });
                          }else{

                              console.log('emaillgoin data-->', data)
                              //save token
                              AsyncStorage.setItem('user', JSON.stringify({data,loginType:'login'}));
                              dispatch({type: 'setprofile', data: data});
                              dispatch(NavigationActions.navigate({routeName: 'tab'}));
                          }
                      })
                      .catch(err => {
                          console.log(err,'facebook138');
                       
                          //hide indicator
                          this.setState({
                              isLoading: false,
                              isError: true,
                              errorText: "Please check your wifi or internet."
                          });
                      });
                    }
                  });
                })
                .catch((error) => {
                  console.log(error,'ERROR GETTING DATA FROM FACEBOOK')
                })
            });
          console.log(result,'Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
    ).catch((error) => {
      this.setState({
        isLoading:false,
        isError:true,
        errorText:'something went wrong'
      });
    });
  }
    catch(error) {
      console.log('Login fail with error: ' + error);
    }
  }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onAction(){
        var { dispatch } = this.props;
        if(this.props.navigation.state.params.type == 'login'){
            this.setState({
                isDialog: true
            });
        }else{
            dispatch(NavigationActions.navigate({routeName: 'auth', params: {type: 'login'}}));
        }
    }

    onCancel(){
        this.setState({
            isDialog: false
        });
    }

    onDone(ret){
        this.setState({
            isDialog: false
        });

        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'auth', params: {type: 'signup', interest: ret}}));
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="arrow-back" style={styles.headerIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        {this.props.navigation.state.params.type == 'login'?
                        <Title style={styles.title}>Log In</Title>:
                        <Title style={styles.title}>Sign Up</Title>
                        }
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.onAction()}>
                            {this.props.navigation.state.params.type == 'login'?
                            <Label style={styles.headerBtnText}>Sign Up</Label>:
                            <Label style={styles.headerBtnText}>Log In</Label>
                            }
                        </Button>
                    </Right>
                </Header>
                <View style={styles.mainContainer}>
                    <Thumbnail square source={require('../../assets/logoWhite-large.png')} style={styles.logo}/>
                    {this.props.navigation.state.params.type == 'login'?
                    <Text style={styles.text}>
                        Welcome back.
                    </Text>:
                    <Text style={styles.text}>
                        Your choice, we’re flexible.
                    </Text>}
                    <Button style={styles.fbBtn} onPress={() => {this.onFacebookLogin()}}>
                        <Thumbnail square style={styles.fbBtnIcon} source={require('../../assets/ic_facebook.png')}/>
                        <Label style={styles.fbBtnText}>Facebook</Label>
                    </Button>
                    <Button style={styles.phoneBtn} onPress={() => this.onPhoneLogin()}>
                        <Icon name="call"/>
                        <Label style={styles.fbBtnText}>Phone Number</Label>
                    </Button>
                    <Text style={styles.bottomText}>
                        Actually, I’ll use <Label style={styles.emailBtnText,{color:"#fd9847"}} onPress={() => this.onEmailLogin()}>Email</Label>
                    </Text>
                </View>
                {this.state.isLoading?<PLoading color="white"/>:null}
                {this.state.isDialog?
                <AlertCheck list={this.props.interests} onCancel={() => this.onCancel()} onDone={(ret) => this.onDone(ret)}/>: null}
            </Container>
        );
    }
}

var mapStateToProps = state => ({
    interests: state.interest.list
})

export default connect(mapStateToProps)(AuthScreen);
