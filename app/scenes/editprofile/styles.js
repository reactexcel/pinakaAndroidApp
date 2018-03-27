import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor:  Colors.main
    },

    header: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 0,
        elevation: 0
    },

    headerIcon: {
        color: 'white'
    },

    content: {
        backgroundColor: 'white'
    },

    headerLeftBtn: {
        marginLeft: 5
    },

    headerRightBtn: {
        marginRight: 0
    },

    image: {
        width: width,
        height: 200
    },

    basicTitle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: 'black',
        marginTop: 32,
        fontSize: 16,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16
    },

    form: {
        marginLeft: 16,
        marginRight: 16
    },

    formItem: {
        marginLeft: 0,
        marginBottom: 16
    },

    formItemLabel: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        color: '#9b9ba8',
        top: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0
    },

    formItemInput: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black',
        height: 48
    },

    birthContainer: {
        paddingRight: 8
    },

    zipContainer: {
        paddingLeft: 8
    },

    birthText: {
        height: 48,
        marginLeft: 0,
        width: ( width - 48 ) / 2,
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
        color: 'black'
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

    checkContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    checkItemContainer: {
        width: width / 2
    },

    checkItem: {
        paddingRight: 0,
        borderBottomWidth: 0
    },

    checkItemText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 14,
        color: 'black'
    }
}