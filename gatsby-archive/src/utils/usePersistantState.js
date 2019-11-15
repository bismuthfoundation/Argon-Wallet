import React from 'react';

// patch for build
const localStorage =
  typeof window !== 'undefined' ? window.localStorage : { getItem: () => {}, setItem: () => {} };

const usePersistantState = initialState => {
  const [state, setState] = React.useState(
    localStorage.getItem('address') ? JSON.parse(localStorage.getItem('address')) : initialState
  );
  React.useEffect(() => {
    localStorage.setItem('address', JSON.stringify(state));
  }, [state]);

  // React.useEffect(() => {
  //   setState(JSON.parse(localStorage.getItem('address')));
  // }, []);

  return [state, setState];
};

export default usePersistantState;
