import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    header: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 0,
        elevation: 0
    },

    title: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 20,
        color: 'white',
        marginLeft: 16
    },

    headerIcon: {
        color: 'white'
    },

    content: {
        backgroundColor: 'white',
        paddingTop: 20,
        paddingLeft: 0,
        paddingRight: 0
    },

    image: {
        marginTop: 32,
        width: 88,
        height: 88,
        borderRadius: 44
    },

    basicText: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: 'black',
        marginTop: 12
    },

    locationText: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: '#e636a6',
        marginTop: 8
    },

    interestText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16
    },

    interestText1: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black',
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16
    },

    verifyText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16
    },

    listItemText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black',
        marginLeft: 0
    },

    divider: {
        height: 1,
        backgroundColor: 'rgb(221,221,225)',
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16
    },

    listItem: {
        marginLeft: 16,
        marginRight: 16
    }
}