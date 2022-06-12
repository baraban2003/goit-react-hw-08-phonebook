import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import contactsOperations from 'redux/contacts/phone-operations';
import contactSelectors from 'redux/contacts/phone-selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const arrayContact = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  const addContact = data => dispatch(contactsOperations.addContact(data));

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const eventNameValue = event.target[0].value;
    const arrayContactNormalaise = arrayContact.contacts.map(e =>
      e.name.toLowerCase().trim()
    );

    const filterName = arrayContactNormalaise.find(
      e => e === eventNameValue.toLowerCase().trim()
    );

    filterName
      ? alert(`${eventNameValue} is already in Contacts`)
      : addContact({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.searchForm}>
        <h2>Name</h2>
        <input
          className={s.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />

        <h2>Number</h2>
        <input
          className={s.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />

        <button type="submit" className={s.ripple}>
          Add contact
        </button>
      </div>
    </form>
  );
}

ContactForm.propType = {
  addContact: PropTypes.func.isRequired,
  arrayContact: PropTypes.array.isRequired,
};
