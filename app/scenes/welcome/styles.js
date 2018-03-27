import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants';


export default {
    container: {
        backgroundColor: Colors.main
    },

    mainContainer: {
        alignItems: 'center',
        width: width
    },

    logo: {
        marginTop: 120,
        padding: 10,
        width: 290,
        height: 60
    },

    logoText: {
        fontFamily: 'SharpSansNo1-Medium',
        fontSize: 54,
        color: 'white',
        marginTop: 4
    },

    bottomContainer: {
        position: 'absolute',
        bottom: 32,
        left: 16,
        right: 16,
        width: (width - 32),
        zIndex: 5
    },

    bottomText1: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 24,
        textAlign: 'center'
    },

    bottomText2: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 9
    },

    bottomBtnContainer: {
        height: 48,
        marginTop: 32   ,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    signupBtn: {
        backgroundColor: '#3f6ff6',
        borderRadius: 100,
        height: 48,
        width: (width - 48)/2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },

    signupBtnText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18
    },

    loginBtn: {
        backgroundColor: '#e636a6',
        borderRadius: 100,
        height: 48,
        width: (width - 48)/2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },

    loginBtnText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18
    }
}
