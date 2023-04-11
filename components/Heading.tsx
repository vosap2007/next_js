import { FC } from 'react';

type headingType = {
  text: string;
  tag?: string;
};

const Heading: FC<headingType> = ({ text, tag }) => {
  const Tag = tag || 'h1';
  return (
    <>
      <Tag>{text}</Tag>
    </>
  );
};

export default Heading;
