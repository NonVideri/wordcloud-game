import { useState } from 'react';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  // 0: login screen; 1: game screen; 2: score screen
  const [screen, setScreen] = useState(0);
  const [username, setUsername] = useState(null);

  return (
    <>
      <LoginScreen setScreen={setScreen} setUsername={setUsername} />
    </>
  );
}
