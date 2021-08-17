import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Container, Heading, Text, Image } from "@chakra-ui/react";
import path from "path";
import Link from "next/link";
import { MDXComponents } from "components/mdx-components";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <Container>
        <Link href="/blog">Back to Blog</Link>
        <div className="post-header">
          <Heading as="h1">{frontMatter.title}</Heading>
          {frontMatter.description && (
            <Text fontSize="xl">{frontMatter.description}</Text>
          )}
        </div>
        <div className="mdx-prose">
          <MDXRemote {...source} components={MDXComponents} />
        </div>
      </Container>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
