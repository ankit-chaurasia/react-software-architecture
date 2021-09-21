import React, { useState, lazy, Suspense } from 'react';
import ErrorBoundry from './ErrorBoundry';
// import { One } from './One';
// import { Two } from './Two';
// import { Three } from './Three';

const One = lazy(() => import('./One'));
const Two = lazy(() => import('./Two'));
const Three = lazy(() => import('./Three'));

export const About = () => {
  const [showComponents, setShowComponents] = useState(false);
  return (
    <>
      <h1>About</h1>
      {showComponents && (
        <ErrorBoundry>
          <Suspense fallback={<p>Loading components...</p>}>
            <One />
            <Two />
            <Three />
          </Suspense>
        </ErrorBoundry>
      )}
      <button onClick={() => setShowComponents(true)}>Show Components</button>
    </>
  );
};

export default About;
