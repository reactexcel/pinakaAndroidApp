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
    Label,
    Text,
    List,
    ListItem,
    View,
    Grid,
    Col,
    Right,
    Icon
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar,RefreshControl } from 'react-native';
import moment from 'moment';
import { API } from '../../constants/api';
import { getReservation } from '../../actions';

class ReservationScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            selectedTab: 0,
            refreshing: false
        }

        this.onRefresh();
    }

    loadReservation(){
        var { token, dispatch } = this.props;
        getReservation(token, 0)
        .then(data => {
            console.log(data,'checking reservation data')
            dispatch({type: 'setreservation', data: data});
            this.setState({
                refreshing: false
            });
        })
        .catch(err => {
            this.setState({
                refreshing: false
            });
        });
    }

    onRefresh(){
        this.setState({
            refreshing: true
        });
        this.loadReservation();
    }

    onSelectedTab(index){
        this.setState({selectedTab: index});
    }

    onDetail(reservation){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'reservationdetail', params: { reservation: reservation, showTime: reservation.showTime }}));
    }

    isActive(reservation){
        var bookingtime = (new Date(reservation.booking_time)).getTime();
        var now = (new Date()).getTime();
        if(bookingtime - now > 0){
            return true;
        }else{
            return false;
        }
    }

    showBookingTime(reservation){
        var bookingtime = new Date(reservation.booking_time);
        return (bookingtime.getHours() )+":00 PM - " + (bookingtime.getHours()) + ":00 PM";
        // return (bookingtime.getHours() )+":"+(bookingtime.getMinutes() <10 ? "0"+bookingtime.getMinutes() : bookingtime.getMinutes()) +" PM - " + (bookingtime.getHours() + 1 ) + ":"+(bookingtime.getMinutes() <10 ? "0"+bookingtime.getMinutes() : bookingtime.getMinutes())+"PM";
    }

    render(){
        StatusBar.setBarStyle('light-contnet');
        console.log('11111111111111111111',this.props, '111111111111111')
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.title}>Reservations</Title>
                    </Body>
                </Header>
                <View style={styles.tabContainer}>
                    <Grid>
                        <Col>
                            <Button onPress={() => this.onSelectedTab(0)} block transparent style={[styles.tabItemBtn,( this.state.selectedTab == 0 ) && styles.tabItemActiveBtn]}>
                                <Text style={[styles.tabItemBtnText, (this.state.selectedTab == 0) && styles.tabItemActiveBtnText]}>ACTIVE</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button onPress={() => this.onSelectedTab(1)} block transparent style={[styles.tabItemBtn,( this.state.selectedTab == 1 ) && styles.tabItemActiveBtn]}>
                                <Text style={[styles.tabItemBtnText, (this.state.selectedTab == 1) && styles.tabItemActiveBtnText]}>HISTORY</Text>
                            </Button>
                        </Col>
                    </Grid>
                </View>
                {this.state.selectedTab == 0?
                <Content style={styles.content}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}/>
                    }>
                    <List>
                        {this.props.reservationlist.map((reservation, index) => {
                            if(this.isActive(reservation)){
                                return (
                                    <ListItem style={styles.listItem} onPress={() => this.onDetail(reservation)} key={index}>
                                        <Thumbnail square source={{uri: API.SERVER + reservation.feed_id.image}} style={styles.image}/>
                                        <Body>
                                            <Text style={styles.itemTitle}>{reservation.feed_id.heading}</Text>
                                            <Text style={styles.itemDateText}>{moment(reservation.booking_time).format('D MMMM, YYYY')}</Text>
                                            <Text style={styles.itemTimeText}>{reservation.showTime}</Text>
                                        </Body>
                                        <Right>
                                            <Icon style={styles.itemRightIcon} name="ios-arrow-forward"/>
                                        </Right>
                                    </ListItem>
                                );
                            }else{
                                return null;
                            }
                        })}
                    </List>
                </Content>:
                <Content style={styles.content}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}/>
                    }>
                    <List>
                        {this.props.reservationlist.map((reservation, index) => {
                            if(!this.isActive(reservation)){
                                return (
                                    <ListItem style={styles.listItem}>
                                        <Thumbnail square source={{uri: API.SERVER + reservation.feed_id.image}} style={styles.image}/>
                                        <Body>
                                            <Text style={styles.itemTitle}>{reservation.feed_id.heading}</Text>
                                            <Text style={styles.itemLocationText}>Boronia St & Anzac Parade, NSW 2033</Text>
                                            <Text style={styles.itemTime1Text}>Received:   {moment(reservation.booking_time).format('D/MM/YYYY')} {this.showBookingTime(reservation)}</Text>
                                            <Text style={styles.itemTime1Text}>Total:  <Text style={styles.itemAmountText}>${reservation.purchase_amount.toFixed(2)}</Text></Text>
                                        </Body>
                                    </ListItem>
                                );
                            }else{
                                return null;
                            }
                        })}
                    </List>
                </Content>
                }
            </Container>
        );
    }
}


const mapStateToProps = state => ({
    token: state.user.token,
    reservationlist: state.reservation.list
});


export default connect(mapStateToProps)(ReservationScreen);
