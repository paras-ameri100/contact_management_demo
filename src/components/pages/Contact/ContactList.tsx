import React from 'react'
import { Contact } from './ContactForm'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeContact } from '../../../redux/contacts/action-creators'

interface Props {
  data: Contact[],
  handleEdit: (id: number) => void,
  editMode: boolean
}

function ContactList({ data, handleEdit, editMode }: Props) {

  const dispatch = useDispatch();

  /* const handleEdit = (id: number | null) => {
    console.log(id);
  } */

  return (
    <div className='contacts-wrapper mt-5 flex'>
      
      
      {
        data.length > 0 ? data.map((item: Contact, index: number) => (
          <div key={index} className='contacts-wrap bg-white shadow-lg border-2 border-solid rounded border-slate-300 px-5 py-5 me-3'>
            <h3 className='text-2xl font-semibold mb-5'>{item.firstName} {item.lastName}</h3>
            <p className='text-xl mb-5'><span className={item.status ? 'bg-lime-800 text-white px-2 py-2 rounded' : 'bg-red-500 text-white px-2 py-2 rounded'}>{item.status ? 'Active' : 'Inactive'}</span></p>
            {
              !editMode &&
              <div className='flex justify-between'>
                <button className='rounded-full px-3 py-3 bg-cyan-400 mt-3 text-xl text-white' onClick={() => handleEdit(item.id)}><AiOutlineEdit size={20} /></button>
                <button className='rounded-full px-3 py-3 bg-red-500 mt-3 text-xl text-white' onClick={() => dispatch(removeContact(item.id))}><AiOutlineDelete size={20} /></button>
              </div>
            }
          </div>
        ))
        :
        <p>No Contact Found. Please add contact from Create Contact button.</p>
      }
    </div>
  )
}

export default ContactList