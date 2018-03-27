import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    List,
    ListItem,
    Button,
    Text,
    Label,
    Input,
    Thumbnail,
    Header,
    View,
    Icon,
    Grid,
    Col
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar,RefreshControl } from 'react-native';
import { API } from '../../constants/api';
import { getFeedList, savedFeed, unSavedFeed } from '../../actions';
import moment from 'moment';

class HomeScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            selectedTab: 0,
            refreshing: false,
            searchtag: ""
        };

        this.onRefresh();
    }

    loadFeeds(){
        var { token, dispatch } = this.props;
        getFeedList(token, this.state.selectedTab, this.state.searchtag)
        .then(data => {
            dispatch({type: 'setfeed', data: data});
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

        this.loadFeeds();
    }

    onSelectedTab(index){
        this.state.selectedTab = index;
        this.setState({
            selectedTab: this.state.selectedTab
        });

        if(index != 2){
            this.onRefresh();
        }
    }

    onDetail(feed){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'detail', params: { feed: feed }}));
    }

    onSave(index){
        var { token, dispatch } = this.props;
        var feed = this.props.feedlist && this.props.feedlist != undefined ? this.props.feedlist[index] : null;

        if(feed.isSaved == null){
            savedFeed(token, feed._id)
            .then(data => {
                var feedlist = this.props.feedlist && this.props.feedlist != undefined ? this.props.feedlist : null;
                feedlist[index].isSaved = data.id;
                dispatch({type: 'setfeed', data: []});
                dispatch({type: 'setfeed', data: feedlist});
            })
            .catch(err => {
                console.log(err);
            });
        }else{
            unSavedFeed(token, feed.isSaved)
            .then(data => {
                var feedlist = this.props.feedlist && this.props.feedlist != undefined ? this.props.feedlist : null;
                feedlist[index].isSaved = null;

                dispatch({type: 'setfeed', data: []});
                dispatch({type: 'setfeed', data: feedlist});
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    showEstimate(date){
        return  'Ends ' + moment(date).endOf('hour').fromNow();
    }

    onChangeText(text){
        this.state.searchtag = text;
        this.onRefresh();

        this.setState({
            searchtag: text
        });
    }

    onSubmitEditing(){
        this.onRefresh();
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                        <View style={styles.searchbarContainer}>
                            <View style={styles.searchIconContainer}>
                                <Icon name="search" style={styles.searchIcon}/>
                            </View>
                            <Input style={styles.searchInput} placeholder="Search" placeholderTextColor="#fff" value={this.state.searchtag} onChangeText={(text) => this.onChangeText(text)}/>
                        </View>
                        <Grid style={styles.tabContainer}>
                            <Col>
                                <Button  onPress={() => this.onSelectedTab(0)} transparent style={[styles.tabItem, (this.state.selectedTab == 0) && styles.tabActiveItem]}>
                                    <Text style={[styles.tabItemText, (this.state.selectedTab == 0) && styles.tabItemActiveText]}>
                                        DISCOUNTS
                                    </Text>
                                </Button>
                            </Col>
                            <Col style={styles.tabItemContainer}>
                                <Button onPress={() => this.onSelectedTab(1)} transparent style={[styles.tabItem, (this.state.selectedTab == 1) && styles.tabActiveItem]}>
                                    <Text style={[styles.tabItemText, (this.state.selectedTab == 1) && styles.tabItemActiveText]}>
                                        PACKAGES
                                    </Text>
                                </Button>
                            </Col>
                            <Col style={styles.tabItemContainer}>
                                <Button onPress={() => this.onSelectedTab(2)} transparent style={[styles.tabItem, (this.state.selectedTab == 2) && styles.tabActiveItem]}>
                                    <Text style={[styles.tabItemText, (this.state.selectedTab == 2) && styles.tabItemActiveText]}>
                                        WHAT'S NEW
                                    </Text>
                                </Button>
                            </Col>
                        </Grid>
                    </Body>
                </Header>
                <Content style={styles.content}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}
                        />
                    }>
                    <List>
                        {this.props.feedlist && this.props.feedlist[0] != undefined ? this.props.feedlist.map((feed, index) => {
                            return (
                                <ListItem style={styles.listItem} onPress={() => this.onDetail(feed)} key={index}>
                                    <Body>
                                        <Thumbnail square source={{uri: API.SERVER + feed.image}} style={styles.itemImage}>
                                            <View style={styles.discountContainer}>
                                                <Text style={styles.discountPercent}>{feed.discount_percentage}%</Text>
                                                <Text style={styles.discountText}>OFF</Text>
                                            </View>
                                            <Button transparent style={styles.saveBtn} onPress={() => this.onSave(index)}>
                                                {feed.isSaved == null?
                                                <Thumbnail  style={styles.saveBtnIcon} square source={require('../../assets/ic_favorite.png')}/>:
                                                <Thumbnail  style={styles.saveBtnIcon} square source={require('../../assets/ic_favorite_active.png')}/>
                                                }
                                            </Button>
                                        </Thumbnail>
                                        <View style={styles.itemPriceContainer}>
                                            <Text style={styles.itemPriceText1}>{feed.heading}</Text>
                                            <Text style={styles.itemPriceText1}>
                                                <Text style={styles.itemPriceText2}>${feed.original_cost.toFixed(2)}</Text>   ${feed.discounted_cost.toFixed(2)}
                                            </Text>
                                        </View>
                                        <Text style={styles.itemTimeText}>{this.showEstimate(feed.expired_date)}</Text>
                                    </Body>
                                </ListItem>
                            );
                        })
                        :
                        null
                      }
                    </List>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    token: state.user.token,
    feedlist: state.feed.list
})

export default connect(mapStateToProps)(HomeScreen);
