import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Overview } from "../components/Overview"
import { useTheme } from "../hooks/ui/useTheme"
import { FOOTER_LINKS } from "../helpers/logic/variables"

export default function Home() {
  return (
    <HomeLayout
      header={<Header />}
      footer={<Footer footerLinks={FOOTER_LINKS} />}
    >
      <Overview />
    </HomeLayout>
  )
}

function HomeLayout({ header, footer, children }) {
  const { theme } = useTheme()

  return (
    <div className="bg-[rgb(var(--background-primary))] text-[rgb(var(--accent))]">
      {header}
      {children}
      {footer}
    </div>
  )
}
