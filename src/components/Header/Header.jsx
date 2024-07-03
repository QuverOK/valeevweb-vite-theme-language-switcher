import { useTheme } from "../../hooks/ui/useTheme"
import { UiToggler } from "../uikit/ui-toggler"
import { useLanguage } from "../../hooks/ui/useLanguage"
import { MainLogo } from "../../../public/icons/main-logo"

export function Header() {
  const { theme, setTheme } = useTheme()
  const isChecked = theme === "light" ? false : true

  const { t, currentLanguage, changeLanguage } = useLanguage()

  function handleCheckboxChange(e) {
    if (e.target.checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <header className="flex-[0_1_auto] pt-[30px]">
      <div className="container flex justify-between items-center py-[18px]">
        <div className="text-[20px] font-semibold leading-6">
          <MainLogo className={theme === "light" ? "#fff" : "#000"} />
        </div>
        <div className="flex items-center gap-x-[22px]">
          <ul className="flex gap-x-[22px] items-center">
            <li>
              <a href="#" className="text-[20px] leading-6">
                {t("blog")}
              </a>
            </li>
            <li>
              <a href="#" className="text-[20px] leading-6">
                {t("projects")}
              </a>
            </li>
            <li>
              <a href="#" className="text-[20px] leading-6">
                {t("about")}
              </a>
            </li>
            <li>
              <a href="#" className="text-[20px] leading-6">
                {t("newsletter")}
              </a>
            </li>
            <li>
              <select
                id="language"
                className="rounded bg-transparent text-[20px] leading-6 focus:outline-none"
                onChange={(e) => {
                  changeLanguage(e.target.value)
                }}
                value={currentLanguage}
              >
                <option
                  className="bg-[rgb(var(--background-primary))]"
                  value="en"
                >
                  English
                </option>
                <option
                  className="bg-[rgb(var(--background-primary))]"
                  value="ru"
                >
                  Русский
                </option>
              </select>
            </li>
          </ul>
          <UiToggler
            id="ThemeSwitcher"
            className="flex items-center justify-center"
            isChecked={isChecked}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
      </div>
    </header>
  )
}
