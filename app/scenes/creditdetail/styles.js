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

    headerLeft: {
        flex: 0.2
    },

    content: {
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 4
    },

    fieldText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 12,
        color: '#9b9ba8',
        marginTop: 16
    },

    numberContainer: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8
    },

    icon: {
        width: 32,
        height: 22
    },

    numberText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black',
        marginLeft: 16
    },

    divider: {
        height: 1,
        width: width - 32,
        backgroundColor: '#dddde1'
    },

    expiredText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black',
        marginTop: 8,
        marginBottom: 8
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32
    },

    btnWrapper: {
        width: ( width -  48 ) /2
    },


    deleteBtn: {
        width: (width -  48) / 2,
        height: 48,
        borderRadius: 100,
        borderWidth: 0.6,
        borderColor: 'black',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0
    },

    deleteBtnText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 18,
        color: 'black'
    },

    editBtn: {
        width: (width -  48) / 2,
        height: 48,
        borderRadius: 100,
        borderWidth: 0.6,
        borderColor: '#e636a6',
        backgroundColor: '#e636a6',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0
    },

    editBtnText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 18,
        color: 'white'
    }
}