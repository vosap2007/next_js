import Link from 'next/link';
import Heading from '../../components/Heading';
import { GetStaticProps } from 'next';
import { contactType } from '../../types';

type contactsTypeProps = {
  contacts: [contactType];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts = ({ contacts }: contactsTypeProps) => {
  return (
    <>
      <Heading text={'Contacts List'} />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => {
            return (
              <li key={id}>
                <Link href={`/contacts/${id}`}>{name}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Contacts;
