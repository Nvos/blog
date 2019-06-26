import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { BottomNavbar, Footer, Header } from '..';
import styles from './Layout.module.scss';

const Layout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div className={styles.Skew} />
        <div className={styles.Layout}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <div className={styles.Spacer} />
          <Footer />
        </div>
        <BottomNavbar />
      </React.Fragment>
    )}
  />
);

export default Layout;
