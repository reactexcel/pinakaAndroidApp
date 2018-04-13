import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Header,
    Thumbnail,
    List,
    Icon,
    ListItem,
    Left,
    Button
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';
import { API } from '../../constants/api';

class ShareScreen extends Component{
    static navigationOptions = {
        header: null    
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Left>
                    <Body></Body>
                </Header>
                <Content>
                    <Body style={styles.body}>
                        <Thumbnail square source={{uri: API.SERVER + this.props.navigation.state.params.feed.image}} style={styles.image}/>
                        <Text style={styles.title}>Bowling</Text>
                        <List style={styles.list}>
                            <ListItem style={styles.listItem}>
                                <Body style={styles.listItemBody}>
                                    <Icon  name="mail" style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>Email</Text>
                                </Body>
                            </ListItem>
                            <ListItem style={styles.listItem}>
                                <Body style={styles.listItemBody}>
                                    <Icon name="chatbubbles" style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>Messages</Text>
                                </Body>
                            </ListItem>
                            <ListItem style={styles.listItem}>
                                <Body style={styles.listItemBody}>
                                    <Icon name="logo-facebook" style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>Facebook</Text>
                                </Body>
                            </ListItem>
                            <ListItem style={styles.listItem}>
                                <Body style={styles.listItemBody}>
                                    <Icon name="link" style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>Copy link</Text>
                                </Body>
                            </ListItem>
                            <ListItem style={styles.listItem}>
                                <Body style={styles.listItemBody}>
                                    <Icon name="logo-twitter" style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>Twitter</Text>
                                </Body>
                            </ListItem>
                            <ListItem style={styles.listItem}>
                                <Body style={styles.listItemBody}>
                                    <Icon name="more" style={styles.listItemIcon}/>
                                    <Text style={styles.listItemText}>More</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Body>
                </Content>
            </Container>
        );
    }
}

export default connect()(ShareScreen);