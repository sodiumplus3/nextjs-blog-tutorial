import Head from "next/head";
import styled from "styled-components";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "alumi";
export const siteTitle = "nextjs blog";

// const Image = styled.img`
//   width: 100px;
//   max-width: 500px;
//   height: auto;
// `;

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/profile.jpg"
              alt="image"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            ></img>
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/profile.jpg"
              alt="image"
              className={`${utilStyles.borderCircle} ${styles.headerImage}`}
            ></img>
            <h1>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">ホームに戻る</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
