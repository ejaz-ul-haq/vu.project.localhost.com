import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {FormattedMessage, useIntl} from '@umijs/max';
import React from 'react';
import { Row, Col, Button } from 'antd';
import './footer.scss';

const SiteFooter = () => {
    const intl = useIntl();
    const defaultMessage = intl.formatMessage({
        id: 'app.copyright.produced',
        defaultMessage: 'Produced by Ant Group Experience Technology Department',
    });

    const currentYear = new Date().getFullYear();

    return (
        // <DefaultFooter
        //     style={{
        //         background: 'none',
        //     }}
        //     copyright={`${currentYear} ${defaultMessage}`}
        //     links={[
        //       {
        //         key: 'Ant Design Pro - Site Footer',
        //         title: 'Ant Design Pro 33 - Site Footer',
        //         href: 'https://pro.ant.design',
        //         blankTarget: true,
        //       },
        //       {
        //         key: 'github',
        //         title: <GithubOutlined />,
        //         href: 'https://github.com/ant-design/ant-design-pro',
        //         blankTarget: true,
        //       },
        //       {
        //         key: 'Ant Design',
        //         title: 'Ant Design',
        //         href: 'https://ant.design',
        //         blankTarget: true,
        //       },
        //     ]}
        //
        // />

      <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Company</h2>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design-landing">
                    {/*<FormattedMessage id="app.footer.repo" />*/}
                    Who We Are ?
                  </a>
                </div>
                <div>
                  <a target="_blank " href="https://github.com/ant-motion">
                    {/*<FormattedMessage id="app.footer.template" />*/}
                    Products
                  </a>
                </div>
                <div>
                  <a href="http://ant-design-landing.gitee.io/" target="_blank ">
                    {/*<FormattedMessage id="app.footer.chinamirror" />*/}
                    Help Center
                  </a>
                </div>
                <div>
                  <a href="http://ant-design-landing.gitee.io/" target="_blank ">
                    {/*<FormattedMessage id="app.footer.chinamirror" />*/}
                    Contact Us
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  {/*<FormattedMessage id="app.footer.links" />*/}
                  Help Center
                </h2>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design-landing">
                    {/*<FormattedMessage id="app.footer.repo" />*/}
                    Who We Are ?
                  </a>
                </div>
                <div>
                  <a target="_blank " href="https://github.com/ant-motion">
                    {/*<FormattedMessage id="app.footer.template" />*/}
                    Products
                  </a>
                </div>
                <div>
                  <a href="http://ant-design-landing.gitee.io/" target="_blank ">
                    {/*<FormattedMessage id="app.footer.chinamirror" />*/}
                    Help Center
                  </a>
                </div>
                <div>
                  <a href="http://ant-design-landing.gitee.io/" target="_blank ">
                    {/*<FormattedMessage id="app.footer.chinamirror" />*/}
                    Contact Us
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  {/*<FormattedMessage id="app.footer.community" />*/}
                  Contact US
                </h2>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design-landing">
                    {/*<FormattedMessage id="app.footer.repo" />*/}
                    Who We Are ?
                  </a>
                </div>
                <div>
                  <a target="_blank " href="https://github.com/ant-motion">
                    {/*<FormattedMessage id="app.footer.template" />*/}
                    Products
                  </a>
                </div>
                <div>
                  <a href="http://ant-design-landing.gitee.io/" target="_blank ">
                    {/*<FormattedMessage id="app.footer.chinamirror" />*/}
                    Help Center
                  </a>
                </div>
                <div>
                  <a href="http://ant-design-landing.gitee.io/" target="_blank ">
                    {/*<FormattedMessage id="app.footer.chinamirror" />*/}
                    Contact Us
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  {/*<img*/}
                  {/*  className="title-icon"*/}
                  {/*  src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"*/}
                  {/*  alt="AFX Cloud"*/}
                  {/*/>*/}
                  Policies
                  {/*<FormattedMessage id="app.footer.more-product" />*/}
                </h2>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design-landing">
                    {/*<FormattedMessage id="app.footer.repo" />*/}
                    Who We Are ?
                  </a>
                </div>
                <div>
                  <a target="_blank " href="https://github.com/ant-motion">
                    {/*<FormattedMessage id="app.footer.template" />*/}
                    Products
                  </a>
                </div>
                <div>
                  <a href="http://ant-design-landing.gitee.io/" target="_blank ">
                    {/*<FormattedMessage id="app.footer.chinamirror" />*/}
                    Help Center
                  </a>
                </div>
                <div>
                  <a href="http://ant-design-landing.gitee.io/" target="_blank ">
                    {/*<FormattedMessage id="app.footer.chinamirror" />*/}
                    Contact Us
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-bar">
          Made with
          {' '}
          <span className="heart">❤</span>
          {' '}
          by
          <a target="_blank" rel="noopener noreferrer" href="https://yuque.com/afx/blog">
            Ejaz Ul Haq
          </a>
        </div>
      </footer>

    );
};

export default SiteFooter;
