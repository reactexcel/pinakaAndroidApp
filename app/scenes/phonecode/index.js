import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Title,
    Text,
    Label,
    Thumbnail,
    Button,
    Left,
    Right,
    Header,
    Icon,
    Input,
    View,
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, AsyncStorage, Keyboard } from 'react-native';
import EDialog from '../../components/edialog';
import { emailSignup, sendCode, verifyCode } from '../../actions/';
import { API } from '../../constants/api';
import { loginCode } from '../../actions/';
import PLoading from '../../components/loading';
import CodeInput from 'react-native-confirmation-code-input';

class PhoneCodeScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            code:'',
            token: this.props.navigation.state.params.token,
            phone: this.props.navigation.state.params.phoneNumber,
            isError: false,
            errorText: "",
            isLoading: false
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSignup(){

    }

    onLogin(){
        if(this.state.code == ''){
            this.setState({
                isError: true,
                errorText: 'Please input verify code.'
            });
        }else{
            var { dispatch } = this.props;
            //show Indicator
            this.setState({
                isLoading: true
            });
            Keyboard.dismiss();
            console.log('phonecode ++>', this.state.token)
            console.log('verification code --', this.state.code)
            verifyCode(this.state.token, this.state.code)
            .then(data => {
                console.log('When phone verify code -->', data)
                if(data.code != undefined){
                    switch(data.code){
                        case API.RESPONSE.VERIFYCODE.INVALIDCODE:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: 'Invalid code. Please try again.'
                            });
                            break;
                        case API.RESPONSE.VERIFYCODE.EMPTYCODE:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: 'Plase Check your phone Number.'
                            });
                            break;
                        default:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: 'Unknown Error.'
                            })
                            break;
                    }
                }else{
                    //save token
                    console.log('success verification code--', data)
                    console.log('after verficiatin cdoe -->', this.state.token)
                    AsyncStorage.setItem('user', JSON.stringify({data:data,loginType:'login'}));
                    dispatch({type: 'setprofile', data: data});
                    // dispatch(NavigationActions.navigate({routeName: 'tab'}));
                    if(data.temporary_password){
                        dispatch(NavigationActions.navigate({routeName: 'changepassword',params:{type:'temp'}}));                    
                    } else {
                        dispatch(NavigationActions.navigate({routeName: 'tab'}));
                    }
                }
            })
            .catch(err => {
                //hide Indicator
                this.setState({
                    isLoading: false,
                    isError: true,
                    errorText: 'Please check your wifi or internet.'
                });
            });

        }
    }

    onErrorClose(){
        this.setState({
            isError: false,
            errorText: ""
        });
    }

    _onFulfill(code) {
        this.setState({ code });
    }

    onSendNewCode() {
        //show Indicator
        this.setState({
            isLoading: true
        });

        sendCode(this.state.phone)
        .then(data => {
            if(data.code != undefined){
                if(data.code == API.RESPONSE.SENDCODE.INVALIDPHONE){
                    this.setState({
                        isLoading: false,
                        isError: true,
                        errorText: 'Invalid Phone number. Please try again.'
                    });
                }
            }else{
                //hide Indicator
                this.setState({
                    isLoading: false,
                    token: data.token,
                    // progress: this.state.progress + progress,
                    // step: this.state.step + step
                });
            }
        })
        .catch(err => {
            //hide Indicator
            this.setState({
                isLoading: false,
            });
        });
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
                        <Title style={styles.title}>Log In</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Label style={styles.headerBtnText}>Sign Up</Label>
                        </Button>
                    </Right>
                </Header>
                {this.state.isError?
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>: null}
                <Content>
                    <Text style={styles.text}>
                        Enter your code.
                    </Text>
                    <View style={styles.inputContainer}>
                        <CodeInput
                            ref="codeInputRef2"
                            keyboardType="numeric"
                            codeLength={6}
                            autoFocus={false}
                            size = {50}
                            space = {10}
                            codeInputStyle={{ fontSize: 20 }}
                            onFulfill={(code) => this._onFulfill(code)}
                        />
                    </View>
                    {/*<Text style={styles.resendBtnText}>Send New Code</Text>*/}
                    <Button style = {styles.sendNewCodeBtn} onPress={() => this.onSendNewCode()} transparent>
                        <Label style={styles.sendNewCodeBtnText}>Send New Code</Label>
                    </Button>
                    <Text style={styles.descText}>
                        Tap Continue to accept Facebook’s <Text style={styles.linkText}>Terms, Data Policy, cookie use</Text> and the <Text style={styles.linkText}>Privacy Policy</Text> and <Text style={styles.linkText}>Terms of Service</Text> of Pinaka.
                    </Text>
                    <Button style={styles.sendBtn} onPress={() => this.onLogin()}>
                        <Label style={styles.sendBtnText}>Continue</Label>
                    </Button>
                </Content>
                {this.state.isLoading?<PLoading color="white"/>: null}
            </Container>
        );
    }
}

export default connect()(PhoneCodeScreen);
