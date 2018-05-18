import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Container,
    Content,
    Body,
    Button,
    Title,
    Thumbnail,
    Header,
    Left,
    Right,
    Icon,
    List,
    ListItem,
    Form,
    Item,
    Grid,
    Col,
    View,
    Text,
    Label,
    Input,
    CheckBox
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { updateProfile,getInterests } from '../../actions';
import PLoading from '../../components/loading';
import EDialog from '../../components/edialog';
import { API } from '../../constants';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

class EditProfileScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            gender: props.user? (props.user.gender == 1?true: false): false,
            marital: props.user? (props.user.marital == 1? true: false): false,
            kids: props.user? (props.user.kids == 1? true: false): false,
            interests: [false, false, false, false, false, false, false, false, false],
            showDatePicker: false,
            date: moment(props.user?new Date(props.user.birthday): new Date()).format("YYYY-MM-D"),
            name: props.user? props.user.name:"",
            zipcode: props.user?props.user.zipcode:"",
            email: props.user?(props.user.email?props.user.email: ""): "",
            phone: props.user.phone?(props.user.phone.length > 10?props.user.phone.substring(2, props.user.phone.length): props.user.phone ): '' ,
            isLoading: false,
            isError: false,
            errorText: ""
        };

        var interests = [];
        if(props.user.interests != undefined && props.user.interests[0] != null && props.user.interests[0] != undefined ){
            for (var i = 0; i < props.user.interests.length; i++){
                interests.push(props.user.interests[i].id.name);
            }
        }
        var temp = this.props.interests;
        if(temp != undefined && temp[0]!= null){
            for(var i = 0; i < interests.length; i++){
                for(var j = 0; j < temp.length; j++){
                    if(interests[i] == temp[j].name){
                        this.state.interests[j] = true;
                    }
                }
            }
        }
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSave(){
        //interests
        var newInterests = "";
            for(var i = 0; i < this.state.interests.length; i++){
                if(this.state.interests[i] == true){
                    newInterests += this.props.interests[i]._id + ",1:";
                }
            }
        if(newInterests != ''){
            newInterests = newInterests.substring(0, newInterests.length - 1);
        }
        //alert(newInterests);

        if(this.state.name == "" || this.state.name.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Please input your name."
            });
        }else if(this.state.zipcode == "" || this.state.zipcode.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Please input zipcode."
            });
        }else if(this.state.email == "" || this.state.email.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Plese input your email address."
            });
        }else if(this.state.phone == "" || this.state.phone.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Please input your phone number"
            });
        }else{
            var params = {
                name:  this.state.name,
                birthday: this.state.date,
                zipcode: this.state.zipcode,
                gender: this.state.gender,
                marital: this.state.marital,
                kids: this.state.kids,
                email: this.state.email,
                phone: this.state.phone,
                interests: newInterests
            };
            var { user, dispatch } = this.props;

            //show Indicator
            this.setState({
                isLoading: true
            });

            updateProfile(user.token, params)
            .then(data => {
                if(data.code != undefined){
                    switch(data.code){
                        case  API.RESPONSE.SIGNUP.INVALIDEMAIL:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: "Invalid email address, please try again."
                            });
                            break;
                        case API.RESPONSE.SIGNUP.INVALIDZIPCODE:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: "Invalid zipcode. Please try again."
                            });
                            break;
                        case API.RESPONSE.SIGNUP.INVALIDPHONE:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: "Invalid phone number. Please try again."
                            });
                            break;
                        case API.RESPONSE.SIGNUP.DUPLICATEEMAIL:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: "This email already used. Please try again."
                            });
                            break;
                        case API.RESPONSE.SIGNUP.DUPLICATEPHONE:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: "This phone already used. Please try again."
                            });
                            break;
                    }
                }else{
                    this.setState({
                        isLoading: false
                    });
                    dispatch({type: 'setprofile', data: data});
                    dispatch(NavigationActions.back());
                }
            })
            .catch(err => {
                this.setState({
                    isError: true,
                    errorText: "Please check wifi or internet.",
                    isLoading: false
                });
            });
        }
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

    onValueChange(index){
        this.state.interests[index] = !this.state.interests[index];
        this.setState({
            kids: this.state.kids
        });
    }

    onChangeText(field, text){
        switch(field){
            case "name":
                this.setState({
                    name: text
                });
                break;
            case "zipcode":
                this.setState({
                    zipcode: text
                });
                break;
            case "email":
                this.setState({
                    email: text
                });
                break;
            case "phone":
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

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent style={styles.headerLeftBtn} onPress={() => this.onBack()}>
                            <Icon name="close" style={styles.headerIcon}/>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent style={styles.headerRightBtn} onPress={() => this.onSave()}>
                            <Icon name="checkmark" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                {this.state.isError?
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>:null}
                <Content style={styles.content}>
                    <Thumbnail square source={require('../../assets/1.png')} style={styles.image}/>
                    <Text style={styles.basicTitle}>Private details</Text>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formItemLabel}>YOUR NAME</Label>
                            <Input style={styles.formItemInput} value={this.state.name} onChangeText={(text) => this.onChangeText("name", text)}/>
                        </Item>
                        <Grid>
                            <Col style={styles.birthContainer}>
                                <Item stackedLabel style={styles.formItem}>
                                    <Label style={styles.formItemLabel}>BIRTHDAY</Label>
                                    <View style={styles.birthdayWrapper}>
                                    <DatePicker 
                                        style={{width: 200}}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="Select your birthday"
                                        format="YYYY-MM-DD"
                                        confirmBtnText="Done"
                                        cancelBtnText="Cancel"
                                        onDateChange={(date) => this.setState({date: date})}
                                        showIcon={false}
                                        customStyles={{
                                            dateInput: styles.birthText,
                                            dateText: {
                                                color: 'black',
                                                fontFamily: 'Roboto',
                                                fontWeight: 'normal',
                                                fontSize: 16,
                                                lineHeight: 35
                                            }
                                        }}
                                        />
                                    </View>
                                </Item>
                            </Col>
                            <Col style={styles.zipContainer}>
                                <Item stackedLabel style={styles.formItem}>
                                    <Label style={styles.formItemLabel}>ZIP CODE</Label>
                                    <Input style={styles.formItemInput} keyboardType="numeric" maxLength={5} value={this.state.zipcode} onChangeText={(text) => this.onChangeText('zipcode', text)}/>
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
                                    <Thumbnail square source={require('../../assets/femaleNormalLight.png')} style={styles.additionalBtnIcon}/>
                                    }
                                </Button>
                                <Button transparent style={styles.additionalBtn} onPress={() => this.toggleGender(false)}>
                                    {this.state.gender?
                                    <Thumbnail square source={require('../../assets/maleNormalLight.png')} style={styles.additionalBtnIcon}/>:
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
                                    <Thumbnail square source={require('../../assets/marriedNormalLight.png')} style={styles.additionalBtnIcon}/>
                                    }
                                </Button>
                                <Button transparent style={styles.additionalBtn} onPress={() => this.toggleMarital(false)}>
                                    {this.state.marital?
                                    <Thumbnail square source={require('../../assets/femaleNormalLight.png')} style={styles.additionalBtnIcon}/>:
                                    <Thumbnail square source={require('../../assets/femaleSelected.png')} style={styles.additionalBtnIcon}/>
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
                                    <Thumbnail square source={require('../../assets/yesNormalLight.png')} style={styles.additionalBtnIcon}/>
                                    }
                                </Button>
                                <Button transparent style={styles.additionalBtn} onPress={() => this.toggleKids(false)}>
                                    {this.state.kids?
                                    <Thumbnail square source={require('../../assets/noNormalLight.png')} style={styles.additionalBtnIcon}/>:
                                    <Thumbnail square source={require('../../assets/noSelected.png')} style={styles.additionalBtnIcon}/>    
                                    }
                                </Button>
                            </View>
                        </View>
                    </View>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formItemLabel}>EMAIL</Label>
                            <Input style={styles.formItemInput} autoCapitalize={false} value={this.state.email} onChangeText={(text) => this.onChangeText('email', text)}/>
                        </Item>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formItemLabel}>PHONE</Label>
                            <Input style={styles.formItemInput} keyboardType="numeric" value={this.state.phone} onChangeText={(text) => this.onChangeText('phone', text)}/>
                        </Item>
                    </Form>
                    <Text style={styles.basicTitle}>My interests</Text>
                    <View style={styles.checkContainer}>
                        {this.props.interests.map((interest, index) => {
                            return (
                                <View style={styles.checkItemContainer} kye={index}>
                                    <ListItem style={styles.checkItem}>
                                        <CheckBox checked={this.state.interests[index]} onPress={() => this.onValueChange(index)}/>
                                        <Body>
                                            <Text style={styles.checkItemText}>{interest.name}</Text>
                                        </Body>
                                    </ListItem>
                                </View>
                            );
                        })}
                    </View>                                            
                </Content>
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    interests: state.interest.list
});

export default connect(mapStateToProps)(EditProfileScreen);
