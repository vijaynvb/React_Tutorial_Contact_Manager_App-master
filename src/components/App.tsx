import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import type { Contact } from '../types';

const LOCAL_STORAGE_KEY = 'contacts';

function getInitialContacts(): Contact[] {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Contact[]) : [];
  } catch {
    return [];
  }
}

function App(): React.JSX.Element {
  const [contacts, setContacts] = useState<Contact[]>(getInitialContacts);

  const addContactHandler = (contact: Omit<Contact, 'id'>): void => {
    setContacts((prev) => [...prev, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id: string): void => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
