import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryGreen: '#00BD9D',

  $white: '#FFFFFF',
});

export default () => <Home />;
