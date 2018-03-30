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
import { StatusBar, Dimensions, AsyncStorage, Keyboard } from 'react-native';
const { width, height } = Dimensions.get('window');
import EDialog from '../../components/edialog';
import { API } from '../../constants/api';
import { changePassword } from '../../actions/';
import PLoading from '../../components/loading';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

class ChangePassword extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            hidePass: true,
            hideCPass: true,
            hideOldPass: true,
            email:'',
            password: "",
            oldPassword:'',
            newPassword:'',
            isError: false,
            errorText: "",
            isLoading: false
        }
    }

    componentWillMount(){
        Keyboard.dismiss();
        
        AsyncStorage.getItem('user', (err, result) => {
            const user = JSON.parse(result);
            this.setState({email:user.data.email})            
        });
        
    }

    onBack(){
        // if(this.state.progress > 1){
        //     this.setState({
        //         progress: this.state.progress - 1
        //     });
        // }else{
        
        var { dispatch } = this.props;
            dispatch(NavigationActions.back());
        // }
    }

    onSubmit(){
        Keyboard.dismiss();
        var { dispatch } = this.props;        
        if(this.state.oldPassword == ''||this.state.newPassword == '' || this.state.password == ''){
            let text = 
            this.state.password == '' && this.state.newPassword == '' && this.state.oldPassword == '' ? 'Please Enter All Fields'
            :
            this.state.oldPassword == '' ? 'Please Enter Old Password' :
            this.state.password == '' && this.state.newPassword == '' ?'Please Enter New Password'
            :
            this.state.newPassword == '' ? 'Please Enter Confirm Password' : 'Please Enter New Password';
            this.setState({
                isError: true,
                errorText: text
            });
        } else if( this.state.password != this.state.newPassword ) {
            this.setState({
                isError: true,
                errorText: 'New Password and Confirm Password are not Matched'
            });
        } else {
            this.setState({
                isError: false,
                errorText: '',
                isLoading : true,
            })

            changePassword(this.state.email,this.state.oldPassword,this.state.newPassword).then(data => {
                this.setState({isLoading:false});
                if(data.code != undefined) {
                    switch(data.code){
                        case API.RESPONSE.PASSWORD.NOTMATCH:
                            this.setState({
                                isError : true,
                                errorText: 'Please Enter Correct Old Password'
                            });
                            break;
                    }
                } else {
                    dispatch(NavigationActions.back());                    
                }
            });
        }
    }


    togglePass(val){
        if (val=='old') {
            this.setState({
                hideOldPass: !this.state.hideOldPass
            });
        } else if (val == 'confirm') {
            this.setState({
                hideCPass: !this.state.hideCPass
            });
        } else if (val == 'new') {
            this.setState({
                hidePass: !this.state.hidePass
            });
        }
    }

    onChangeText(field, text){
        switch(field){
            case 'password':
                this.setState({
                    password: text
                });
                break;
            case 'opassword':
                this.setState({
                    oldPassword: text
                });
                break;
            case 'cpassword':
                this.setState({
                    newPassword: text
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
                        <Title style={styles.title}>Change Password</Title>
                    </Body>
                    {/* <Right>
                        <Button transparent onPress={() => this.onLogin()}>
                            <Label style={styles.headerBtnText}>Log In</Label>
                        </Button>
                    </Right> */}
                </Header>
                {this.state.isError?
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>: null}
                <View style={styles.progressContainer}>
                    <View style={[styles.progress, {width: width / 2 * (this.state.progress)}]}/>
                </View>
                <Content>
                    <Text style={styles.text}>Change password.</Text>
                    <Text style={styles.text1}>Your password must include at least one symbol and be eight or more characters long</Text>
                    <Form style={styles.formContainer}>
                        <Item stackedLabel style={styles.formItemContainer}>
                            {this.state.hideOldPass?
                            <Label style={styles.showText} onPress={() => this.togglePass('old')}>
                                Show
                            </Label>:
                            <Label style={styles.showText} onPress={() => this.togglePass('old')}>
                                Hide
                            </Label>
                            }
                            <Label style={styles.formItemLabel}>
                               Old PASSWORD
                            </Label>
                            <Input style={styles.formInput} secureTextEntry={this.state.hideOldPass} value={this.state.oldPassword} onChangeText={(text) => this.onChangeText('opassword', text)}/>
                        </Item>
                        <Item stackedLabel style={styles.formItemContainer}>
                            {this.state.hidePass?
                            <Label style={styles.showText} onPress={() => this.togglePass('new')}>
                                Show
                            </Label>:
                            <Label style={styles.showText} onPress={() => this.togglePass('new')}>
                                Hide
                            </Label>
                            }
                            <Label style={styles.formItemLabel}>
                               New PASSWORD
                            </Label>
                            <Input style={styles.formInput} secureTextEntry={this.state.hidePass} value={this.state.password} onChangeText={(text) => this.onChangeText('password', text)}/>
                        </Item> 
                        <Item stackedLabel style={styles.formItemContainer}>
                            {this.state.hideCPass?
                            <Label style={styles.showText} onPress={() => this.togglePass('confirm')}>
                                Show
                            </Label>:
                            <Label style={styles.showText} onPress={() => this.togglePass('confirm')}>
                                Hide
                            </Label>
                            }
                            <Label style={styles.formItemLabel}>
                               Confirm PASSWORD
                            </Label>
                            <Input style={styles.formInput} secureTextEntry={this.state.hideCPass} value={this.state.newPassword} onChangeText={(text) => this.onChangeText('cpassword', text)}/>
                        </Item>
                    </Form>
                    <Button style={styles.nextBtn} onPress={() => this.onSubmit()}>
                        <Label style={styles.nextBtnText}>Change Password</Label>
                    </Button>
                </Content>
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

export default connect()(ChangePassword);
