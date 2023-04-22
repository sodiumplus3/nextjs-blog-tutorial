import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/posts");

// mdファイルのデータ取得
export function getPostData() {
  const filename = fs.readdirSync(postsDirectory);
  const allPostData = filename.map((fn) => {
    const id = fn.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fn);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return { id, ...matterResult.data };
  });
  return allPostData;
}

export function getAllPostIds() {
  const filename = fs.readdirSync(postsDirectory);
  return filename.map((fn) => {
    return {
      params: {
        id: fn.replace(/\.md/, ""),
      },
    };
  });
}

export async function getPostDataFromId(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath);

  const matterResult = matter(fileContent);
  const blogContent = await remark().use(html).process(matterResult.content);
  const blogContentHtml = blogContent.toString();

  return {
    id,
    blogContentHtml,
    ...matterResult.data,
  };
}
