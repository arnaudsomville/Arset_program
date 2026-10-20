import React from "react";
import ReactDOM from "react-dom/client";
import { cssVariables } from "@arset/theme";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./styles.css";
import App from "./App";

const themeStyle = document.createElement("style");
themeStyle.setAttribute("data-arset-theme", "");
themeStyle.textContent = cssVariables();
document.head.prepend(themeStyle);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
