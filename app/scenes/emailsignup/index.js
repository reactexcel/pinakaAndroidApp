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
import { StatusBar, Dimensions, AsyncStorage, Keyboard, ToastAndroid } from 'react-native';
const { width, height } = Dimensions.get('window');
import EDialog from '../../components/edialog';
import { API } from '../../constants/api';
import { emailSignup } from '../../actions/';
import PLoading from '../../components/loading';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

class EmailSignupScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            progress: 1,
            hidePass: true,
            gender: true,
            marital: false,
            kids: false,
            email: "",
            birthday: moment().format("YYYY-MM-D"),
            zipcode: "",
            password: "",
            showDatePicker: false,
            isError: false,
            errorText: "",
            isLoading: false
        }
    }

    onBack(){
        if(this.state.progress > 1){
            this.setState({
                progress: this.state.progress - 1
            });
        }else{
            var { dispatch } = this.props;
            dispatch(NavigationActions.back());
        }
    }

    onNext(){
        if(this.state.progress < 2){
            if(this.state.email == '' || this.state.email.trim() == ''){
                this.setState({
                    isError: true,
                    errorText: 'Please enter your email address.'
                });
            }else if(this.state.zipcode == '' || this.state.zipcode.trim() == ''){
                this.setState({
                    isError: true,
                    errorText: 'Please enter your zipcode.'
                });
            } 
        //     else{
        //         this.setState({
        //             progress: this.state.progress + 1
        //         });
        //     }
        // }else{
        //     if(this.state.password == ''){
        //         this.setState({
        //             isError: true,
        //             errorText: 'Please enter password'
        //         });
        //     }
            else{
                //onSign Up

                //show Indicator
                this.setState({
                    isLoading: true
                });

                var { dispatch } = this.props;
                var params = {
                    email: this.state.email,
                    birthday: this.state.birthday,
                    zipcode: this.state.zipcode,
                    gender: this.state.gender,
                    marital: this.state.marital,
                    kids: this.state.kids,
                    password: this.state.password,
                    interests: this.props.navigation.state.params.interest
                };
                Keyboard.dismiss();
                emailSignup(params)
                .then(data => {
                    //hide indicator

                    console.log('singup scucess -->')
                    console.log(data)
                    this.setState({
                        isLoading: false
                    })
                    if(data.code != undefined){
                        switch(data.code){
                            case API.RESPONSE.SIGNUP.DUPLICATEEMAIL:
                                this.setState({
                                    isError: true,
                                    errorText: 'This email already used, Please try again.',
                                    progress: 1
                                });
                                break;
                            case API.RESPONSE.SIGNUP.DUPLICATEPHONE:
                                this.setState({
                                    isError: true,
                                    errorText: 'This phone number already used, Pleae try again.',
                                    progress: 1
                                })
                                break;
                            case API.RESPONSE.SIGNUP.INVALIDEMAIL:
                                this.setState({
                                    isError: true,
                                    errorText: 'This email is invalid now. Please try again.',
                                    progress: 1
                                });
                                break;
                            case API.RESPONSE.SIGNUP.INVALIDZIPCODE:
                                this.setState({
                                    isError: true,
                                    errorText: 'This zipcode is invalid now. Please try again',
                                    progress: 1
                                });
                                break;
                        }
                    }else{
                        //save token
                        // AsyncStorage.setItem('user', JSON.stringify({data:data,loginType:'login'}));
                        // dispatch({type: 'setprofile', data: data});
                        // dispatch(NavigationActions.navigate({routeName: 'tab'}));
                        ToastAndroid.showWithGravity('Please Check You Email For Password.', ToastAndroid.LONG, ToastAndroid.BOTTOM);
                        dispatch(NavigationActions.navigate({routeName: 'emaillogin'}));
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
        dispatch(NavigationActions.navigate({routeName: 'auth', params: {type: 'login'}}));
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
        });
    }

    toggleKids(kids){
        this.setState({
            kids: kids
        });
    }

    onChangeText(field, text){
        switch(field){
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
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>: null}
                <View style={styles.progressContainer}>
                    <View style={[styles.progress, {width: width / 2 * (this.state.progress)}]}/>
                </View>
                {this.state.progress == 1?
                <Content>
                    <Text style={styles.text}>
                        Please, enter your information.
                    </Text>
                    <Form style={styles.formContainer}>
                        <Item stackedLabel style={styles.formItemContainer}>
                            <Label style={styles.formItemLabel}>
                                EMAIL
                            </Label>
                            <Input style={styles.formInput} autoCapitalize={false} value={this.state.email} onChangeText={(text) => this.onChangeText('email', text)}/>
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
                                        date={this.state.birthday}
                                        mode="date"
                                        placeholder="Select your birthday"
                                        format="YYYY-MM-DD"
                                        confirmBtnText="Done"
                                        cancelBtnText="Cancel"
                                        onDateChange={(date) => this.setState({birthday: date})}
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
                                    <Input style={styles.formInput} keyboardType="numeric" onChangeText={(text) => this.onChangeText('zipcode', text)}/>
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
                                    <Thumbnail square source={require('../../assets/femaleSelected.png')} style={styles.additionalBtnIcon}/>:
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
                    <Button style={styles.nextBtn} onPress={() => this.onNext()}>
                        <Label style={styles.nextBtnText}>Continue</Label>
                    </Button>
                </Content>:
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
                            <Input style={styles.formInput} secureTextEntry={this.state.hidePass} value={this.state.password} onChangeText={(text) => this.onChangeText('password', text)}/>
                        </Item>
                    </Form>
                    <Button style={styles.nextBtn} onPress={() => this.onNext()}>
                        <Label style={styles.nextBtnText}>Sign Up</Label>
                    </Button>
                </Content>}
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

export default connect()(EmailSignupScreen);
