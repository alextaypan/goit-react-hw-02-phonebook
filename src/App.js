import "./App.css";
import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./Components/ContactForm/ContactForm";
import { Section } from "./Components/Section/Section";
import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const findName = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(), name, number }, ...contacts],
    }));
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  removeContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilter = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.handleFilter} />
          <ContactList
            contacts={this.getContacts()}
            onRemoveContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
