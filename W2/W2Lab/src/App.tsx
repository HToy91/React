import {useEffect, useState} from 'react'
import './App.css'
import Form from './Form';

function App() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const [showForm, setShowForm] = useState<boolean>(false)

    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');

    const clearForm = () => {
        setForm({
            firstName: '',
            lastName: '',
            email: '',
        });
    };

    const displayForm = () => {
        setShowForm(true);
    }

    const submitForm = () => {
        for (const key in form) {
            if (form[key as keyof typeof form] === '') {
                setError('Please fill out all fields');
                return;
            }
        }

        if (emailError) {
            return;
        }

        setError('');
        setShowForm(false);
    }

    useEffect(() => {
        setEmailError(form.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
            ? 'Invalid email address'
            : '');
    }, [form.email])

    useEffect(() => {
        if (!showForm) {
            clearForm();
            setError('')
            setEmailError('')
        }
    }, [showForm])

  return (
    <div className="container">
        {!showForm && <button id="formName" onClick={displayForm}><h1>Awesome Form</h1></button>}
        {showForm &&
            <Form
                form={form}
                setForm={setForm}
                clearForm={clearForm}
                submitForm={submitForm}
                error={error}
                emailError={emailError}
            />
        }
    </div>
  )
}

export default App
