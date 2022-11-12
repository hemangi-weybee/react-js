import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './container/CakeContainer';
import HooksCakeContainer from './container/HooksCakeContainer';
import IcecreamContainer from './container/IcecreamContainer';
import ItemContainer from './container/ItemContainer';
import NewCakeContainer from './container/NewCakeContainer';
import UserContainer from './container/UserContainer';

function App() {

  return (
    <Provider store={store}>
      <div className='App'>
        <UserContainer/>

        <ItemContainer cake/>
        <ItemContainer icecream/>
        <NewCakeContainer/>
        <IcecreamContainer/>
        <CakeContainer />
        <HooksCakeContainer/>


      </div>
    </Provider>
  );
}

export default App;
