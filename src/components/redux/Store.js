import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
    filter: ""
}


const contactsSlise = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        saveContact: (state, action) => {
            state.contacts.push(action.payload)
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
}

)

export const { saveContact, deleteContact, setFilter } = contactsSlise.actions


export const getFilteredContacts = (state) => {
    const { contacts, filter } = state.contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };



export default configureStore({
    reducer: {
        contacts: contactsSlise.reducer
    }
})