import css from './Contact.module.css';

export default function Contact({ contact, onDeleteContact }) {
  return (
    <li className={css.item}>
      {contact.name}: {contact.number}
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
}
