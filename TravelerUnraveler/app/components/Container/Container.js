import PropTypes from 'prop-types';
import { View } from 'react-native';

const Container = ({ children }) => (
  <View>
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
