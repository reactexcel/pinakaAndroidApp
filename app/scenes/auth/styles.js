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

    mainContainer: {
        alignItems: 'center',
        width: width,
        paddingLeft: 24,
        paddingRight: 24,
        zIndex: 5
    },

    logo: {
        marginTop: 20,
        width: 142,
        height: 125
    },

    text: {
        marginTop: 46,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 24
    },

    fbBtn: {
        width: width - 48,
        backgroundColor: '#3f6ff6',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 32
    },

    fbBtnText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18
    },

    fbBtnIcon: {
        width: 10,
        height: 22,
        marginRight: 16
    },

    phoneBtn: {
        width: width - 48,
        backgroundColor: '#e636a6',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 16
    },

    bottomText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white',
        marginTop: 32
    },

    emailBtnText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'medium',
        color: '#fd9847'
    }
}
