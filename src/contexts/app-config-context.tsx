import React, { FunctionComponent } from "react";
import { AppConfig } from "@src/typings";

const appConfig: AppConfig = {
  name: process.env.PKG_NAME as string,
  version: process.env.PKG_VERSION as string,
  config: {
    logLevel: process.env.LOG_LEVEL,
    isNode: false,
    startApp: true
  }
};

export const AppConfigContext = React.createContext<AppConfig>(appConfig);

export const AppConfigProvider: FunctionComponent<{ children: any }> = ({
  children
}) => {
  return (
    <AppConfigContext.Provider value={appConfig}>
      {children}
    </AppConfigContext.Provider>
  );
};
