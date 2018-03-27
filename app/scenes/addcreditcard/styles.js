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

    title: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 20,
        lineHeight: 28
    },

    content: {
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 20
    },

    formItem: {
        marginLeft: 0,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)',
        position: 'relative'
    },

    formItemLabel: {
        paddingTop: 0,
        marginBottom: 8,
        fontSize: 12,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: 'black'
    },

    cardformInput: {
        height: 48,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#9d9ba8',
        width: (width - 32 - 40 - 25)
    },

    otherformInput: {
        height: 48,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#9d9ba8',
        width: (width - 32 - 18)/ 2
    },

    cardContainer: {
        height: 48
    },

    cardIconContainer: {
        width: 40,
        height: 48,
        justifyContent: 'center'
    },

    cardIcon: {
        marginBottom: 0,
        marginTop: 5,
        color: '#9d9ba8'
    },

    scanIconContainer: {
        width: 25,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },

    scanIcon: {
        fontSize: 22,
        color: '#9d9ba8',
        marginTop: 10,
        paddingRight: 0
    },

    expireDateContainer: {
        paddingRight: 9
    },

    cvvContainer: {
        paddingLeft: 9
    },

    countryText: {
        marginTop: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        color: 'black'
    },

    countryText1: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black'
    },

    countryIcon: {
        width: 24,
        height: 24
    },

    listItem: {
        marginLeft: 0,
        paddingLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)'
    },

    listItemBody: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    formLabel: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        color: 'black'
    },

    saveBtn: {
        marginTop: 32,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 32,
        height: 57,
        width: (width - 94),
        backgroundColor: 'rgb(230,54,166)',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    saveBtnText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 'medium'
    }
}