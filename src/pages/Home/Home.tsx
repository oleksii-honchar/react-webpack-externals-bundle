import React, { ReactElement, useContext, Fragment } from "react";

import { AppConfigContext } from "@contexts/app-config-context";

export function Home(): ReactElement {
  const { name, version } = useContext(AppConfigContext);

  return (
    <Fragment>
      <div>
        {name}@{version}
      </div>
      <h1>Hello World!</h1>
    </Fragment>
  );
}
