import { createContext } from 'react';

export const defaultAppInfo = {
  appName: undefined,
  lang: 'en-US',
  learnMoreUrl: 'https://learn.rainbow.me/what-is-a-cryptoweb3-wallet-actually',
};

export const AppContext =
  createContext<{ appName?: string; lang?: string; learnMoreUrl?: string }>(
    defaultAppInfo
  );
