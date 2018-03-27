import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    header: {
        backgroundColor: 'transparent',
        elevation: 0
    },

    headerIcon: {
        color: 'white'
    },

    title: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 20,
        lineHeight: 28
    },

    headerLeft: {
        flex: 0.2
    },

    content: {
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16
    },

    text: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginTop: 20,
        marginBottom: 20
    },

    listItem: {
        marginLeft: 0,
        marginRight: 0,
        paddingRight: 0
    },

    listIcon: {
        width: 32,
        height: 22
    },

    listText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black'
    },

    listIcon1: {
        fontSize: 20,
        color: '#cdcdd4'
    },

    listItemBody: {
        flexDirection: 'row'
    },

    addIcon: {
        fontSize: 20,
        color: '#e636a6'
    },

    addText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: '#e636a6'
    }
}