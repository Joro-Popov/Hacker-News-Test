import React, {FC} from 'react';
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
