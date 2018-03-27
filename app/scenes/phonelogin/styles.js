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
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
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
