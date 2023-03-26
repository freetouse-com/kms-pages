import React from "react";
import { Redirect } from "@docusaurus/router";
import { useLocation } from "@docusaurus/router";

import Leave from "@site/src/components/Leave";
import { searchQueryToObject } from "@site/src/utils";

const DownloadPage = () => {
  const location = useLocation();
  const searchParams = searchQueryToObject(location.search);

  // Redirect to `/` if no `uuid` is provided
  if (!searchParams?.uuid) {
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
