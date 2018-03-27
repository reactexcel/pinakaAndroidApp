import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Title,
    Label,
    Thumbnail,
    Button,
    Left,
    Header,
    Right,
    Icon,
    List,
    ListItem,
    Text,
    View
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';
import { API } from '../../constants/api';
import { deleteCard } from '../../actions';
import PLoading from '../../components/loading';

class CreditDetailScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        var creditcards = this.props.user.creditcards;
        var currentcardindex = -1;
        for(var i = 0; i < creditcards.length; i++){
            if(creditcards[i]._id == this.props.navigation.state.params.id){
                currentcardindex = i;
            }
        }
        this.state = {
            cardindex: currentcardindex,
            isLoading: false
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onDelete(){
        var { dispatch, user } = this.props;
        
        //shoe Indicator
        this.setState({
            isLoading: true
        });
        
        deleteCard(user.token, this.props.user.creditcards[this.state.cardindex]._id)
        .then(data => {
            //delete card to store
            var creditcards = this.props.user.creditcards;            
            creditcards.splice(this.state.cardindex, 1);
                   
            dispatch({type: 'changecreditcards', data: creditcards});

            this.setState({
                isLoading: false
            });
            dispatch(NavigationActions.back());
        })
        .catch(err => {
            this.setState({
                isLoading: false
            });
        });
    }

    onEdit(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'addcreditcard', params: {card: this.props.user.creditcards[this.state.cardindex], action: 'save'}}));
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
                        <Title style={styles.title}>Master Card</Title>
                    </Body>
                    <Right style={styles.headerLeft}/>
                </Header>
                {this.props.user.creditcards[this.state.cardindex]?
                <Content style={styles.content}>
                    <Text style={styles.fieldText}>NUMBER</Text>
                    <View style={styles.numberContainer}>
                        <Thumbnail square source={require('../../assets/mastercard.png')} style={styles.icon}/>
                        <Text style={styles.numberText}>&middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; {this.showNumber(this.props.user.creditcards[this.state.cardindex].number)}</Text>
                    </View>
                    <View style={styles.divider}/>
                    <Text style={styles.fieldText}>EXPIRY DATE</Text>                    
                    <Text style={styles.expiredText}>{(this.props.user.creditcards[this.state.cardindex].expired_m < 10? "0" + this.props.user.creditcards[this.state.cardindex].expired_m: this.props.user.creditcards[this.state.cardindex].expired_m)} / {this.props.user.creditcards[this.state.cardindex].expired_y}</Text>
                    <View style={styles.divider}/>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnWrapper}>
                            <Button style={styles.deleteBtn} onPress={() => this.onDelete()}>
                                <Label style={styles.deleteBtnText}>Delete</Label>
                            </Button>
                        </View>
                        <View style={styles.btnWrapper}>
                            <Button style={styles.editBtn} onPress={() => this.onEdit()}>
                                <Label style={styles.editBtnText}>Edit</Label>
                            </Button>
                        </View>
                    </View>
                </Content>: null}
                {this.state.isLoading?<PLoading color="black"/>: null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});


export default connect(mapStateToProps)(CreditDetailScreen);