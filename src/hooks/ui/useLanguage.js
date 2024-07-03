import { useTranslation } from "react-i18next"

export function useLanguage() {
  const { t, i18n } = useTranslation()

  let currentLanguage = i18n.language

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem("language", lng)
  }

  return { t, currentLanguage, changeLanguage }
}
