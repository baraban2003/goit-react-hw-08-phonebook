import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import contactsOperations from 'redux/contacts/phone-operations';
import contactSelectors from 'redux/contacts/phone-selectors';

const getVisibleEl = (contacts = [], filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export default function ContactList() {
  const dispatch = useDispatch();

  const contactArrey = useSelector(state =>
    getVisibleEl(state.contacts.contacts, state.contacts.filter)
  );

  const deleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul>
      {contactArrey.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteEl={deleteContact}
            /* editEl={editContact} */
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contactArrey: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
