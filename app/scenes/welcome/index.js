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
    Grid,
    Col,
    Button,
    Label
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, BackHandler, BackAndroid, AsyncStorage } from 'react-native';
import AlertCheck from '../../components/alertcheck/';
import PLoading from '../../components/loading';
import { getInterests, emailLogin } from '../../actions';
import { API } from '../../constants/api';
import splash from '../splash/index';
import welcome from './index';

class WelcomeScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            isDialog: false
        }

        var { dispatch } = this.props;

        getInterests()
        .then(interests => {
            dispatch({type: 'setinterest', data: interests});
        })
        .catch(err => {
            alert("Please check  wifi or internet.");
        });
    }

    componentWillMount() {
    //     BackHandler.addEventListener('hardwareBackPress', () => {
    //         const { dispatch, navigation, nav } = this.props;
    //         console.log('****')
    //         console.log(nav)
    //         // if (nav.routes.length === 1 && (nav.routeName === 'splash' || nav.routeName === 'welcome')) {
    //         //     return false;
    //         // }
    //         // if (shouldCloseApp(nav)) return false
    //         dispatch({ type: 'Navigation/BACK' });
    //         return true;
    //     });
        var { dispatch } = this.props;
        AsyncStorage.getItem('user', (err, result) => {
          if(result !== null ){
            this.setState({isLoading:true});
            const user = JSON.parse(result);
            console.log(user,'AsyncStorage');
            if(user.user == 'logout'){
              this.setState({isLoading:false});
            } else if(user.loginType == 'login'){
              console.log(user,'login');
              dispatch({type: 'setprofile', data: user.data});
              dispatch(NavigationActions.navigate({routeName: 'tab'}));
            }
          } else {
            this.setState({isLoading:false});
          }
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }


    onLogin(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'auth', params: { type: 'login' }}));
    }

    onSignup(){
        this.setState({
            isDialog: true
        });
    }

    onDone(ret){
         this.setState({
            isDialog: false
        });
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'auth', params: { type: 'signup',  interest: ret}}));
    }

    onCancel(){
        this.setState({
            isDialog: false
        });
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <View style={styles.mainContainer}>
                    <Thumbnail square source={require('../../assets/logo-icon1.png')} style={styles.logo}/>
                    {/* <Text style={styles.logoText}>Pinaka</Text> */}
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText1}>Here is some text</Text>
                    <Text style={styles.bottomText2}>Here is some text</Text>
                    <View style={styles.bottomBtnContainer}>
                        <Button style={styles.signupBtn} onPress={() => this.onSignup()}>
                            <Label style={styles.signupBtnText}>Sign Up</Label>
                        </Button>

                        <Button style={styles.loginBtn} onPress={() => this.onLogin()}>
                            <Label style={styles.loginBtnText}>Log In</Label>
                        </Button>
                    </View>
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

export default connect(mapStateToProps)(WelcomeScreen);
