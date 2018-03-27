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
        elevation: 0
    },

    title: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: 'white',
        lineHeight: 28,
        marginLeft: 16
    },

    content: {
        backgroundColor: 'white',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 4
    },

    listItem: {
        marginLeft: 16,
        borderBottomWidth: 0,
        marginTop: 16,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        marginRight: 16
    },

    image: {
        width: width - 32,
        height: 200,
        position: 'relative'
    },

    itemPriceContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    itemPriceText1: {
        color: 'black',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 22
    },

    itemPriceText2: {
        color: '#9b9ba8',
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        textDecorationLine: 'line-through'
    }, 

    timeText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        color: '#e636a6',
        fontSize: 16,
        marginTop: 8,
        marginLeft: 0
    },

    discountContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 70,
        height: 56,
        backgroundColor: '#e636a6',
        alignItems: 'center',
        justifyContent: 'center'
    },

    discountPercent: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: 'white'
    },

    discountText: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        color: 'white'
    },

    saveBtn: {
        position: 'absolute',
        top: 16,
        right: 16,
        width: 25,
        height: 25,
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0
    },

    saveBtnIcon: {
        width: 25,
        height: 25
    }
}
