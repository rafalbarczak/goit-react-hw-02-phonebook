import css from './ContactList.module.css';

export const ContactList = ({ contacts, onContactDelete }) => (
  <ul>
    {contacts.map(contact => (
      <li className={css.list__item} key={contact.id}>
        {contact.name}: {contact.number}
        <button
          className={css.deleteBtn}
          name="delete"
          onClick={() => onContactDelete(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
