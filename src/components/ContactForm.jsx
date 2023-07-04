import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
// export const ContactForm = ({
//   loginInputId,
//   numberInputId,
//   btnHandle,
//   number,
//   name,
//   handleChange,
// }) => (
//   <form className={css.form} onSubmit={btnHandle}>
//     <label htmlFor={loginInputId} className={css.form__label}>
//       Name
//     </label>
//     <input
//       className={css.form__input}
//       type="text"
//       name="name"
//       value={name}
//       onChange={handleChange}
//       id={loginInputId}
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//     />
//     <label htmlFor={numberInputId} className={css.form__label}>
//       Number
//     </label>
//     <input
//       className={css.form__input}
//       type="tel"
//       name="number"
//       value={number}
//       onChange={handleChange}
//       id={numberInputId}
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//     />
//     <button className={css.form__btn} type="submit">
//       Add contact
//     </button>
//   </form>
// );
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  // const form = e.currentTarget;
  // const name = form.elements.name.value;
  // const number = form.elements.number.value;
  // this.setState(prevState => ({
  //   contacts: [
  //     ...prevState.contacts,
  //     { name: name, number: number, id: nanoid() },
  //   ],
  // })
  loginInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ name: this.state.name, number: this.state.number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId} className={css.form__label}>
          Name
        </label>
        <input
          className={css.form__input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          id={this.loginInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.numberInputId} className={css.form__label}>
          Number
        </label>
        <input
          className={css.form__input}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          id={this.numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.form__btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
