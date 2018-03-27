import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: '#fff',
    },

    header: {
        backgroundColor: 'transparent',
        elevation: 0
    },

    headerIcon: {
        color: 'black'
    },

    body: {
        paddingTop: 16,
        paddingLeft: 20,
        paddingRight: 20
    },

    image: {
        width: width / 2,
        height: width / 2
    },

    title: {
        fontSize: 22,
        color: 'black',
        marginTop: 12,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 12
    },

    list: {
        width: width - 40
    },

    listItem: {
        marginLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#dddde1'
    },

    listItemBody: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    listItemIcon: {
        fontSize: 30,
        marginRight: 16
    },

    listItemText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: 'black'
    }
}