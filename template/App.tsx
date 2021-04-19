import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';

import StoriesContainer from './containers/StoriesContainer';

const App: FC = () => {
  return (
    <Provider store={store}>
      <StoriesContainer />
    </Provider>
  );
};

export default App;
