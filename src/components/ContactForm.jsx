import css from './ContactForm.module.css';
export const ContactForm = ({
  loginInputId,
  numberInputId,
  btnHandle,
  number,
  name,
  handleChange,
}) => (
  <form className={css.form} onSubmit={btnHandle}>
    <label htmlFor={loginInputId} className={css.form__label}>
      Name
    </label>
    <input
      className={css.form__input}
      type="text"
      name="name"
      value={name}
      onChange={handleChange}
      id={loginInputId}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <label htmlFor={numberInputId} className={css.form__label}>
      Number
    </label>
    <input
      className={css.form__input}
      type="tel"
      name="number"
      value={number}
      onChange={handleChange}
      id={numberInputId}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
    <button className={css.form__btn} type="submit">
      Add contact
    </button>
  </form>
);
