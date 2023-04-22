import Layout from "@/components/Layout";
import { getAllPostIds, getPostDataFromId } from "@/lib/post";
import utilStyle from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <article>
        <h1 className={utilStyle.headingX1}>{postData.title}</h1>
        <br />
        <div className={utilStyle.lightText}>{postData.date}</div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostDataFromId(params.id);
  return {
    props: {
      postData,
    },
  };
}
