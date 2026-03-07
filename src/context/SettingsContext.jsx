import React, { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(32);
  const [lastRead, setLastRead] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('lastRead');
    if (saved) setLastRead(JSON.parse(saved));
  }, []);

  const updateLastRead = (data) => {
    setLastRead(data);
    localStorage.setItem('lastRead', JSON.stringify(data));
  };

  return (
    <SettingsContext.Provider value={{ fontSize, setFontSize, lastRead, updateLastRead }}>
      {children}
    </SettingsContext.Provider>
  );
};