import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main,
    },

    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },

    image: {
        width: width,
        height: 230,
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 0
    },

    discountContainer: {
        position: 'absolute',
        top: (230 - 56)/ 2,
        left: 0,
        width: 70,
        height: 56,
        backgroundColor: 'rgb(230,54,166)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    discountPercent: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: 'white'
    },

    discountText: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: 'white'
    },

    headerIcon: {
        color: 'white'
    },

    saveBtn: {
        position: 'absolute',
        right: 10,
        top: 208,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.24,
        shadowRadius: 2
    },

    saveBtnIcon: {
        width: 25,
        height: 25
    },

    shareBtn: {
        position: 'absolute',
        right: 74,
        top: 208,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.24,
        shadowRadius: 2
    },

    shareBtnIcon: {
        width: 24,
        height: 27
    },

    content: {
        backgroundColor: 'white',
        marginTop: 170,
        paddingLeft: 0,
        paddingRight: 0
    },

    headingText: {
        marginTop: 42,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 28,
        color: 'black',
        marginLeft: 16,
        marginRight: 16
    },

    timeText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#e636a6',
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16
    },

    list: {
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16,
        borderTopWidth: 1,
        borderTopColor: 'rgb(221,221,225)'
    },

    listItem: {
        marginLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,255)',
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0
    },

    priceText1: {
        fontSize: 28,
        fontFamily: 'Roboto',
        fontWeight: 'light',
        color: '#9d9da8',
        textDecorationLine: 'line-through',
        marginTop: 12,
        marginBottom: 12
    },

    priceText2: {
        fontSize: 28,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: 'black',
        marginTop: 12,
        marginBottom: 12
    },

    aboutTitle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginTop: 16,
        marginLeft: 0,
        marginRight: 0
    },

    aboutDesc: {
        fontWeight: 'normal',
        fontFamily: 'Roboto',
        fontSize: 16,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 16,
        marginBottom: 16
    },

    btnText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black',
        paddingTop: 19,
        paddingBottom: 18,
        paddingLeft: 0,
        marginLeft: 0
    },

    locationText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#e636a6',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 32,
        paddingBottom: 12,
        marginLeft: 0
    },

    pinIcon: {
        color: '#e636a6',
        fontSize: 20
    },

    footer: {
        height: 80,
        backgroundColor: 'white',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        shadowColor: 'black',
        shadowOffset: {x: 0, y: -1},
        shadowOpacity: 0.14,
        shadowRadius: 4
    },

    bookBtn: {
        height: 48,
        borderRadius: 100,
        backgroundColor: '#e636a6',
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 32
    },

    bookBtnText: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18,
        color: 'white'
    },

    mapview: {
        width: width,
        height: 250,
        marginBottom: 0
    }
}
