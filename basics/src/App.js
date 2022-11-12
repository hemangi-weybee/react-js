import './App.css';

// import { Greet } from './components/Greet'; //named export is imported
// import Greeting from './components/Greet';
// import Hello from './components/Hello';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import UserGreeting from './components/UserGreeting';
// import FunctionClick from './components/FunctionClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import Lists from './components/Lists';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyle.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form';
// import FragmentDemo from './components/FragmentDemo';
// import LifeCycleA from './components/LifeCycleA';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import ForwardRefParentInput from './components/ForwardRefParentInput';
// import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import User from './components/User';
// import CounterRenderProp from './components/CounterRenderProp';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2';
// import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/userContext';


function App() {
  return (
    <div className="App">

      {/* <UserProvider value={'Elena'}>
        <ComponentC />
      </UserProvider>

      <ComponentC /> */}


      {/* <User render={(isLoggedIn) => isLoggedIn ? 'Elena' : 'Guest'} />

      <CounterRenderProp>
        {(count, incrementCount) =>
          <ClickCounter2 count={count} incrementCount={incrementCount} />}
      </CounterRenderProp>

      <CounterRenderProp>
        {(count, incrementCount) =>
          <HoverCounter2 count={count} incrementCount={incrementCount} />}
      </CounterRenderProp> */}

      {/* <HoverCounter2 />
          <ClickCounter2 />
          <User name={() => "Elena" }/> */}

      {/* <ClickCounter name='Damon' />
      <HoverCounter /> */}

      <ErrorBoundry>
        <Hero heroName={'Damon'} />
      </ErrorBoundry>

      <ErrorBoundry>
        <Hero heroName={'Elena'} />
      </ErrorBoundry>

      <ErrorBoundry>
        <Hero heroName={'Joker'} />
      </ErrorBoundry>

      {/* <PortalDemo /> */}
      {/* <ForwardRefParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp/> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline />  */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Lists /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <Greeting name='Stefan'> <p>Nice to meet you</p></Greeting> */}
      {/* <Message/> */}
      {/* <Hello name='Brother' from="Damon"/>  */}
      {/* <Welcome name='Ian' role='Damon'/>  */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <EventBind /> */}

    </div>
  );
}

export default App;