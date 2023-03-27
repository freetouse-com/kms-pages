import clsx from "clsx";
import React from "react";
import classnames from 'classnames'
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  link: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "安全解除 Windows 限制",
    Svg: require("@site/static/img/windows.svg").default,
    description: (
      <>
        以企业批量授权方式安全的永久激活 Windows 11、Windows 10、Windows
        8.1、Windows 8、Windows 7 和 Windows Vista 以及 Windows Server
        2022、Windows Server 2019 和 Windows Server 2016
        全系列系统。全面解除你的电脑限制。
      </>
    ),
    link: (
      <Link className="button button--secondary button--lg" to="/docs/intro">
        激活 Windows →
      </Link>
    ),
  },
  {
    title: "安全解除 Office 限制",
    Svg: require("@site/static/img/office.svg").default,
    description: (
      <>
        以企业批量授权方式安全的永久激活批量许可版本的 Office LTSC 2022、Office
        2019 和 Office 2016（包括 Project 和 Visio）套件。全面解除 Microsoft
        Office 套件的使用限制。
      </>
    ),
    link: (
      <Link className="button button--secondary button--lg" to="/docs/intro">
        激活 Office →
      </Link>
    ),
  },
];

function Feature({ title, Svg, description,link }: FeatureItem) {
  return (
    <div className={classnames(clsx("col col--6"), styles.colItem)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {link}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
