import * as React from "react";
import * as ReactDOM from "react-dom";
// @ts-ignore
import { LoggerService } from "@ciklum/logan";

import { AppConfigProvider } from "@contexts/app-config-context";

import { Home } from "./pages/Home/Home";

window.config = { logLevel: process.env.LOG_LEVEL };

LoggerService.setGlobalTitle(process.env.PKG_NAME);

function startApp(): void {
  const logger = new LoggerService();
  logger.setTitle("index");

  logger.info("Starting app...");

  const app = (
    <AppConfigProvider>
      <Home />
    </AppConfigProvider>
  );

  ReactDOM.render(app, document.querySelector("#app-root"));
}

startApp();
