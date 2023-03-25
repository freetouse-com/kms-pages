import React from "react";
import { useLocation } from "@docusaurus/router";

import Leave from "@site/src/components/Leave";
import { searchQueryToObject } from "@site/src/utils";

const DownloadPage = () => {
  const location = useLocation();
  const searchParams = searchQueryToObject(location.search);

  if (!searchParams?.target) {
    window.location.href = "/";
    return "loading...";
  }

  return <Leave />;
};

export default DownloadPage;
