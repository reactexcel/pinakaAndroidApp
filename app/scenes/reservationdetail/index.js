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
    Grid,
    Col,
    Icon,
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';
import QRCode from 'react-native-qrcode';
import { API } from '../../constants/api';
import moment from 'moment';
import PLoading from '../../components/loading';
import { cancelReservation } from '../../actions';

class ReservationDetailScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props)

        this.state = {
            reservation: this.props.navigation.state.params.reservation,
            isLoading: false
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    showBookingTime(reservation){
        var bookingtime = new Date(reservation.booking_time);
        return (bookingtime.getHours())+":"+(bookingtime.getMinutes() <10 ? "0"+bookingtime.getMinutes() : bookingtime.getMinutes()) + "-" + (bookingtime.getHours() + 1) + ":"+(bookingtime.getMinutes() <10 ? "0"+bookingtime.getMinutes() : bookingtime.getMinutes()) ;
    }

    onCancel(){
        //show indicator
        this.setState({
            isLoading: true
        });

        var { token,  dispatch } = this.props;
        cancelReservation(token, this.state.reservation._id)
        .then(data => {
            //hide indicator
            this.setState({
                isLoading: false
            });
            
            //delete reservation to store
            var reservations = this.props.reservationlist;
            var newreservations = [];
            for(var i = 0; i < reservations.length; i++){
                if(reservations[i]._id != this.state.reservation._id){
                    newreservations.push(reservations[i]);
                }
            }
            dispatch({type: 'setreservation', data: newreservations});
            dispatch(NavigationActions.navigate({routeName: 'tab'}));//go to home page
        })
        .catch(err => {
            //hide indicator
            this.setState({
                isLoading: false
            })
        });
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Thumbnail square source={{uri: API.SERVER + this.state.reservation.feed_id.image}} style={styles.image}/>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="arrow-back" style={styles.headerIcon}/>
                        </Button>
                    </Left>
                    <Body></Body>
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.title}>
                        {this.state.reservation.feed_id.heading}
                    </Text>
                    <Text style={styles.locationText}><Icon name="pin" style={styles.pinIcon}/>  Boronia St & Anzac Parade, NSW 2033</Text>
                    <Text style={styles.dateText}>{moment(this.state.reservation.booking_time).format("dddd, D MMM, YYYY")}</Text>
                    <Text style={styles.timeText}>{this.showBookingTime(this.state.reservation)}</Text>
                    <View style={styles.divider}/>
                    <Text style={styles.qrText}>
                        QR - Code
                    </Text>
                    <View style={styles.qrWrapper}>
                        <View style={styles.qrContainer}>
                            <QRCode
                                value="1234567891234567"
                                size={230}
                                bgColor='black'
                                fgColor='white'/>
                            <Text style={styles.qrCodeText}>1234 - 5678 - 9123 - 4567</Text>
                        </View>
                    </View>
                    <View style={styles.divider}/>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>
                            ${this.state.reservation.purchase_amount.toFixed(2)}
                        </Text>
                        <View iconLeft style={styles.paidMark}>     
                            <Icon name="ios-checkmark" style={styles.checkIcon}/>                       
                            <Text style={styles.paidText}> Paid</Text>
                        </View>
                    </View>
                    <View style={styles.divider}/>
                    <Text style={styles.qrText}>
                        Instruction
                    </Text>
                    <Text style={styles.descText}>
                        {this.state.reservation.feed_id.description}
                    </Text>
                    <View style={styles.divider}/>                    
                    <Button block style={styles.cancelBtn} onPress={() => this.onCancel()}>
                        <Label style={styles.cancelBtnText}>Cancel Reservation</Label>                        
                    </Button>
                    <View style={{height: 16}}/>
                </Content>
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
    token: state.user.token,
    reservationlist: state.reservation.list
})

export default connect(mapStateToProps)(ReservationDetailScreen);