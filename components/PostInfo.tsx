import { postType } from '../types';

type postInfoProps = {
  post: postType;
};

const PostInfo = ({ post }: postInfoProps) => {
  const { title, body } = post || {};

  if (!post) {
    return <h3>Empty post</h3>;
  }

  return (
    <>
      <h3>{title}</h3>
      <div>{body}</div>
    </>
  );
};

export default PostInfo;
