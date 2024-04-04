import {LanguageModel} from "../models/language.model";

export const supportedLanguages: LanguageModel[] = [
  {name: 'Deutsch', label: 'DE', alpha2Code: 'de'},
  {name: 'Italiano', label: 'IT', alpha2Code: 'it'},
  {name: 'Français', label: 'FR', alpha2Code: 'fr'},
  {name: 'English', label: 'EN', alpha2Code: 'en'}
];

export const DEFAULT_LANGUAGE: 'de' = 'de';
