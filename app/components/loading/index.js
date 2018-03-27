import React, { Component } from 'react';
import {
    View,
    Spinner
} from 'native-base';
import styles from './styles';
import { connect } from 'react-redux';

class PLoading extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <Spinner color={this.props.color}/>
            </View>
        );
    }
}

export default PLoading;