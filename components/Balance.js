import React from 'react';
import usePersistantState from './utils/usePersistantState';
import useWebSocket from './utils/useWebSocket';
import SocketStatus from './SocketStatus';

// TODO: fix env varibles in deployment
const WEBSOCKET_URL = process.env.WEBSOCKET || `wss://hyper.bisafe.net/web-socket/`;

const Balance = () => {
  const [address, setAddress] = usePersistantState('address', '');
  const [balance, setBalance] = React.useState(null);
  const [isValid, setIsValid] = React.useState(false);

  const [websocket, socketState] = useWebSocket(WEBSOCKET_URL, msg => {
    console.log(JSON.parse(msg.data));
    setBalance(JSON.parse(msg.data).balance);
  });

  React.useEffect(() => {
    if (websocket && address && address.match(/[0-9a-f]{56}/)) {
      try {
        websocket.send(`["balancegetjson", "${address}"]`);
      } catch (err) {
        console.log('Error in sending message', err);
      }
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [address, socketState]);

  return (
    <div className="max-w-xl w-full mx-auto rounded overflow-hidden shadow-lg bg-gray-800">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-100 text-xl mb-2">Balance 🤑</h2>
          <SocketStatus state={socketState} />
        </div>
        <div className="mb-4">
          <input
            spellCheck={false}
            className={`${
              isValid
                ? `bg-green-900 border-green-900 focus:border-green-700`
                : `bg-gray-700 border-gray-700 focus:border-gray-500 focus:bg-gray-800 hover:border-gray-500 hover:bg-gray-800`
            } appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none`}
            id="address"
            type="text"
            placeholder="Wallet Address"
            value={address}
            onChange={e => {
              setAddress(e.target.value);
            }}
          />
        </div>
        {balance && <div className="text-3xl text-white font-bold my-4 text-center">{balance}</div>}
      </div>
    </div>
  );
};

export default Balance;
