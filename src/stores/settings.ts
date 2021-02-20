import { createPersistentStore } from './persistent';

export interface GameSettings {
  autoCommit: 'lazy' | 'strict' | 'disabled';
  theme: 'light' | 'dark' | 'same-as-system';
  showErrorMarker: boolean;
  showProgressBar: boolean;
  volume: number;
  retryIncorrectAnswers: boolean;
}

export const settings = createPersistentStore<GameSettings>(
  {
    key: 'game-settings',
    assign: true
  },
  {
    autoCommit: 'disabled',
    theme: 'same-as-system',
    showErrorMarker: true,
    showProgressBar: true,
    volume: 50,
    retryIncorrectAnswers: true,
  }
);
