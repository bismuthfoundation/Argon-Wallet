/**
 * This is a function (hook to be precise) which
 * helps us make a connection to the WS server and
 * returns the websocket and its connection state.
 */

import React from 'react';
import { states as socketStates } from '../SocketStatus';

const TIMEOUT = 250;

const useWebSocket = socketUrl => {
  const [ws, setWs] = React.useState(null);
  const [cStatus, setCStatus] = React.useState(socketStates.OFFLINE);
  const connect = () => {
    const _ws = new WebSocket(socketUrl);
    let connectInterval;
    let timeout = TIMEOUT;

    // websocket onopen event listener
    _ws.onopen = () => {
      console.log('connected websocket');
      setWs(_ws);
      setCStatus(socketStates.CONNECTED);
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    // websocket onclose event listener
    _ws.onclose = e => {
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (timeout + timeout) / 1000
        )} second.`,
        e.reason
      );

      timeout = timeout + timeout; //increment retry interval
      connectInterval = setTimeout(check, Math.min(10000, timeout)); //call check function after timeout
    };

    // websocket onerror event listener
    _ws.onerror = err => {
      console.error('Socket encountered error: ', err.message, 'Closing socket');
      setCStatus(socketStates.OFFLINE);
      _ws.close();
    };
  };

  const check = () => {
    if (!ws || ws.readyState === WebSocket.CLOSED) connect(); //check if websocket instance is closed, if so call `connect` function.
  };

  React.useEffect(() => {
    setCStatus(socketStates.CONNECTING);
    connect();
    return () => {
      if (ws && ws.readyState !== WebSocket.CLOSED) {
        ws.close();
      }
    };
  }, []);

  return [ws, cStatus];
};

export default useWebSocket;
