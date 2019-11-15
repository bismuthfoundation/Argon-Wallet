import React from 'react';

/**
 * As NextJS is rendered on the server first, we won't have browser API there
 * So localStorage is patched here.
 * Once it gets to the browser, we have `window` object.
 */
const localStorage =
  typeof window !== 'undefined' ? window.localStorage : { getItem: () => {}, setItem: () => {} };

const usePersistantState = (key, initialState) => {
  const [state, setState] = React.useState(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialState
  );

  // Whenever state changes, update it in the localStorage
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default usePersistantState;
