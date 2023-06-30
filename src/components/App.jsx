import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      // { name: 'hello', id: 521521 },
      // { name: 'HOLA', id: 215221 },
    ],
    name: '',
    number: '',
  };

  loginInputId = nanoid();
  numberInputId = nanoid();

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

    form.reset();
  };

  render() {
    return (
      <div style={{ marginLeft: '10px' }}>
        <h1>Phonebook</h1>
        <ContactForm
          loginInputId={this.loginInputId}
          btnHandle={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
