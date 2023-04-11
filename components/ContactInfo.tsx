import { contactType } from '../types';

type contactInfoProp = {
  contact: contactType;
};

const ContactInfo = ({ contact }: contactInfoProp) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <h3>Empty contact</h3>;
  }

  return (
    <>
      <h3>{name}</h3>
      <div>
        <strong>Email:</strong>
        {email}
      </div>
      <div>
        <strong>Address:</strong>
        {`${street},${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
