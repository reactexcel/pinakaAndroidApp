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
        lineHeight: 28,
        textAlign: 'left'
    },

    headerLeft: {
        flex: 0.2
    },

    text: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18,
        color: 'white',
        marginTop: 20,
        textAlign: 'center'
    },

    formContainer: {
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16
    },

    formItemContainer: {
        marginLeft: 0
    },

    formItemLabel: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        color: 'white',
        top: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
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

    sendBtn: {
        marginLeft: 24,
        marginRight: 24,
        width: width -  48,
        height: 48,
        backgroundColor: '#ffa958',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 32
    },

    sendBtnText: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18,
        color: 'white'
    }
}