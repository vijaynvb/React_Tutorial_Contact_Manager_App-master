import React from 'react';
import ContactCard from './ContactCard';
import type { Contact } from '../types';

interface ContactListProps {
  contacts: Contact[];
  getContactId: (id: string) => void;
}

function ContactList({ contacts, getContactId }: ContactListProps): React.JSX.Element {
  return (
    <div className="ui celled list">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          clickHandler={getContactId}
        />
      ))}
    </div>
  );
}

export default ContactList;
