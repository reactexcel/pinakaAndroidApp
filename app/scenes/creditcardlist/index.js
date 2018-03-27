import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Title,
    Text,
    Label,
    Thumbnail,
    Button,
    Left,
    Header,
    Right,
    Icon,
    List,
    ListItem
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';

class CreditcardListScreen extends Component{
    static navigationOptions = {
        header: null
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onAddCredit(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'addcreditcard', params: {action: 'add'}}));
    }

    onCreditDetail(card){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'creditdetail', params: { id: card._id }}));
    }

    showNumber(number){
        return  number.substring(number.length - 4, number.length);
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left style={styles.headerLeft}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="arrow-back" style={styles.headerIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>Payment Method</Title>
                    </Body>
                    <Right style={styles.headerLeft}></Right>
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.text}>
                        Your credit cards
                    </Text>
                    <List style={styles.list}>
                        {this.props.user.creditcards.map((card, index) => {
                            return (
                                <ListItem style={styles.listItem} onPress={() => this.onCreditDetail(card)} key={index}>
                                    <Thumbnail square source={require('../../assets/mastercard.png')} style={styles.listIcon}/>
                                    <Body>
                                        <Text style={styles.listText}>&middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; {this.showNumber(card.number)}</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="ios-arrow-forward" style={styles.listIcon1}/>
                                    </Right>
                                </ListItem>
                            );
                        })}
                        <ListItem style={styles.listItem} onPress={() => this.onAddCredit()}>
                            <Body style={styles.listItemBody}>
                                <Icon name="ios-add-circle" style={styles.addIcon}/>
                                <Text style={styles.addText}>Add credit card</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(CreditcardListScreen);