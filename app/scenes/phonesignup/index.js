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
    Header,
    Right,
    Icon,
    Form,
    Item,
    Input,
    View,
    Text,
    Grid,
    Col
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, Dimensions, Keyboard, ToastAndroid, Alert } from 'react-native';
const { width, height } = Dimensions.get('window');
import EDialog from '../../components/edialog';
import { API } from '../../constants/api';
import { emailSignup, sendCode, verifyCode } from '../../actions/';
import PLoading from '../../components/loading';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import CodeInput from 'react-native-confirmation-code-input';

class PhoneSignupScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

       this.state = {
            progress: 1,
            step: 0,
            hidePass: true,
            date: moment().format("MM-D"),
            showDatePicker: false,
            gender: true,
            marital: false,
            kids: false,
            code:"",
            phone: "",
            email: "",
            zipcode: "",
            password: "",
            isError: false,
            errorText: "",
            isLoading: false,
            verifytoken: ""
        };
    }

    onBack(){
        if(this.state.step > 1){
            this.setState({
                progress: this.state.progress - 1,
                step: this.state.step - 1
            });
        }else if(this.state.step == 1){
            this.setState({
                step: this.state.step - 1
            });
        }else{
            var { dispatch } = this.props;
            dispatch(NavigationActions.back());
        }
    }

    onSendNewCode() {
        //show Indicator
        this.setState({
            isLoading: true
        });

        sendCode(this.state.phone)
        .then(data => {
            console.log(data)
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
                    verifytoken: data.token,
                    progress: this.state.progress + 0,
                    step: this.state.step + 0
                });
            }
        })
        .catch(err => {
            //hide Indicator
            this.setState({
                isLoading: false,
                isError: true,
                errorText: 'Invalid Code. Pleasey try again.'
            });
        });
    }

    onNext(progress, step){
        if(this.state.step == 0){
            if(this.state.phone == "" || this.state.phone.trim() == ""){
                this.setState({
                    isError: true,
                    errorText: 'Pleae enter your phone number.'
                });
            }else{
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

                } else {
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
                                verifytoken: data.token,
                                progress: this.state.progress + progress,
                                step: this.state.step + step
                            });
                        }
                    })
                    .catch(err => {
                        //hide Indicator
                        this.setState({
                            isLoading: false,
                            isError: true,
                            errorText: 'Invalid Code. Pleasey try again.'
                        });
                    });
                }
            }
        }else if(this.state.step == 1){
            if(this.state.code == ""){
                this.setState({
                    isError: true,
                    errorText: 'Please enter your code.'
                });
            }else{
                //show Indicator
                this.setState({
                    isLoading: true
                });
                Keyboard.dismiss();
                verifyCode(this.state.verifytoken, this.state.code)
                .then(data => {

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
                                    progress: this.state.progress + progress,
                                    step: this.state.step + step
                                });
                                break;
                            default:
                                this.setState({
                                    isLoading: false,
                                    isError: true,
                                    errorText: 'Unknown Error.'
                                });
                                break;
                        }
                    }else{
                        this.setState({
                            isLoading: false,
                            progress: this.state.progress + progress,
                            step: this.state.step + step
                        })
                    }
                })
                .catch(err => {
                    //hide Indiator
                    this.setState({
                        isLoading: false,
                        isError: true,
                        errorText: 'Please check your wifi or internet.'
                    })
                });
            }
        }else if(this.state.step == 2){
            if(this.state.email == '' || this.state.email.trim() == ''){
                this.setState({
                    isError: true,
                    errorText: 'Please input your email address.'
                });
            }else if(this.state.zipcode == '' || this.state.zipcode.trim() == ''){
                this.setState({
                    isError: true,
                    errorText: 'Please input your zipcode.'
                });
            }
        //     else{
        //         this.setState({
        //             progress: this.state.progress + progress,
        //         });
        //     }
        // }else{
        //     if(this.state.password == ''){
        //         this.setState({
        //             isError: true,
        //             errorText: 'Please input your password.'
        //         });
        //     }
            else{
                //sign up
                var { dispatch } = this.props;

                //show Indicator
                this.setState({
                    isLoading: true
                });

                var params = {
                    phone: this.state.phone,
                    email: this.state.email,
                    birthday: this.state.date,
                    zipcode: this.state.zipcode,
                    gender: this.state.gender,
                    marital: this.state.marital,
                    kids: this.state.kids,
                    interests: this.props.navigation.state.params.interest
                };

                emailSignup(params)
                .then(data => {
                    console.log('singup scucess -->')
                    console.log(data)
                    //hide indicator
                    this.setState({
                        isLoading: false
                    })
                    if(data.code != undefined){
                        console.log('1')
                        switch(data.code){
                            case API.RESPONSE.SIGNUP.DUPLICATEEMAIL:
                                this.setState({
                                    isError: true,
                                    errorText: 'This email already used, Please try again.',
                                    step: 2
                                });
                                break;
                            case API.RESPONSE.SIGNUP.DUPLICATEPHONE:
                                this.setState({
                                    isError: true,
                                    errorText: 'This phone number already used, Pleae try again.',
                                    step: 0
                                })
                                break;
                            case API.RESPONSE.SIGNUP.INVALIDEMAIL:
                                this.setState({
                                    isError: true,
                                    errorText: 'This email is invalid now. Please try again.',
                                    step: 2
                                });
                                break;
                            case API.RESPONSE.SIGNUP.INVALIDZIPCODE:
                                this.setState({
                                    isError: true,
                                    errorText: 'This zipcode is invalid now. Please try again',
                                    step: 2
                                });
                                break;
                        }
                    }else{
                        console.log('2')
                        //save token
                        // AsyncStorage.setItem('user', JSON.stringify({data:data,loginType:'login'}));
                        // dispatch({type: 'setprofile', data: data});
                        // dispatch(NavigationActions.navigate({routeName: 'tab'}));
                        // ToastAndroid.showWithGravity('Please Check You Email For Password.', ToastAndroid.LONG, ToastAndroid.BOTTOM);
                        // dispatch(NavigationActions.navigate({routeName: 'phonelogin'}));
                        Alert.alert('Thank you for joining our rewards program!',
                        'You are on your way to entertainment deals. Check out what new and come have some fun today!. We sent an email to the email address provided. Please confirm to complete your new account.',[
                        {text:'OK',onPress:()=>{
                            dispatch(NavigationActions.navigate({routeName: 'phonelogin'}))}
                        }]);
                    }
                })
                .catch(err => {
                    this.setState({
                        isError: true,
                        errorText: 'Plese check wifi or internet.'
                    });
                });
            }
        }
    }

    onLogin(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'auth', params: { type: 'login' }}));
    }

    togglePass(){
        this.setState({
            hidePass: !this.state.hidePass
        });
    }

    toggleGender(gender){
        this.setState({
            gender: gender
        });
    }

    toggleMarital(marital){
        this.setState({
            marital: marital
        })
    }

    toggleKids(kids){
        this.setState({
            kids: kids
        });
    }

    onChangeText(text, index){
        switch(index){
            case 'password':
                this.setState({
                    password: text
                });
                break;
            case 'email':
                this.setState({
                    email: text
                });
                break;
            case 'zipcode':
                this.setState({
                    zipcode: text
                });
                break;
            case 'phone':
                this.setState({
                    phone: text
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

    _onFulfill(code) {
        this.setState({ code });
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
                        <Title style={styles.title}>Sign Up</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.onLogin()}>
                            <Label style={styles.headerBtnText}>Log In</Label>
                        </Button>
                    </Right>
                </Header>

                {this.state.isError?
                    <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>:
                    null
                }

                <View style={styles.progressContainer}>
                    <View style={[styles.progress, { width: (width /3) * (this.state.progress ) }]}/>
                </View>

                {this.state.step == 0?
                <Content>
                    <Text style={styles.text}>Enter your phone number.</Text>
                    <Form style={styles.formContainer}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formItemLabel}>NUMBER</Label>
                            <Input style={styles.formInput} keyboardType="numeric" value={this.state.phone} onChangeText={(text) => this.onChangeText(text, 'phone')}/>
                        </Item>
                    </Form>
                    <Text style={styles.text1}>
                        Tap Next to get an SMS confirmation from Account Kit powered by Facebook.
                        <Label style={styles.linkText,{color:'#fd9847',fontSize:12}}>Learn more</Label>
                    </Text>
                    <Button style={styles.nextBtn} onPress={() => this.onNext(0, 1)}>
                        <Label style={styles.nextBtnText}>Next</Label>
                    </Button>
                </Content>:null}

                {this.state.step == 1?
                <Content>
                    <Text style={styles.text}>Enter your code.</Text>
                    <View style={styles.codeContainer}>
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
                    <Button style = {styles.sendNewCodeBtn} onPress={() => this.onSendNewCode()} transparent>
                        <Label style={styles.sendBtnText}>Send New Code</Label>
                    </Button>
                    <Text style={styles.descText}>
                        Tap Continue to accept Facebook’s <Text style={styles.linkText}>Terms, Data Policy, cookie use</Text> and the <Text style={styles.linkText}>Privacy Policy</Text> and <Text style={styles.linkText}>Terms of Service</Text> of Pinaka.
                    </Text>
                    <Button style={styles.nextBtn} onPress={() => this.onNext(1,1)}>
                        <Label style={styles.nextBtnText}>Continue</Label>
                    </Button>
                </Content>: null}

                {this.state.step == 2?
                <Content>
                    <Text style={styles.text}>
                        Please, enter your information.
                    </Text>
                    <Form style={styles.formContainer}>
                        <Item stackedLabel style={styles.formItemContainer}>
                            <Label style={styles.formItemLabel}>
                                EMAIL
                            </Label>
                            <Input style={styles.formInput} value={this.state.email} onChangeText={(text) => this.onChangeText(text, 'email')}/>
                        </Item>
                        <Grid style={styles.gridFormContainer}>
                            <Col style={styles.birthdayContainer}>
                                <Item stackedLabel style={styles.formItemContainer}>
                                    <Label style={styles.formItemLabel}>
                                        BIRTHDAY
                                    </Label>
                                    <View style={styles.birthdayWrapper}>
                                    <DatePicker
                                        style={{width: 200}}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="Select your birthday"
                                        format="MM-DD"
                                        confirmBtnText="Done"
                                        cancelBtnText="Cancel"
                                        onDateChange={(date) => this.setState({date: date})}
                                        showIcon={false}
                                        customStyles={{
                                            dateInput: styles.birthdayText,
                                            dateText: {
                                                color: 'white',
                                                fontFamily: 'Roboto',
                                                fontWeight: 'normal',
                                                fontSize: 16,
                                                lineHeight: 33
                                            }
                                        }}
                                        />
                                    </View>
                                </Item>
                            </Col>
                            <Col style={styles.zipcodeContainer}>
                                <Item stackedLabel style={styles.formItemContainer}>
                                    <Label style={styles.formItemLabel}>
                                        ZIP CODE
                                    </Label>
                                    <Input style={styles.formInput} keyboardType="numeric" value={this.state.zipcode} onChangeText={(text) => this.onChangeText(text, 'zipcode')}/>
                                </Item>
                            </Col>
                        </Grid>
                    </Form>
                    <View style={styles.additionalContainer}>
                        <View style={styles.additionalItem}>
                            <Text style={styles.additionalItemText}>GENDER</Text>
                            <View style={styles.additionBtnContainer}>
                                <Button transparent style={styles.additionalBtn} onPress={() => this.toggleGender(true)}>
                                    {this.state.gender?
                                    <Thumbnail square source={require('../../assets/femaleSelected.png')} style={styles.additionalBtnIcon}/>
                                    :
                                    <Thumbnail square source={require('../../assets/femaleNormal.png')} style={styles.additionalBtnIcon}/>
                                    }
                                </Button>
                                <Button transparent style={styles.additionalBtn} onPress={() => this.toggleGender(false)}>
                                    {this.state.gender?
                                    <Thumbnail square source={require('../../assets/maleNormal.png')} style={styles.additionalBtnIcon}/>:
                                    <Thumbnail square source={require('../../assets/maleSelected.png')} style={styles.additionalBtnIcon}/>
                                    }
                                </Button>
                            </View>
                        </View>
                        <View style={styles.additionalItem}>
                            <Text style={styles.additionalItemText}>MARITAL STATUS</Text>
                            <View style={styles.additionBtnContainer}>
                                <Button transparent style={styles.additionalBtn} onPress={() => this.toggleMarital(true)}>
                                    {this.state.marital?
                                    <Thumbnail square source={require('../../assets/marriedSelected.png')} style={styles.additionalBtnIcon}/>:
                                    <Thumbnail square source={require('../../assets/marriedNormal.png')} style={styles.additionalBtnIcon}/>
                                    }
                                </Button>
                                <Button transparent style={styles.additionalBtn} onPress={() => this.toggleMarital(false)}>
                                    {this.state.marital?
                                    <Thumbnail square source={require('../../assets/maleNormal.png')} style={styles.additionalBtnIcon}/>:
                                    <Thumbnail square source={require('../../assets/maleSelected.png')} style={styles.additionalBtnIcon}/>
                                    }
                                </Button>
                            </View>
                        </View>
                        <View style={styles.additionalItem}>
                            <Text style={styles.additionalItemText}>DO YOU HAVE KIDS?</Text>
                            <View style={styles.additionBtnContainer}>
                                <Button transparent style={styles.additionalBtn} onPress={() => this.toggleKids(true)}>
                                    {this.state.kids?
                                    <Thumbnail square source={require('../../assets/yesSelected.png')} style={styles.additionalBtnIcon}/>:
                                    <Thumbnail square source={require('../../assets/yesNormal.png')} style={styles.additionalBtnIcon}/>
                                    }
                                </Button>
                                <Button transparent style={styles.additionalBtn} onPress={() => this.toggleKids(false)}>
                                    {this.state.kids?
                                    <Thumbnail square source={require('../../assets/noNormal.png')} style={styles.additionalBtnIcon}/>:
                                    <Thumbnail square source={require('../../assets/noSelected.png')} style={styles.additionalBtnIcon}/>
                                    }
                                </Button>
                            </View>
                        </View>
                    </View>
                    <Button style={styles.nextBtn} onPress={() => this.onNext(1,1)}>
                        <Label style={styles.nextBtnText}>Continue</Label>
                    </Button>
                </Content>:null}
                {this.state.step == 3?
                <Content>
                    <Text style={styles.text}>Create a password.</Text>
                    <Text style={styles.text1}>Your password must include at least one symbol and be eight or more characters long</Text>
                    <Form style={styles.formContainer}>
                        <Item stackedLabel style={styles.formItemContainer}>
                            {this.state.hidePass?
                            <Label style={styles.showText} onPress={() => this.togglePass()}>
                                Show
                            </Label>:
                            <Label style={styles.showText} onPress={() => this.togglePass()}>
                                Hide
                            </Label>
                            }
                            <Label style={styles.formItemLabel}>
                                PASSWORD
                            </Label>
                            <Input style={styles.formInput} secureTextEntry={this.state.hidePass} value={this.state.password} onChangeText={(text) => this.onChangeText(text, 'password')}/>
                        </Item>
                    </Form>
                    <Button style={styles.nextBtn} onPress={() => this.onNext(1,1)}>
                        <Label style={styles.nextBtnText}>Sign Up</Label>
                    </Button>
                </Content>: null}
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

export default connect()(PhoneSignupScreen);
