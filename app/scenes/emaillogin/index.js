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
    Header,
    Right,
    Icon,
    Form,
    Item,
    Input
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, AsyncStorage, Keyboard } from 'react-native';
import { emailLogin } from '../../actions';
import PLoading from '../../components/loading';
import EDialog from '../../components/edialog';
import { API } from '../../constants';
import AlertCheck from '../../components/alertcheck/';

class EmailLoginScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoading: false,
            isError: false,
            errorText: "",
            isDialog: false
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onForgot(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'forgot'}));
    }

    onSignup(){
        this.setState({
            isDialog: true
        });
    }

    onLogin(){
        var { dispatch } = this.props;

        //show indicator
        this.setState({
            isLoading: true
        });
        Keyboard.dismiss();

        emailLogin(this.state.email, this.state.password)
        .then(data => {
            //hide indicator
            this.setState({
                isLoading: false
            });
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
                    isError: true,
                    errorText: errorText
                });
            }else{

                console.log('emaillgoin data-->', data)
                //save token
                AsyncStorage.setItem('user', JSON.stringify({data:data,loginType:'login'}));
                dispatch({type: 'setprofile', data: data});
                dispatch(NavigationActions.navigate({routeName: 'tab'}));
            }
        })
        .catch(err => {
            console.log(err);
            //hide indicator
            this.setState({
                isLoading: false,
                isError: true,
                errorText: "Please check your wifi or internet."
            });
        });
    }

    onChangeText(field,text){
        switch(field){
            case 'email':
                this.setState({
                    email: text
                });
            break;
            case 'password':
                this.setState({
                    password: text
                });
            break;
        }
    }

    onErrorClose(){
        this.setState({
            isError: false,
            errorText: ""
        });
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
                        <Title style={styles.title}>Log In</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.onSignup()}>
                            <Label style={styles.headerBtnText}>Sign Up</Label>
                        </Button>
                    </Right>
                </Header>
                {this.state.isError?
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>: null}
                <Content>
                    <Text style={styles.text}>
                        Enter your email and password.
                    </Text>
                    <Form style={styles.formContainer}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formItemLabel}>EMAIL</Label>
                            <Input style={styles.formInput} autoCapitalize={false} keyboardType="email-address" onChangeText={(text) => this.onChangeText('email',text)} value={this.state.email}/>
                        </Item>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.forgotText} onPress={() => this.onForgot()}>Forgot</Label>
                            <Label style={styles.formItemLabel}>PASSWORD</Label>
                            <Input style={styles.formInput} secureTextEntry={true} onChangeText={(text) => this.onChangeText('password', text)} value={this.state.password}/>
                        </Item>
                    </Form>
                    <Button style={styles.loginBtn} onPress={() => this.onLogin()}>
                        <Label style={styles.loginBtnText}>Log In</Label>
                    </Button>
                </Content>
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

export default connect(mapStateToProps)(EmailLoginScreen);
