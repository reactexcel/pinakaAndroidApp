import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Button,
    Title,
    Thumbnail,
    Header,
    Item,
    Label,
    Left,
    Right,
    View,
    List,
    ListItem,
    Footer,
    Icon,
    Radio,
    Grid,
    Col,
    Picker
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, ScrollView, Alert } from 'react-native';
import { API } from '../../constants';
import PLoading from '../../components/loading';
import { createReservation, createCardToken, cardPay } from '../../actions';
import moment from 'moment';
import DatePicker from 'react-native-datepicker'
import EDialog from '../../components/edialog';

class PaymentScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {
            peoples: 5,
            lines: 1,
            paymentmethod: 0,
            isLoading: false,
            isError: false,
            errorText: "",
            total_hour: 60,
            reservationTime:'',
            reservationDate:'',
            original_rate: this.props.navigation.state.params.feed.discounted_cost,            
            rate: this.props.navigation.state.params.feed.discounted_cost
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onAddCredit(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'addcreditcard', params: {action: 'add'}}));
    }

    onCalPeople(delta){
        if(this.state.peoples + delta  > 0 && this.state.peoples + delta <= 20 ){
            this.setState({
                peoples: this.state.peoples + delta
            });
        } else if(this.state.peoples + delta > 20) {
            this.setState({
                isError : true,
                errorText: 'People Limit Reached'
            })
        }
            //     if(this.state.peoples + delta  > 0 && this.state.peoples + delta <= 20 ){
            //     this.rateCalculate('people',this.state.peoples + delta)
            // }
    }

    onCalLines(delta){
        if(this.state.lines + delta > 0 && this.state.lines + delta <= 5 ){
            this.setState({
                lines: this.state.lines + delta
            },()=>{
                this.rateCalculate();
            });
        } else if(this.state.lines + delta > 5) {
            this.setState({
                isError: true,
                errorText: 'Bowiling Line Limit Reached'
            })
        }
        // if(this.state.lines + delta > 0 && this.state.lines + delta <= 5 ){
        //     this.rateCalculate('lines',this.state.lines + delta)
            
        // }
        
    }

    onPaymentMethod(index){
        this.setState({
            paymentmethod: index
        });
    }
    showTime(){
        const { hours } = this.props.navigation.state.params;
        let showTime;
        _.map(hours, (val, i) => {
            if(val){
                showTime = API.BOOKINGTIME[i];
            }
        })
        return showTime;
    }
    onPay(){
        if(this.props.user.creditcards && this.props.user.creditcards[0]!= undefined){
            //show Indicator
            this.setState({
                isLoading: true
            });
            var cardDetails =  {
                number: this.props.user.creditcards[this.state.paymentmethod].number,
                expired_m: this.props.user.creditcards[this.state.paymentmethod].expired_m,
                expired_y: this.props.user.creditcards[this.state.paymentmethod].expired_y,
                cvv: this.props.user.creditcards[this.state.paymentmethod].cvv,
                amount:this.props.navigation.state.params.feed.discounted_cost,
            };

            var { token, dispatch } = this.props;
            const showTime = this.showTime();
            var params = {
                feed_id: this.props.navigation.state.params.feed._id,
                people_count: this.state.peoples,
                lane_count: this.state.lines,
                actual_price:this.props.navigation.state.params.feed.original_cost,
                article:this.props.navigation.state.params.feed.heading,
                reservation_for:this.props.navigation.state.params.feed.heading,
                reservation_hours:this.state.total_hour,
                showTime: showTime,
                booking_time: moment(this.props.navigation.state.params.date).format('YYYY-MM-D') + " " + (17 + (this.props.navigation.state.params.hours[0]==true?0:(this.props.navigation.state.params.hours[1]==true?1:(this.props.navigation.state.params.hours[2]==true?2:3))))+ ":00:00",
                purchase_amount: this.state.rate,
                number: this.props.user.creditcards[this.state.paymentmethod].number,
                cvv: this.props.user.creditcards[this.state.paymentmethod].cvv,
                expired_m: this.props.user.creditcards[this.state.paymentmethod].expired_m,
                expired_y: this.props.user.creditcards[this.state.paymentmethod].expired_y
            };                

            createCardToken(cardDetails).then(data => {
              const paymentData = {data:data,amount:this.props.navigation.state.params.feed.discounted_cost,currency:'USD',description:'payment'}
              cardPay(paymentData).then(response => {
                if(response.error === 0){
                    paymentId = response.charges.id;
                createReservation(token, params,paymentId)
                .then(data => {
                    if(data.code != undefined){
                        switch(data.code){
                            case API.RESPONSE.RESERVATION.INVALIDCARDINFO:
                                this.setState({
                                    isLoading:false,
                                    isError: true,
                                    errorText: "Invalid Credit Card Information. Please try again."
                                });
                                break;
                            case API.RESPONSE.RESERVATION.INVALIDBOOKINGTIME:
                                this.setState({
                                    isLoading:false,
                                    isError: true,
                                    errorText: "Please enter correct date and time."
                                });
                                break;
                        }
                    }else{
                        this.setState({
                            isLoading: false
                        });
                        var reservationDATA = JSON.parse(JSON.stringify(data));
                        reservationDATA['feed_id'] = this.props.navigation.state.params.feed;
                        dispatch(NavigationActions.navigate({routeName: 'reservationdetail', params: { reservation: reservationDATA , showTime : showTime }}));
                    }
                })
                .catch(err => {
                    this.setState({
                        isLoading: false,
                        isError: true,
                        errorText: "Please check wifi or internet."
                    });
                });
              } else {
                this.setState({
                    isError: true,
                    isLoading:false,
                    errorText: "Entered Wrong card details."
                });
                Alert.alert("Error",'Entered Wrong card details');
              }
              });
            });

        }else{
            this.setState({
                isError: true,
                errorText: "Please select a credit card to pay."
            });
            Alert.alert('Error',"Please select a credit card to pay");
        }
        
    }

    showDate(){
        return moment(this.props.navigation.state.params.date).format('dddd, D MMMM, YYYY');
    }

    onErrorClose(){
        this.setState({
            isError: false,
            errorText: ""
        });
    }

    rateCalculate(){
        //-----------------lines-------------
        let { lines, rate, original_rate } = this.state;

        rate = original_rate * lines;


        
        this.setState({
            rate
        })
        
    }

    onSchedule(){
        var { dispatch } = this.props;
       dispatch(NavigationActions.navigate({routeName: 'schedule', params:{feed:this.props.navigation.state.params.feed}}));
   }

    render (){
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
                        <Title style={styles.title}>Booking</Title>
                    </Body>
                    <Right></Right>
                </Header>
                {this.state.isError?
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>: null}
                <Content style={styles.content}>
                    <Grid>
                        <Col style={styles.basicContainer}>
                            <Text style={styles.nameText}>Bowling</Text>
                            <Text style={styles.locationText}>Boronia St & Anzac Parade, NSW 2033</Text>
                            <Text style={styles.phoneText}>+61 123 456 678</Text>
                        </Col>
                        <Col style={styles.imageContainer}>
                            <Thumbnail square source={require('../../assets/1.png')} style={styles.image}/>
                        </Col>
                    </Grid>
                    <Text style={styles.datetimeText}>
                        Date & Time
                    </Text>
                    {/* <View>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.reservationDate}
                        mode="date"
                        placeholder="Select Reservation Date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Done"
                        minDate={new Date()}
                        cancelBtnText="Cancel"
                        onDateChange={(date) => this.setState({reservationDate: date})}
                        showIcon={false}
                        customStyles={{
                            dateInput: styles.birthdayText,
                            dateText: {
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                fontSize: 16,
                                lineHeight: 33,
                                color:'#e636a6'
                            }
                        }}
                    />
                    </View>
                    <View>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.reservationTime}
                        mode="date"
                        placeholder="Select Reservation Time"
                        mode="time"
                        is24Hour
                        confirmBtnText="Done"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => this.setState({reservationTime: date})}
                        showIcon={false}
                        customStyles={{
                            dateInput: styles.birthdayText,
                            dateText: {
                                fontFamily: 'Roboto',
                                fontWeight: 'normal',
                                fontSize: 16,
                                lineHeight: 33,
                                color:'#e636a6'
                                
                            }
                        }}
                    />
                    <Text style={styles.datetimeText} >Number Of Hours </Text>
                        <Picker
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.total_hour}
                            onValueChange={(e)=>this.onValueChange(e)}
                            >
                            <Item label="1 Hour" value={60} />
                            <Item label="2 Hour" value={120} />
                            <Item label="3 Hour" value={180} />
                            <Item label="4 Hour" value={240} />
                        </Picker>

                    </View> */}
                    <Text style={styles.dateText} onPress={()=>{this.onSchedule()}} >{this.showDate()}</Text>
                   {this.props.navigation.state.params.hours[0]?
                   <Text style={styles.timeText} onPress={()=>{this.onSchedule()}} >{API.BOOKINGTIME[0]}</Text>: null}
                   {this.props.navigation.state.params.hours[1]?
                       <Text style={styles.timeText} onPress={()=>{this.onSchedule()}} >{API.BOOKINGTIME[1]}</Text>: null}
                   {this.props.navigation.state.params.hours[2]?
                   <Text style={styles.timeText} onPress={()=>{this.onSchedule()}} >{API.BOOKINGTIME[2]}</Text>: null}
                   {this.props.navigation.state.params.hours[3]?
                   <Text style={styles.timeText} onPress={()=>{this.onSchedule()}} >{API.BOOKINGTIME[3]}</Text>: null}

                    <List style={styles.list}>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.listItemText}>Number of people</Text>
                            </Body>
                            <Right style={styles.right}>
                                <Button transparent onPress={() => this.onCalPeople(-1)}>
                                    <Icon name="ios-remove-circle" style={styles.listItemIcon}/>
                                </Button>
                            </Right>
                            <Right style={styles.right}>
                                <View style={styles.countTextContainer}>
                                    <Text style={styles.countText}>{this.state.peoples}</Text>
                                </View>
                            </Right>
                            <Right style={styles.right}>
                                <Button transparent onPress={() => this.onCalPeople(1)}>
                                    <Icon name="ios-add-circle" style={styles.listItemIcon}/>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.listItemText}>Bowling lines</Text>
                            </Body>
                            <Right style={styles.right}>
                                <Button transparent onPress={() => this.onCalLines(-1)}>
                                    <Icon name="ios-remove-circle" style={styles.listItemIcon}/>
                                </Button>
                            </Right>
                            <Right style={styles.right}>
                                <View style={styles.countTextContainer}>
                                    <Text style={styles.countText}>{this.state.lines}</Text>
                                </View>
                            </Right>
                            <Right style={styles.right}>
                                <Button transparent onPress={() => this.onCalLines(1)}>
                                    <Icon name="ios-add-circle" style={styles.listItemIcon}/>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                    <Text style={styles.datetimeText}>
                        Payment Method
                    </Text>
                    <List style={styles.list}>
                      {this.props.user.creditcards && this.props.user.creditcards[0] != undefined ?
                        (this.props.user.creditcards.map((card, index) => {
                            return (
                                <ListItem style={styles.listItem} onPress={() => this.onPaymentMethod(index)} key={index}>
                                    <Body style={styles.paymentListItemBody}>
                                        <Thumbnail square source={require('../../assets/mastercard.png')} style={styles.paymentIcon}/>
                                        <Text style={styles.paymentText}>{card.number}</Text>
                                    </Body>
                                    <Right>
                                        <Radio onPress={() => this.onPaymentMethod(index)} selected={(this.state.paymentmethod == index)}/>
                                    </Right>
                                </ListItem>
                            );
                        }))
                         :
                          null}

                        <ListItem style={styles.listItem} onPress={() => this.onAddCredit()}>
                            <Body style={styles.paymentListItemBody}>
                                <Icon name="add-circle" style={styles.addPaymentIcon}/>
                                <Text style={styles.addPaymentText}>Add credit card</Text>
                            </Body>
                        </ListItem>
                    </List>
                    <View style={{height: 40}}/>
                </Content>
                <Footer style={styles.footer}>
                    <View>
                        <Text style={styles.footerPriceText}>${this.state.rate}</Text>
                        <Text style={styles.footerLineText}>for {this.state.lines} lines</Text>
                    </View>
                    <Button style={this.props.user.creditcards && this.props.user.creditcards[0] != undefined ?styles.payBtn:styles.payBtnDisable} onPress={() => this.onPay()} disabled={this.props.user.creditcards && this.props.user.creditcards[0] != undefined ?false:true} >
                        <Label style={styles.payBtnText}>Pay</Label>
                    </Button>
                </Footer>
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
    token: state.user.token,
    user: state.user
});

export default connect(mapStateToProps)(PaymentScreen);
