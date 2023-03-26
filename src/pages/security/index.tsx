import React from "react";
import { Redirect, useLocation } from "@docusaurus/router";

import Leave from "@site/src/components/Leave";
import { searchQueryToObject } from "@site/src/utils";

const DownloadPage = () => {
  const location = useLocation();
  const searchParams = searchQueryToObject(location.search);

  // Redirect to `/` if no `target` is provided
  if (!searchParams?.target) {
    return (
      <>
        Loading...
        <Redirect to="/" />
      </>
    );
  }

  return <Leave />;
};

export default DownloadPage;
