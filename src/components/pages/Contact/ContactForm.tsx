import React, { useEffect, useState } from 'react'
import Button from './Button';
import { useDispatch } from 'react-redux'
import { addContact, updateContact } from '../../../redux/contacts/action-creators';

export interface Contact {
  id: number,
  firstName: string,
  lastName: string,
  status?: boolean
}

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  initialValues: Contact,
  editMode: boolean,
  setEditMode: (movies:boolean) => void,
  setContactForm: (contactForm: boolean) => void,
}

export default function ContactForm({ onClick, initialValues, editMode, setEditMode, setContactForm }: Props) {

  const [formValues, setFormValues] = useState<Contact>(initialValues)
  const [formErrors, setFormErrors] = useState({} as Contact);
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'status') {
      if (value === 'Active') {
        setFormValues({ ...formValues, [name]: true });
      }
      else {
        setFormValues({ ...formValues, [name]: false });
      }
    }
    else {
      setFormValues({ ...formValues, [name]: value });
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errors = {} as Contact;

    if (!formValues.firstName) {
      errors.firstName = 'Please enter your first name';
    }
    if (!formValues.lastName) {
      errors.lastName = 'Please enter your last name';
    }
    setIsSubmit(true);
    if (!editMode) {
      let date = new Date();
      let time = date.getTime();
      setFormValues({ ...formValues, id: time })
    }
    setFormErrors(errors);
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (editMode) {
        dispatch(updateContact(formValues))
      }
      else {
        dispatch(addContact(formValues))
      }
      setEditMode(false);
      setContactForm(false);
      //onClick();
    }
  }, [formErrors])




  return (
    <>
      <div className='forms-wrapper mt-5'>
        <form onSubmit={handleSubmit}>
          <div className='form-control mb-3'>
            <label className='block text-xl mb-2'>First name</label>
            <input className='px-4 text-xl py-3 border-2 border-solid rounded border-neutral-400' type='text' placeholder='Add First Name' name='firstName' value={formValues.firstName} onChange={handleChange} />
            <p className='text-red-400'>{formErrors.firstName}</p>
          </div>
          <div className='form-control mb-3'>
            <label className='block text-xl mb-2'>Last name</label>
            <input className='px-4 text-xl py-3 border-2 border-solid rounded border-neutral-400' type='text' placeholder='Add First Name' name='lastName' value={formValues.lastName} onChange={handleChange} />
            <p className='text-red-400'>{formErrors.lastName}</p>
          </div>
          <div className='form-control mb-3'>
            <label className='block text-xl mb-2'>Status</label>
            <div className='flex'>
              <div className='me-3'>
                <input className='me-2' type="radio" checked={formValues.status === true} onChange={handleChange} value="Active" name="status" />
                <label className='text-xl'>Active</label>
              </div>
              <div className='me-3'>
                <input className='me-2' type="radio" checked={formValues.status === false} onChange={handleChange} value="Inactive" name="status" />
                <label className='text-xl'>Inactive</label>
              </div>
            </div>

          </div>
          <div className='form-control flex'>
            {
              <button type='submit' className='rounded-full me-3 px-6 py-6 bg-lime-800 my-5 text-xl text-white'>{editMode ? 'Update' : 'Add'}</button>
            }

            <Button text="Cancel" onClick={onClick} />
          </div>
        </form>
      </div>

    </>
  )
}

