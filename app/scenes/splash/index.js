import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Thumbnail,
    View
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';

class SplashScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        var { dispatch } = this.props;

        setTimeout(() => {
            dispatch(NavigationActions.navigate({routeName: 'welcome'}));
        }, 2000);
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <View style={styles.mainContainer}>
                    <Thumbnail square source={require('../../assets/logo_large.png')} style={styles.logo}/>
                </View>
            </Container>
        )
    }
}

export default connect()(SplashScreen);
