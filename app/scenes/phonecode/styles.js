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

    text: {
        marginTop: 20,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },

    inputContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputItemContainer: {
        width: 40,
        height: 48
    },

    input: {
        width: 40,
        height: 48,
        backgroundColor: '#0b1448',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'light',
        fontSize: 28
    },

    resendBtnText: {
        marginTop: 32,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#ffa958',
        textAlign: 'center'
    },

    descText: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    },

    linkText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        color: '#fd9847',
        textAlign: 'center'
    },

    sendBtn: {
        marginLeft: 24,
        marginRight: 24,
        width: width -  48,
        height: 48,
        backgroundColor: '#e636a6',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        marginTop: 32
    },

    sendBtnText: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18,
        color: 'white'
    },

    sendNewCodeBtnText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#ffa958',
        
    },
    sendNewCodeBtn: {
        marginLeft: 100,
        marginRight: 100,
        width: width -  200,
        height: 35,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
    },

}