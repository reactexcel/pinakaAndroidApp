import React, { Component } from 'react';
import {
    View,
    Text,
    Icon,
    Button
} from 'native-base';
import styles from './styles';

class EDialog extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text1}>ERROR</Text>
                <Text style={styles.text2}>{this.props.errorText}</Text>
                <Button transparent style={styles.closeBtn} onPress={this.props.onClose}>
                    <Icon name="close" style={styles.closeIcon}/>
                </Button>
            </View>
        );
    }
}

export default EDialog;