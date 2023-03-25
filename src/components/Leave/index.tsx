import React, { useState } from "react";
import { useLocation } from "@docusaurus/router";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Image, Space, message } from "antd";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { copyText, searchQueryToObject } from "@site/src/utils";

import styles from "./index.module.css";

const DownloadPage = () => {
  const location = useLocation();
  const searchParams = searchQueryToObject(location.search);

  const { siteConfig } = useDocusaurusContext();
  const navbar: any = siteConfig.themeConfig.navbar; // TODO 将来升级后看是否有 navbar 的类型
  const [pwd] = useState("6262");

  return (
    <main className={styles.content}>
      <div className={styles.logo}>
        <Image
          width={90}
          preview={false}
          src={navbar.logo.src}
          alt={navbar.logo.alt}
        />
      </div>
      <div className={styles.box}>
        <h1>即将离开 KMS.FreeToUse.com，请注意您的帐号和财产安全。</h1>
        <ul>
          {searchParams?.uuid && (
            <>
              <li>
                <dl>
                  <dt>下载地址：</dt>
                  <dd>https://www.baidu.com</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>访问密码：</dt>
                  <dd className={styles.pwd}>
                    <span>{pwd}</span>
                  </dd>
                </dl>
              </li>
            </>
          )}
          {searchParams?.target && <li>{searchParams.target}</li>}
        </ul>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#2e8555",
            },
          }}
        >
          <Space size="small" className={styles.actions}>
            {searchParams?.uuid && (
              <>
                <Button
                  type="default"
                  onClick={async () =>
                    message.success({
                      icon: (
                        <CheckCircleOutlined
                          style={{ color: "var(--ifm-color-primary)" }}
                        />
                      ),
                      content: await copyText(pwd),
                    })
                  }
                >
                  复制密码
                </Button>
                <Button type="primary" href="https://www.baidu.com">
                  前往下载
                </Button>
              </>
            )}
            {searchParams?.target && (
              <Button type="primary" href={searchParams.target} title={searchParams.target}>
                继续访问
              </Button>
            )}
          </Space>
        </ConfigProvider>
      </div>
    </main>
  );
};

export default DownloadPage;
