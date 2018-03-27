import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    mainContainer: {
        width: width,
        height: height,
        alignItems: 'center',
        paddingTop: 192
    },

    logo: {
        width: 142,
        height: 142
    }
}