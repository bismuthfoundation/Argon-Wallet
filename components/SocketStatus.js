import React from 'react';

export const states = {
  CONNECTED: {
    color: 'green',
    message: 'Connected',
  },
  CONNECTING: {
    color: 'yellow',
    message: 'Connecting...',
  },
  OFFLINE: {
    color: 'gray',
    message: 'Offline',
  },
};

const SocketStatus = ({ state = states.OFFLINE }) => {
  return (
    <div className="flex items-center">
      <div className={`bg-${state.color}-500 w-2 h-2 mr-2 rounded-lg`} />
      <span className="text-xs text-gray-400">{state.message}</span>
    </div>
  );
};

export default SocketStatus;
