import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import styleHome from "../styles/Home.module.css";
import { getPostData } from "@/lib/post";

// SSG
export async function getStaticProps() {
  const allPostData = getPostData();
  return {
    props: {
      allPostData,
    },
  };
}

// SSR
// export async function getServerSideProps(context) {
//   return {
//     props: {

//     }
//   }
// }

export default function Home({ allPostData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout home={true}>
        <section className={utilStyle.headingMd}>
          <p>Next.jsを学んでいます！</p>
        </section>
        <section className={utilStyle.headingMd}>
          <h2>alumiのblog</h2>
          <div className={styleHome.grid}>
            {allPostData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={thumbnail} className={styleHome.thumbnailImage} />
                </Link>
                <Link href={`/posts/${id}`}>
                  <span className={utilStyle.boldText}>{title}</span>
                </Link>
                <br />
                <small className={utilStyle.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
