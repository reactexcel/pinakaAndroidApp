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
import { API } from '../../constants/api';
import { getProfile } from '../../actions';

class ProfileScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            refreshing: false
        }
        this.onRefresh();
    }

    loadProfile(){
        var { user,  dispatch } = this.props;
        getProfile(user.token)
        .then(data => {
            dispatch({type: 'setprofile', data: data});
            this.setState({
                refreshing: false
            })
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
        this.loadProfile();
    }

    showAge(){
        var date1 = new Date();
        var date2 = new Date(this.props.user.birthday);
        return (date1.getFullYear() - date2.getFullYear());
    }

    showInterest(){
        var interests = this.props.user.interests;
        var ret = '';
        if(interests != undefined && interests[0] != null){
            for(var i = 0; i < interests.length; i++){
                ret +=interests[i].id.name + ", "
            }
        }

        if(ret.length > 0){
            ret = ret.substring(0,ret.length - 1);
        }
        return ret;
    }

    showVerifiedInfo(){
        var email = this.props.user.email;
        var phone = this.props.user.phone;
        if(email && phone){
            return email + ", " + phone;
        }else if(email && !phone){
            return email;
        }else if(!email && phone){
            return phone
        }

        return "";
    }

    onEdit(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'editprofile'}))
    }

    onList(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'creditcardlist'}));
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.title}>Profile</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.onEdit()}>
                            <Icon name="md-create" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.content}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}
                        />
                    }>
                    <Body>
                        <Thumbnail source={require('../../assets/profile.png')} style={styles.image}/>
                        <Text style={styles.basicText}>{this.props.user.name}, {this.showAge()}</Text>
                        <Text style={styles.locationText}>Berlin, Germany</Text>
                    </Body>
                    {this.showInterest().length > 0?
                    <Text style={styles.interestText}>
                        My interest
                    </Text>: null}
                    {this.showInterest().length > 0?
                    <Text style={styles.interestText1}>
                        {this.showInterest()}
                    </Text>: null}
                    <View style={styles.divider}/>
                    {/* <Text style={styles.verifyText}>
                        Verified Info
                    </Text>
                    <Text style={styles.interestText1}>
                        {this.showVerifiedInfo()}
                    </Text> */}
                    {/* <View style={styles.divider}/> */}
                    <List style={styles.list}>
                        <ListItem style={styles.listItem} onPress={() => this.onList()}>
                            <Body>
                                <Text style={styles.listItemText}>Payment Method</Text>
                            </Body>
                            <Right>
                                <Icon style={styles.listItemIcon} name="ios-arrow-forward"/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(ProfileScreen);
