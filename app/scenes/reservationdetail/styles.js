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

    headerIcon: {
        color: 'white'
    },

    content: {
        backgroundColor: 'white',
        marginTop: 170,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 20
    },

    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 28,
        color: 'black'
    },

    pinIcon: {
        color: '#9b9ba8',
        fontSize: 20
    },

    locationText: {
        color: '#9b9ba8',
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        marginTop: 8
    },

    dateText: {
        marginTop: 16,
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: 'black'
    },

    timeText: {
        marginTop: 8,
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: '#e636a6',
        marginBottom: 16
    },

    divider: {
        height: 1,
        backgroundColor: 'rgb(221,221,225)'
    },

    qrText: {
        marginTop: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
        marginBottom: 16
    },

    qrContainer: {
        width: 288,
        borderRadius: 19,
        borderWidth: 2,
        borderColor: 'rgb(221,221,225)',
        padding: 28
    },

    qrCodeText: {
        marginTop: 20,
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: '#000',
        textAlign: 'center'
    },

    qrWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24
    },

    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15
    },

    priceText: {
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#000'
    },

    paidMark: {
        width: 94,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: 'rgb(63,111,246)',
        flexDirection: 'row'
    },

    checkIcon: {
        color: '#fff'
    },

    paidText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#fff'
    },

    descText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        marginBottom: 24
    },

    cancelBtn: {
        marginTop: 24,
        marginBottom: 16,
        marginLeft: 27,
        marginRight: 27,
        height: 48,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        elevation: 0
    },

    cancelBtnText: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: '#000'
    }
}