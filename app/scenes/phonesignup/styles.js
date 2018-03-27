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

    progressContainer: {
        width: width,
        height: 2,
        backgroundColor: '#0b1448'
    },

    progress: {
        height: 2,
        backgroundColor: '#3ddcd1'
    },

    text: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginTop: 20
    },

    formContainer: {
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16
    },
    formItemContainer: {
        marginLeft: 0,
        position: 'relative'
    },

    formItem: {
        marginLeft: 0
    },

    formItemLabel: {
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        top: 0,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        color: 'white',
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

    text1: {
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    },

    nextBtn: {
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

    nextBtnText: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18,
        color: 'white'
    },

    codeContainer: {
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    codeItemContainer: {
        width: 40,
        height: 48
    },

    codeItemInput: {
        width: 40,
        height: 48,
        fontFamily: 'Roboto',
        fontWeight: 'light',
        fontSize: 28,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#0b1448',
        paddingLeft: 0,
        paddingRight: 0
    },

    sendBtnText: {
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
        marginTop: 32
    },

    descText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        color: 'white',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
        textAlign: 'center'
    },

    linkText: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: '#fd9847',
        fontSize: 12
    },

    gridFormContainer: {
        marginTop: 17
    },

    birthdayContainer: {
        marginRight: 8
    },

    zipcodeContainer: {
        marginLeft: 8
    },

    birthdayText: {
        height: 45,
        width: (width - 48)/2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderWidth: 0
    },

    birthdayWrapper: {
        width: (width - 48)/2,
        height: 45
    },

    additionalContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32
    },

    additionalItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },

    additionalItemText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 14,
        color: 'white'
    },

    additionBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100
    },

    additionalBtn: {
        width: 40,
        height: 40,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },

    additionalBtnIcon: {
        width: 40,
        height: 40
    },

    showText: {
        position: 'absolute',
        top: 0,
        right: 0,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#ffa958'
    }
}
