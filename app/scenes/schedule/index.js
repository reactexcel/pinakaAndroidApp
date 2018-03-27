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
    CheckBox
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, ScrollView } from 'react-native';
import moment from 'moment';
import { API } from '../../constants/api';

class ScheduleScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        var dates = [];
        for(var i = 0; i < 30; i++){
            dates.push(new Date((new Date()).getTime() + 1000 * 60 * 60 * 24 * i));
        }

        this.state = {
            selectedIndex: 0,
            dates: dates,
            time1: true,
            time2: false,
            time3: false,
            time4: false
        }
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    showDay(date){
        return moment(date).format("ddd");
    }

    showDate(date){
        return moment(date).format("D");
    }

    showSelectedDate(){
        return moment(this.state.dates[this.state.selectedIndex]).format('dddd, D MMMM, YYYY');
    }

    onSelectedDate(index){
        this.setState({
            selectedIndex: index,
            time1: false,
            time2: false,
            time3: false,
            time4: false
        })
    }

    onValueChanged(index){
        switch(index){
            case 0:
                this.setState({
                    time1: !this.state.time1
                });
                break;
            case 1:
                this.setState({
                    time2: !this.state.time2
                });
                break;
            case 2:
                this.setState({
                    time3: !this.state.time3
                });
                break;
            case 3:
                this.setState({
                    time4: !this.state.time4
                });
                break;
        }
    }

    onBook(){
        if(this.state.time1 || this.state.time2 || this.state.time3 || this.state.time4){
            var { dispatch } = this.props;
            dispatch(NavigationActions.navigate({routeName: 'payment', params: {feed: this.props.navigation.state.params.feed, hours: [this.state.time1, this.state.time2, this.state.time3, this.state.time4], date: this.state.dates[this.state.selectedIndex]}}));
        }
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
                        <Title style={styles.title}>Schedule</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <View style={styles.calendar}>
                    <ScrollView horizontal={true} style={{flex: 1}} showsHorizontalScrollIndicator={false}>
                        {this.state.dates.map((date, index) => {
                            return (
                                <View style={styles.calendarItem}>
                                    <Text style={styles.dayText}>{this.showDay(date)}</Text>
                                    <View style={styles.dateContainer}>
                                        <Button transparent style={[styles.dateContainer, (this.state.selectedIndex == index) && styles.dateActiveContainer]} onPress={() => this.onSelectedDate(index)}>
                                            <Text style={styles.dateText}>{this.showDate(date)}</Text>
                                        </Button>
                                    </View>
                                </View>
                            );
                        })
                        }
                    </ScrollView>
                    <Text style={styles.fullDateText}>{this.showSelectedDate()}</Text>
                </View>
                <Content style={styles.content}>
                    <List style={styles.list}>
                        <ListItem style={styles.listItem} onPress={() => this.onValueChanged(0)}>
                            <Body>
                                <Text style={styles.listItemText}>{API.BOOKINGTIME[0]}</Text>
                            </Body>
                            <Right>
                                <CheckBox checked={this.state.time1}/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onValueChanged(1)}>
                            <Body>
                                <Text style={styles.listItemText}>{API.BOOKINGTIME[1]}</Text>
                            </Body>
                            <Right>
                                <CheckBox checked={this.state.time2}/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onValueChanged(2)}>
                            <Body>
                                <Text style={styles.listItemText}>{API.BOOKINGTIME[2]}</Text>
                            </Body>
                            <Right>
                                <CheckBox checked={this.state.time3}/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onValueChanged(3)}>
                            <Body>
                                <Text style={styles.listItemText}>{API.BOOKINGTIME[3]}</Text>
                            </Body>
                            <Right>
                                <CheckBox checked={this.state.time4}/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
                <Footer style={styles.footer}>
                    <Button style={styles.bookBtn} onPress={() => this.onBook()}>
                        <Label style={styles.bookBtnText}>Request to book</Label>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

export default connect()(ScheduleScreen);