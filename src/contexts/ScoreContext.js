import { createContext, useState } from 'react';

export const ScoreContext = createContext();

export function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);
  const [scoring, setScoring] = useState(false);

  return (
    <ScoreContext.Provider value={{ score, setScore, scoring, setScoring }}>
      {children}
    </ScoreContext.Provider>
  );
}
