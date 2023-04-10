import ContactInfo from '../../components/ContactInfo';
import Heading from '../../components/Heading';

export const getServerSideProps = async (context) => {
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

const Contact = ({ contact }) => {
  return (
    <>
      <Heading text={'Contact'} />
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
