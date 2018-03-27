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
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        marginTop: 20
    },

    formContainer: {
        marginTop: 35,
        marginLeft: 16,
        marginRight: 16
    },

    formItem: {
        marginLeft: 0,
        marginTop: 17,
        position: 'relative'
    },

    formItemLabel: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        color: 'white',
        paddingTop: 0,
        paddingRight: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        top: 0,
        opacity: 0.65
    },

    formInput: {
        height: 45,
        paddingRight: 0,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'white'
    },

    forgotText: {
        position: 'absolute',
        right: 0,
        top: 0,
        fontSize: 14,
        color: '#ffa958',
        paddingTop: 0,
        paddingRight: 0
    },

    loginBtn: {
        marginTop: 32,
        height: 48,
        width: width - 48,
        borderRadius: 100,
        marginLeft: 24,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: '#ffa958',
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginBtnText: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: 'white'
    }
}