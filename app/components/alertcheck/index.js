import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ListItem,
    Body,
    CheckBox,
    Right,
    List,
    Button
} from 'native-base';
import {ScrollView} from 'react-native';
import styles from './styles';

class AlertCheck extends Component{

    constructor(props){
        super(props);

        this.state  = {
            interests: []
        };

        for(var i = 0; i < this.props.list.length; i++){
            this.state.interests.push(false);
        }
    }

    onPress(index){
        this.state.interests[index] = !this.state.interests[index];
        this.setState({
            interests: this.state.interests
        });
    }

    onDone(){
        var ret = '';
        for(var i = 0; i < this.state.interests.length; i++){
            if(this.state.interests[i] == true){
                ret +=this.props.list[i]._id+",1:";
            }
        }

        if(ret != ''){
            ret  = ret.substring(0,ret.length -1);
        }

        this.props.onDone(ret);
    }

    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.mainContaier}>
                    <Text style={styles.title}>Select your interests!</Text>
                    <List style={styles.list}>
                        {this.props.list.map((item, index) => {
                            return (
                                <ListItem style={styles.item}>
                                    <Text style={styles.itemText}>{item.name}</Text>
                                    <CheckBox checked={this.state.interests[index]} onPress={() => this.onPress(index)}/>
                                </ListItem>
                            );
                        })}
                    </List>
                    <View style={styles.bottomContainer}>
                        <Button transparent style={styles.btnstyle} onPress={this.props.onCancel}>
                            <Text style={styles.btnText}>DECLINE</Text>
                        </Button>
                        <Button transparent style={styles.btnstyle} onPress={ () => this.onDone()}>
                            <Text style={styles.btnText}>ACCEPT</Text>
                        </Button>
                    </View>
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default connect()(AlertCheck);
