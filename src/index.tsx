import "react-app-polyfill/ie11";
// import 'core-js';
import * as React from "react";
import * as ReactDOM from "react-dom";
// @ts-ignore
import { LoggerService } from "@ciklum/logan";

import { AppConfigProvider } from "@contexts/app-config-context";

import { Index } from "./pages/Index";

window.config = { logLevel: process.env.LOG_LEVEL };

LoggerService.setGlobalTitle(process.env.PKG_NAME);

function startApp(): void {
  const logger = new LoggerService();
  logger.setTitle("index");

  logger.info("Starting app...");

  const app = (
    <AppConfigProvider>
      <Index />
    </AppConfigProvider>
  );

  ReactDOM.render(app, document.querySelector("#app-root"));
}

startApp();
