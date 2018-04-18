import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Title,
    Label,
    Thumbnail,
    Button,
    Left,
    Right,
    Header,
    Icon,
    Input,
    Form,
    View,
    Text,
    Item,
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, Keyboard } from 'react-native';
import { sendCode } from '../../actions';
import PLoading from '../../components/loading';
import EDialog from '../../components/edialog';
import { API } from '../../constants/api';
import AlertCheck from '../../components/alertcheck/';

class PhoneLoginScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            phone: '',
            isError: false,
            isLoading: false,
            errorText: "",
            isDialog: false
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onNext(){
        if(this.state.phone == '' || this.state.phone.trim() == ''){
            this.setState({
                isError: true,
                errorText: 'Please enter your phone number.'
            });
        } else {
            var { dispatch } = this.props;

            //show Indicator
            this.setState({
                isLoading: true
            });
            if(this.state.phone.length != 10){
                this.setState({
                    isLoading:false,               
                    isError:true,
                    errorText:'Phone Number Should be 10 digit' 
                })
            }
            else {
                Keyboard.dismiss();
                sendCode(this.state.phone)
                .then(data => {
                    if(data.code != undefined){
                        this.setState({
                            isLoading: false,
                            isError: true,
                            errorText: 'Invalid Phone number. Please try again.'
                        });
                    }else{
                        //hide Indicator
                        this.setState({
                            isLoading: false
                        });
                        dispatch(NavigationActions.navigate({routeName: 'phonecode', params: {token: data.token, phoneNumber: this.state.phone}}));
                    }
                })
                .catch(err => {
                    //hide indicator
                    this.setState({
                        isLoading: false,
                        isError: true,
                        errorText: 'Please check wifi or internet.'
                    });
                });
            }
        }
    }

    onChangeText(text){
        this.setState({
            phone: text
        });
    }

    onErrorClose(){
        this.setState({
            isError: false,
            errorText: ""
        });
    }

    onSignup(){
        this.setState({
            isDialog: true
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
                        Enter your phone number.
                    </Text>
                    <Form style={styles.formContainer}>
                        <Item stackedLabel style={styles.formItemContainer}>
                            <Label style={styles.formItemLabel}>
                                NUMBER
                            </Label>
                            <Input style={styles.formInput} style={styles.formInput} keyboardType="numeric" value={this.state.phone} onChangeText={(text) => this.onChangeText(text)}/>
                        </Item>
                    </Form>
                    <Text style={styles.descText}>Tap Next to get an SMS confirmation from Account Kit powered by Facebook.
                       <Label style={styles.linkText,{color:'#fd9847',fontSize:12}}>Learn more</Label></Text>
                    <Button style={styles.sendBtn} onPress={() => this.onNext()}>
                        <Label style={styles.sendBtnText}>Next</Label>
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

export default connect(mapStateToProps)(PhoneLoginScreen);
