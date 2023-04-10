import Heading from '../../components/Heading';
import Link from 'next/link';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <Heading text={'Posts'} />
      <ul>
        {posts &&
          posts.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Posts;
