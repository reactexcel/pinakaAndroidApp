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

    content: {
        backgroundColor: 'white',
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16
    },

    basicContainer: {
        paddingRight: 35
    },

    imageContainer: {
        width: 114
    },

    image: {
        width: 114,
        height: 114
    },

    nameText: {
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: 'black'
    },

    locationText: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: '#9b9ba8',
        marginTop: 8
    },

    phoneText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fpntSize: 14,
        color: '#e636a6',
        marginTop: 8
    },

    datetimeText: {
        marginTop: 17,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },

    dateText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black',
        marginTop: 12
    },

    timeText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#e636a6',
        marginTop: 8
    },

    list: {
        marginTop: 24,
        borderTopWidth: 1,
        borderTopColor: 'rgb(221,221,225)'
    },

    listItem: {
        marginLeft: 0,
        marginRight: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)',
        paddingRight: 0,
        paddingTop: 12,
        paddingBottom: 12
    },

    listItemText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: 'black',
        marginLeft: 0
    },

    right: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    countTextContainer: {
        width: 32,
        height: 32,
        backgroundColor: 'rgb(63,111,246)',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },

    countText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: 'white'
    },

    listItemIcon: {
        color: 'rgb(155,155, 168)',
        marginLeft: 0,
        marginRight: 0
    },

    paymentIcon: {
        width: 32,
        height: 22,
        mrginRight: 16
    },

    paymentListItemBody: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    checkIcon: {
        color: 'rgb(63,111,246)',
        fontSize: 35,
        lineHeight: 34
    },

    paymentText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black'
    },

    addPaymentIcon: {
        color: '#e636a6',
        fontSize: 25
    },

    addPaymentText: {
        color: '#e636a6',
        fontSize: 17,
        fontFamily: 'Roboto',
        fontWeight: 'normal'
    },

    footer: {
        height: 80,
        backgroundColor: 'white',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        shadowOffset: {x: 0, y: -1},
        shadowColor: 'black',
        shadowRadius: 4,
        shadowOpacity: 0.14,
        justifyContent: 'space-between'
    },

    payBtn: {
        width: 156,
        height: 48,
        backgroundColor: '#e636a6',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    payBtnDisable: {
        width: 156,
        height: 48,
        backgroundColor: 'grey',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    payBtnText: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: 'white'
    },

    footerPriceText: {
        fontSize: 22,
        color: 'black',
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },

    footerLineText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: 'black',
        marginTop: 4
    }
}