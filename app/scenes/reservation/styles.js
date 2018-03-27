import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    header: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 0,
        elevation: 0
    },

    title: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 20,
        color: 'white',
        marginLeft: 16
    },

    content: {
        marginTop: 0,
        backgroundColor: 'white',
        paddingLeft: 0,
        paddingRight: 0
    },

    tabContainer: {
        height: 48,
        backgroundColor: Colors.main
    },

    tabItemBtn: {
        height: 48,
        borderRadius: 0,
        borderBottomWidth: 4,
        borderBottomColor: Colors.main
    },

    tabItemActiveBtn: {
        borderBottomWidth: 4,
        borderBottomColor: 'rgb(230, 54, 166)'
    },

    tabItemActiveBtnText: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 14,
        color: 'white'
    },

    tabItemBtnText: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: 'rgba(255,255,255,0.65)'
    },

    listItem: {
        marginLeft: 16,
        marginRight: 16,
        paddingRight: 0,
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)'
    },

    image: {
        width: 64,
        height: 64
    },

    itemTitle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },

    itemDateText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black'
    },

    itemTimeText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#e636a6'
    },

    itemRightIcon: {
        fontSize: 30
    },

    itemLocationText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#9b9ba8',
        marginTop: 8
    },

    itemTime1Text: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 14,
        color: 'black',
        marginTop: 8
    },

    itemAmountText: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: '#dd1395',
        fontSize: 14
    }
}