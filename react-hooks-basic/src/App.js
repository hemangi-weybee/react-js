import './App.css';
// import CustomUserForm from './component/CustomUserForm';

// import CustomCounter from './component/CustomCounter';
// import CustomCounter2 from './component/CustomCounter2';
// import CustomHookTitle2 from './component/CustomHookTitle2';
// import CustomHookTitle from './component/CustomHookTitle';

/*useRef*/
// import TimerUseRef from './component/TimerUseRef';
// import FocusInputUseRef from './component/FocusInputUseRef';

/*useMemo*/
// import MemoCounter from './component/MemoCounter';

/*useCallback*/
// import UseCallBackParent from './component/UseCallBackParent';

/*useReducer*/
// import DataFetchingReducer from './component/DataFetchingReducer';
// import ReducerWithContext from './component/ReducerWithContext';
// import MultiCounterReducer from './component/MultiCounterReducer';
// import CountReducerObject from './component/CountReducerObject';
// import CounterReducer from './component/CounterReducer';

/*useContext*/
// import React from 'react';
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
// import ComponentC from './component/ComponentC';

/*useEffect*/
// import DataFetchingUseEffect from './component/DataFetchingUseEffect';
import IntervalUseEffect from './component/IntervalUseEffect';
// import MouseContainer from './component/MouseContainer';
// import MouseUseEffect from './component/MouseUseEffect';
// import TitleUseEffect from './component/TitleUseEffect';

/*useState*/
// import ArrayUseState from './component/ArrayUseState';
// import ObjectUseState from './component/ObjectUseState';
// import PrevStateCounter from './component/PrevStateCounter';
// import CounterState from './component/CounterState';

function App() {

  return (
    <div className='App'>

      {/* <CustomUserForm /> */}
      {/* <CustomCounter />
      <CustomCounter2 /> */}
      {/* <CustomHookTitle />
      <CustomHookTitle2 /> */}

      {/* useRef */}
      {/* <TimerUseRef /> */}
      {/* <FocusInputUseRef/> */}

      {/* useMemo */}
      {/* <MemoCounter/> */}

      {/* useCallback */}
      {/* <UseCallBackParent /> */}

      {/* useReducer */}
      {/* <DataFetchingReducer/> */}
      {/* <ReducerWithContext/> */}
      {/* <MultiCounterReducer /> */}
      {/* <CountReducerObject/> */}
      {/* <CounterReducer/> */}

      {/* useContext */}
      {/* <UserContext.Provider value={'Damon'}>
        <ChannelContext.Provider value={'VampireDiaries'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* useEffect */}
      {/* <DataFetchingUseEffect /> */}
      <IntervalUseEffect />
      {/* <MouseContainer /> */}
      {/* <MouseUseEffect /> */}
      {/* <TitleUseEffect /> */}

      {/* useState */}
      {/* <ArrayUseState/> */}
      {/* <ObjectUseState/> */}
      {/* <PrevStateCounter/> */}
      {/* <CounterState/> */}

    </div >
  );
}

export default App;