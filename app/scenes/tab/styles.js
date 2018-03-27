import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    footer: {
        height: 56,
        backgroundColor: 'white'
    },

    tabItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    tabItemContainer: {
        width: width / 5
    },

    tabItemBtn: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        width: width / 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 56
    },

    tabItemBtnContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    tabBtnHomeIcon: {
        width: 24,
        height: 24
    },

    tabBtnSavedIcon: {
        width: 24,
        height: 21
    },

    tabBtnReservationIcon: {
        width: 24,
        height: 24
    },

    tabBtnProfileIcon: {
        width: 24,
        height: 24
    },

    tabBtnSettingIcon: {
        width: 24,
        height: 24
    },

    tabItemBtnText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        letterSpacing: 0.17,
        color: '#e636a6',
        marginTop: 5
    }

}