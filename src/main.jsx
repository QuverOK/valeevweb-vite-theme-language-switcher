import React from "react"
import ReactDOM from "react-dom/client"
import { Routing } from "./components/Routing"
import "./main.css"
import i18n from "./helpers/ui/i18n"
import { ThemeProvider } from "./components/ThemeProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Routing />
    </ThemeProvider>
  </React.StrictMode>
)
