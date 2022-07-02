import { browser } from '$app/env';
import { writable } from 'svelte/store';

const storage = browser ? JSON.parse(window.localStorage['soulbound-options'] || '{}') || {} : {};

function storeSettings() {
  if (browser) {
    window.localStorage['soulbound-options'] = JSON.stringify(storage);
  }
}

export const darkTheme = writable(storage.darkTheme ?? false);

darkTheme.subscribe((value) => {
  storage.darkTheme = value;
  storeSettings();
});
