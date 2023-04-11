import ContactInfo from '../../components/ContactInfo';
import Heading from '../../components/Heading';
import { GetServerSideProps } from 'next';
import { contactType } from '../../types';

type contactTypeProps = {
  contact: contactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: { contact: data },
  };
};

const Contact = ({ contact }: contactTypeProps) => {
  return (
    <>
      <Heading text={'Contact'} />
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
