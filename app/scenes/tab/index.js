import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Footer,
    Grid,
    Col,
    View,
    Button,
    Thumbnail,
    Text
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';

import HomeScreen from '../home';
import SavedScreen from '../saved';
import ReservationScreen from '../reservation';
import ProfileScreen from '../profile';
import SettingScreen from '../setting';


class TabScreen extends Component{
    static navigationOptions ={
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            tabIndex: 0
        }
    }

    onSelectTab(index){
        this.setState({
            tabIndex: index
        });
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                {this.state.tabIndex == 0?
                <HomeScreen/>: null}
                {this.state.tabIndex == 1?
                <SavedScreen/>: null}
                {this.state.tabIndex == 2?
                <ReservationScreen/>:null}
                {this.state.tabIndex == 3?
                <ProfileScreen/>:null}
                {this.state.tabIndex == 4?
                <SettingScreen/>:null}
                <Footer style={styles.footer}>
                    <Grid>
                        <Col style={styles.tabItem}>
                            <View style={styles.tabItemContainer}>
                                <Button transparent style={styles.tabItemBtn} onPress={() => this.onSelectTab(0)}>
                                    <View style={styles.tabItemBtnContainer}>
                                        {this.state.tabIndex == 0?
                                        <Thumbnail square source={require('../../assets/ic_tab_home_selected.png')} style={styles.tabBtnHomeIcon}/>:
                                        <Thumbnail square source={require('../../assets/ic_tab_home_normal.png')} style={styles.tabBtnHomeIcon}/>
                                        }
                                        {this.state.tabIndex == 0?
                                        <Text style={styles.tabItemBtnText}>Home</Text>:null}
                                    </View>
                                </Button>
                            </View>
                        </Col>
                        <Col style={styles.tabItem}>
                            <View style={styles.tabItemContainer}>
                                <Button transparent style={styles.tabItemBtn} onPress={() => this.onSelectTab(1)}>
                                    <View style={styles.tabItemBtnContainer}>
                                        {this.state.tabIndex == 1?
                                        <Thumbnail square source={require('../../assets/ic_tab_saved_selected.png')} style={styles.tabBtnSavedIcon}/>:
                                        <Thumbnail square source={require('../../assets/ic_tab_saved_normal.png')} style={styles.tabBtnSavedIcon}/>
                                        }
                                        {this.state.tabIndex == 1?
                                        <Text style={styles.tabItemBtnText}>Saved</Text>:null}    
                                    </View>
                                </Button>
                            </View>
                        </Col>
                        <Col style={styles.tabItem}>
                            <View style={styles.tabItemContainer}>
                                <Button transparent style={styles.tabItemBtn} onPress={() => this.onSelectTab(2)}>
                                    <View style={styles.tabItemBtnContainer}>
                                        {this.state.tabIndex == 2?
                                        <Thumbnail square source={require('../../assets/ic_tab_reservations_selected.png')} style={styles.tabBtnReservationIcon}/>:
                                        <Thumbnail square source={require('../../assets/ic_tab_reservations_normal.png')} style={styles.tabBtnReservationIcon}/>
                                        }
                                        {this.state.tabIndex == 2?
                                        <Text style={styles.tabItemBtnText}>Reservations</Text>:null} 
                                    </View>
                                </Button>
                            </View>
                        </Col>
                        <Col style={styles.tabItem}>
                            <View style={styles.tabItemContainer}>
                                <Button transparent style={styles.tabItemBtn} onPress={() => this.onSelectTab(3)}>
                                    <View style={styles.tabItemBtnContainer}>
                                        {this.state.tabIndex == 3?
                                        <Thumbnail square source={require('../../assets/ic_tab_profile_selected.png')} style={styles.tabBtnProfileIcon}/>:
                                        <Thumbnail square source={require('../../assets/ic_tab_profile_normal.png')} style={styles.tabBtnProfileIcon}/>
                                        }
                                        {this.state.tabIndex == 3?
                                        <Text style={styles.tabItemBtnText}>Profile</Text>:null}
                                    </View>
                                </Button>
                            </View>
                        </Col>
                        <Col style={styles.tabItem}>
                            <View style={styles.tabItemContainer}>
                                <Button transparent style={styles.tabItemBtn} onPress={() => this.onSelectTab(4)}>
                                    <View style={styles.tabItemBtnContainer}>
                                        {this.state.tabIndex == 4?
                                        <Thumbnail square source={require('../../assets/ic_tab_settings_selected.png')} style={styles.tabBtnSettingIcon}/>:
                                        <Thumbnail square source={require('../../assets/ic_tab_settings_normal.png')} style={styles.tabBtnSettingIcon}/>
                                        }
                                        {this.state.tabIndex == 4?
                                        <Text style={styles.tabItemBtnText}>Settings</Text>:null}
                                    </View>
                                </Button>
                            </View>
                        </Col>
                    </Grid>
                </Footer>
            </Container>
        );
    }
}

export default connect()(TabScreen);