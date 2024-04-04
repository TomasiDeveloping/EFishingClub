import { Component } from '@angular/core';
import {DEFAULT_LANGUAGE, supportedLanguages} from "../../constants/supportedLanguages.const";
import {LanguageModel} from "../../models/language.model";
import {LANGUAGE} from "../../constants/localStorage.const";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {

  public supportedLanguages: LanguageModel[] = supportedLanguages;
  public selectedLanguage: LanguageModel = this.supportedLanguages[0];

  constructor(private readonly _translateService: TranslateService) {
    this._translateService.addLangs(supportedLanguages.map((language: LanguageModel) => language.alpha2Code));
    this._translateService.setDefaultLang(DEFAULT_LANGUAGE);

    const userPreferredLanguage: string | null = localStorage.getItem(LANGUAGE);

    if (userPreferredLanguage) {
      this._translateService.use(userPreferredLanguage);
      const language = supportedLanguages.find((language) => language.alpha2Code === userPreferredLanguage);
      this.onLanguageChange(language!);
    } else {
      const browserLanguage: string | undefined = _translateService.getBrowserLang();
      if (browserLanguage) {
        const isSupportedLanguage: boolean = this.supportedLanguages.some((language) => language.alpha2Code === browserLanguage);
        if (isSupportedLanguage) {
          localStorage.setItem(LANGUAGE, browserLanguage);
          this._translateService.use(browserLanguage);
        } else {
          localStorage.setItem(LANGUAGE, DEFAULT_LANGUAGE);
        }
      }
    }
  }

  onLanguageChange(language: LanguageModel): void  {
    this.selectedLanguage = language;
    this._translateService.use(language.alpha2Code);
    localStorage.setItem(LANGUAGE, language.alpha2Code);
  }
}
