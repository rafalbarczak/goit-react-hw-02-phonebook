import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { ContactFilter } from './ContactFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  loginInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: name, number: number, id: nanoid() },
      ],
    }));

    this.reset();
  };

  handleContactsDisplay = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div style={{ marginLeft: '10px' }}>
        <h1>Phonebook</h1>
        <ContactForm
          loginInputId={this.loginInputId}
          numberInputId={this.numberInputId}
          btnHandle={this.handleSubmit}
          number={this.state.number}
          name={this.state.name}
          handleChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <ContactFilter
          filter={this.state.filter}
          handleChange={this.handleChange}
        />
        <ContactList contacts={this.handleContactsDisplay()} />
      </div>
    );
  }
}
