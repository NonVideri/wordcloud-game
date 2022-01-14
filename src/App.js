import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  // 0: login screen; 1: game screen; 2: score screen
  const [screen, setScreen] = useState(0);
  const [username, setUsername] = useState(null);
  const [score, setScore] = useState(0);

  if (screen === 0) return <LoginScreen setScreen={setScreen} setUsername={setUsername} />;
  if (screen === 1) return <GameScreen setScreen={setScreen} setScore={setScore} />;
}
