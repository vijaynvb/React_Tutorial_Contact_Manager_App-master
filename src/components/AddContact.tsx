import React, { useState } from 'react';
import type { Contact } from '../types';

interface AddContactProps {
  addContactHandler: (contact: Omit<Contact, 'id'>) => void;
}

function AddContact({ addContactHandler }: AddContactProps): React.JSX.Element {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (form.name.trim() === '' || form.email.trim() === '') {
      alert('All the fields are mandatory!');
      return;
    }
    addContactHandler({ name: form.name.trim(), email: form.email.trim() });
    setForm({ name: '', email: '' });
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
