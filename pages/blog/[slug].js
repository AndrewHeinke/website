import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Box, Container, Heading, Text, Button, Icon } from "@chakra-ui/react";
import path from "path";
import Link from "next/link";
import { MDXComponents } from "components/mdx-components";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

export default function PostPage({ source, frontMatter }) {
  const BackIcon = (props) => (
    <Icon viewBox="0 0 20 20" w="1em" h="1em" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </Icon>
  );

  return (
    <>
      <Link href="/blog" passHref>
        <Button
          as="a"
          variant="outline"
          colorScheme="purple"
          leftIcon={<BackIcon />}
          size="xs"
        >
          Back to Blog
        </Button>
      </Link>
      <Box mt="4">
        <Heading as="h1">{frontMatter.title}</Heading>
        {frontMatter.description && (
          <Text fontSize="xl">{frontMatter.description}</Text>
        )}
      </Box>
      <Box className="mdx-prose">
        <MDXRemote {...source} components={MDXComponents} />
      </Box>
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
