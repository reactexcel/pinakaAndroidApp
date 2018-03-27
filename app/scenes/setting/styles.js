import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    header: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        elevation: 0
    },

    title: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: 'white',
        lineHeight: 28,
        marginLeft: 16
    },

    content: {
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 4
    },

    listItem: {
        marginLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)',
        height: 56,
        paddingRight: 0
    },

    listItemText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: '#000',
        marginLeft: 0,
        paddingLeft: 0
    },

    currencyText: {
        fontSize: 16,
        color: 'rgb(230,54,166)',
        fontFamily: 'Roboto',
        fontWeight: 'light'
    }
}