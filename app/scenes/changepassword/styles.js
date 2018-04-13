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
        height: 2,
        width: width,
        backgroundColor: '#0b1448'
    },

    progress: {
        backgroundColor: '#3ddcd1',
        height: 2
    },

    text: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
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
        marginBottom: 10,
        position: 'relative'
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

    nextBtn: {
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
        marginTop: 32,
        marginBottom: 10
    },

    nextBtnText: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 18,
        color: 'white'
    },

    text1: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 14,
        color: 'white',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
        textAlign: 'center'
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
