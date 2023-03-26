import React from "react";
import { Button, Space, message } from "antd";
import { useLocation } from "@docusaurus/router";
import { CheckCircleOutlined } from "@ant-design/icons";

import AntdConfigProvider from "../Provider/AntdConfigProvider";
import { copyText, searchQueryToObject } from "@site/src/utils";

import styles from "./index.module.css";
import Layout from "@theme/Layout";

const DownloadPage = () => {
  const location = useLocation();
  const searchParams = searchQueryToObject(location.search);

  function renderTitle() {
    if (searchParams?.id) return "下载中心";
    else if (searchParams?.target) return "安全中心";
  }

  return (
    <AntdConfigProvider>
      <Layout title={renderTitle()}>
        <main className={styles.content}>
          <div className={styles.box}>
            <h1>即将离开 KMS.FreeToUse.com</h1>
            <p>您即将离开 KMS.FreeToUse.com，请注意您的帐号和财产安全。</p>
            <ul>
              {searchParams?.id && (
                <>
                  <li>
                    <dl>
                      <dt>下载地址：</dt>
                      <dd>{`http://files.shareclient.net/f/${searchParams.id}`}</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>访问密码：</dt>
                      <dd className={styles.pwd}>
                        <span>{searchParams?.password}</span>
                      </dd>
                    </dl>
                  </li>
                </>
              )}
              {searchParams?.target && <li>{searchParams.target}</li>}
            </ul>
            <Space size="small" className={styles.actions}>
              {searchParams?.id && (
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
                        content: await copyText(searchParams?.password),
                      })
                    }
                  >
                    复制密码
                  </Button>
                  <Button
                    type="primary"
                    href={`http://files.shareclient.net/f/${searchParams.id}?p=${searchParams?.password}`}
                  >
                    前往下载
                  </Button>
                </>
              )}
              {searchParams?.target && (
                <Button
                  type="primary"
                  href={searchParams.target}
                  title={searchParams.target}
                >
                  继续访问
                </Button>
              )}
            </Space>
          </div>
        </main>
      </Layout>
    </AntdConfigProvider>
  );
};

export default DownloadPage;
