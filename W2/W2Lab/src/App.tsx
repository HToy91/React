import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

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
        const formElement = document.querySelector('.card');
        formElement?.classList.add("hidden");
    }

    const submitForm = () => {
        for (const key in form) {
            if (form[key as keyof typeof form] === '') {
                setError('Please fill out all fields');
                return;
            }
        }
        setError('');

        const formElement = document.querySelector('.card');
        formElement?.classList.remove("hidden");
        clearForm();
    }

    useEffect(() => {
        setEmailError(form.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
            ? 'Invalid email address'
            : '');
    }, [form.email])
  return (
    <div className="container">
        <button id="formName" onClick={displayForm}><h1>Awesome Form</h1></button>
      <div className="card">
          <h2 id="formTitle">Register</h2>

          <div className="form-row">
              <label htmlFor="" className="form-label">Email</label>
              <input
                  type="text"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
              />
          </div>

          <div className="form-row">
              <label htmlFor="" className="form-label">First Name</label>
              <input
                  type="text"
                  value={form.firstName}
                  onChange={e => setForm({...form, firstName: e.target.value})}
              />
          </div>

          <div className="form-row">
              <label htmlFor="" className="form-label">Last Name</label>
              <input
                  type="text"
                  value={form.lastName}
                  onChange={e => setForm({...form, lastName: e.target.value})}
              />
          </div>


          <div className="form-row form-btns">
              <div>
                  <button className="clear-btn" onClick={clearForm}>Clear</button>
              </div>
              <div>
                  <button onClick={submitForm}>Submit</button>
              </div>
          </div>

          {error && <div className="error">{error}</div>}
          {emailError && <div className="error">{emailError}</div>}
      </div>
    </div>
  )
}

export default App
