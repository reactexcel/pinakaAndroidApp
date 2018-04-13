import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    header: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        height: 112
    },

    searchbarContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        width: (width - 16),
        height: 48,
        backgroundColor: 'rgb(40,51,106)',
        flexDirection: 'row',
        borderRadius: 2
    },

    searchIconContainer: {
        height: 50,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    searchIcon: {
        color: '#fff',
        fontSize: 25
    },

    searchInput: {
        height: 48,
        paddingLeft: 0,
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'normal'
    },

    tabContainer: {
        marginTop: 8
    },

    tabItem: {
        width: (width / 3),
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        borderBottomWidth: 4,
        borderBottomColor: Colors.main
    },

    tabActiveItem: {
        borderBottomWidth: 4,
        borderBottomColor: 'rgb(230,54,166)'
    },

    tabItemText: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: 'rgba(255,255,255,0.5)',
        letterSpacing: 0.5
    },

    tabItemActiveText: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: '#fff'
    },

    content: {
        backgroundColor: 'white',
        paddingTop: 4
    },

    listItem: {
        marginLeft: 16,
        borderBottomWidth: 0,
        marginTop: 16,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 16
    },

    itemImage: {
        width: width - 32,
        height: 200,
        position: 'relative'
    },

    discountContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 70,
        height: 56,
        backgroundColor: 'rgb(230,54,166)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    discountPercent: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#fff'
    },

    discountText: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: '#fff'
    },

    saveBtn: {
        position: 'absolute',
        top: 16,
        right: 16,
        width: 30,
        height: 30,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingRight: 0
    },

    saveBtnIcon: {
        width: 25,
        height: 25
    },

    itemPriceContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    itemPriceText1: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 22,
        color: '#000'
    },

    itemPriceText2: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: 'rgb(155,155,168)',
        textDecorationLine: 'line-through',
        paddingRight: 28
    },

    itemTimeText: {
        marginTop: 8,
        marginLeft: 0,
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: 'rgb(230,54,166)'
    }
}
