
// import { useLocalStorage } from "../hooks/Hooks";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import {useSelector } from 'react-redux';

import { Div, H1, H2, P } from "./App.styled";

export function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');
  
  const contacts = useSelector(state => state.contacts.contacts);
  // const dispatch = useDispatch();

//  const handleSubmit = data => {
//    if (contacts.find(contact => contact.name === data.name)) {
//      alert(`${data.name} is already in contacts`);
//      return;
//    }
//      setContacts(prevState =>  [...prevState, data]);
//   };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };
  
  // const filteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  // return filteredContacts; 
  // };

  // const deleteContacts = (contactId) => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  // };

  return (
    
    <Div>
      <H1>Phonebook</H1>
      <ContactForm />
      <H2>Contacts</H2>
      {contacts.length !== 0 ?
       <>
      <Filter />
      <ContactList />
       </> : 
      <P>There are no saved contacts!</P>
      }
    </Div>
  );
};
