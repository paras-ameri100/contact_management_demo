import React, { useState } from 'react'
import PageTitle from '../../helpers/PageTitle'
import Button from './Button'
import ContactForm from './ContactForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/rootReducer'
import ContactList from './ContactList'



export default function Contact() {

  const [contactForm, setContactForm] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const contacts = useSelector((state: RootState) => state.operationsReducer)
  const [initialValues, setInitialValues] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    status: true,
  })

  const handleClick = () => {
    setContactForm(!contactForm);
    setEditMode(false);
    setInitialValues({
      id: 0,
      firstName: '',
      lastName: '',
      status: true,
    })
  }

  const handleEdit = (id: number) => {
    const editContact = contacts.filter(item => item.id === id);
    setInitialValues(editContact[0]);
    setEditMode(true);
    setContactForm(true);
  }

  //console.log(contacts);
  return (
    <>
      <PageTitle title='Contact' />
      {
        !contactForm ?
          <Button text="Create Contact" onClick={handleClick} />
          :
          <div className='contact-form-wrapper'>
            <ContactForm onClick={handleClick} initialValues={initialValues} editMode={editMode} setEditMode={setEditMode} setContactForm={setContactForm} />

          </div>
      }
      <ContactList data={contacts} handleEdit={handleEdit} editMode={editMode} />
    </>
  )
}

