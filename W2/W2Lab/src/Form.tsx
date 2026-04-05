type FormProps = {
    form: HTMLFormElement,
    setForm: () => void,
    clearForm: () => void,
    submitForm: () => void,
    error: Error,
    emailError: Error,
}

function Form({form, setForm}    : FormProps) {
    return (
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
    )
}

export default Form;