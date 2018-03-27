import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height,
        zIndex: 100,
        paddingTop: 75,
        paddingLeft: 40,
        paddingRight: 40
    },

    btnstyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: 'blue',
      marginLeft: 8
    },

    mainContaier: {
        width: width - 80,
        backgroundColor: '#fafafa',
        borderRadius: 2,
        paddingLeft: 24,
        paddingRight: 24
    },

    title: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        fontSize: 20,
        color: 'black',
        marginTop: 21,
        textAlign: 'center'
    },

    list: {
        borderBottomWidth: 0
    },

    item: {
        paddingLeft: 0,
        paddingTop: 10,
        paddingRight: 0,
        paddingBottom: 10,
        marginLeft: 0,
        justifyContent: 'space-between',
        borderBottomWidth: 0
    },

    itemText: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        fontSize: 16,
        color: 'black'
    },

    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: -15
    },

    btnText: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
        letterSpacing: 0.5,
        color: '#3f6ff6',
        fontSize: 14
    }
}
