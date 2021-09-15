import React from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
// import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
// import { Home } from './pages/Home';
// import { About } from './pages/About';
// import { Articles } from './pages/Articles';
import CounterButton from './CounterButton';
// import { CounterProvider } from './pages/CounterProvider';
// import { DisplayCount } from './DisplayCount';
// import { Provider } from 'react-redux';
// import { store } from './store';
import { Counter } from './Counter';
const counter = new Counter();

const BigGreenHeading = styled.h1`
  color: green;
  font-size: 96px;
`;

const App = () => {
  return (
    // <CounterProvider>
    //   <BigGreenHeading>Server-Side Rendering Example</BigGreenHeading>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/articles">Articles</Link>
    //     </li>
    //     <li>
    //       <Link to="/counterButton">Counter Button</Link>
    //     </li>
    //   </ul>
    //   <Switch>
    //     <Route path="/" exact>
    //       <Home />
    //     </Route>
    //     <Route path="/about">
    //       <About />
    //     </Route>
    //     <Route path="/articles">
    //       <Articles />
    //     </Route>
    //     <Route path="/counterButton">
    //       <CounterButton />
    //     </Route>
    //   </Switch>
    // </CounterProvider>
    // <RecoilRoot>
    //   <DisplayCount />
    //   <h1>State Management Example</h1>
    //   <CounterButton />
    //   <CounterButton />
    // </RecoilRoot>
    // <Provider store={store}>
    //   <h1>State Management Example</h1>
    //   <CounterButton />
    // </Provider>
    <>
      <h1>State Management Example</h1>
      <CounterButton counter={counter} />
    </>
  );
};

export default App;
