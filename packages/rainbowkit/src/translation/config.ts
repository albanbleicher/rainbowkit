import enUS_translation from './en-US.json';
import frFR_translation from './fr-FR.json';
export function getConfig(lang: string | undefined) {
  return {
    debug: true,
    lng: lang ? lang : 'en-US',
    resources: {
      en: {
        translation: enUS_translation,
      },
      fr: {
        translation: frFR_translation,
      },
    },
  };
}
