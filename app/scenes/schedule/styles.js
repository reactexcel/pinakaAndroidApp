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

    headerBtnText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'normal'
    },

    title: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 20,
        lineHeight: 28
    },

    calendar: {
        marginTop: 0,
        height: 140,
        elevation: 3
    },

    calendarItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: (width/7)
    },

    dayText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: '#fff',
        marginBottom: 8,
        textAlign: 'center'
    },

    dateContainer: {
        width: 42,
        height: 42,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },

    dateActiveContainer: {
        backgroundColor: 'rgb(230,54,166)',
        borderRadius: 21
    },

    dateText: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'light',
        color: '#fff',
        lineHeight: 14,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    fullDateText: {
        fontSize: 17,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        marginTop: 16,
        marginBottom: 16,
        textAlign: 'center',
        color: '#fff'
    },

    content: {
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 0
    },

    list: {
        borderTopWidth: 1,
        borderTopColor: 'rgb(221,221,225)'
    },

    listItem: {
        marginLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)',
        paddingTop: 23,
        paddingBottom: 23
    },

    listItemText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: 'black'
    },

    footer: {
        height: 80,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        shadowOffset: { x: 0, y: -1 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        backgroundColor: 'white' 
    },

    bookBtn: {
        height: 48,
        width: width - 48,
        backgroundColor: 'rgb(230, 54, 166)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },

    bookBtnText: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: 'white'
    }
}