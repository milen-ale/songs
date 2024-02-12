import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import GlobalStyles from './styles/globalStyles';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import SongStatistics from './components/SongStatistics';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div>
        <h1>My Music App</h1>
        <SongForm />
        <SongList />
        <SongStatistics />
        
      </div>
    </Provider>
  );
};

export default App;
