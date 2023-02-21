import { useState } from 'react';
import { useRouter } from 'next/router';
import { languagesList } from 'utils/common';

export default function useLanguage() {
  const { push, locale, pathname } = useRouter();
  const [language, setLanguage] = useState(languagesList.find((l) => l.acronym === locale).country);

  const selectLanguage = (language, acronim) => {
    setLanguage(language);
    push(pathname, pathname, { locale: acronim });
  };

  return {
    language,
    selectLanguage,
  };
}
