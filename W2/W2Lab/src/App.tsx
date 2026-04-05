import { useState } from 'react'
import './App.css'

function App() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    const clearForm = () => {
        setForm({
            firstName: '',
            lastName: '',
            email: '',
        })
    };

  return (
    <div className="container">
        <h1>Awesome Form</h1>
      <div className="card">
          <h2 id="formTitle">Register</h2>

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

          <div className="form-row">
              <label htmlFor="" className="form-label">Email</label>
              <input
                  type="text"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
              />
          </div>

          <div className="form-row form-btns">
              <div>
                  <button className="clear-btn">Clear</button>
              </div>
              <div>
                  <button>Submit</button>
              </div>
          </div>


      </div>
    </div>
  )
}

export default App
