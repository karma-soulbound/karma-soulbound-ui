import { browser } from '$app/env';
import { derived, writable } from 'svelte/store';

const storage = browser ? JSON.parse(window.localStorage['soulbound-options'] || '{}') || {} : {};
export const apiData = writable([]);

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

export const karmaLists = derived(apiData, ($apiData) => {
  // if ($apiData.drinks){
  //   return $apiData.drinks.map(drink => drink.strDrink);
  // }
  if ($apiData.length !== 0) {
    return apiData;
  }
  return [];
});
