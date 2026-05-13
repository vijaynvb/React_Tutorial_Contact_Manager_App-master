import React from 'react';
import user from '../images/user.png';
import type { Contact } from '../types';

interface ContactCardProps {
  contact: Contact;
  clickHandler: (id: string) => void;
}

function ContactCard({ contact, clickHandler }: ContactCardProps): React.JSX.Element {
  const { id, name, email } = contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: 'red', marginTop: '7px' }}
        onClick={() => clickHandler(id)}
      />
    </div>
  );
}

export default ContactCard;
