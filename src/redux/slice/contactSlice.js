import {createSlice} from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
      },
    reducers: {
      createContact(state, action) {
        state.contacts.push(action.payload)
      },
      deleteContact(state, action) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
      },
    },
  })

  export const { createContact, deleteContact } = contactsSlice.actions;

  export default contactsSlice.reducer;