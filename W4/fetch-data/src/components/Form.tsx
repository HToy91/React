type Form = {
    userId: int,
    title: string,
    body: string,
}
tyoe FormProps = {
    form: Form,
    setForm: (p: {title: string; body: string}) => void,
    clearForm: () => void,
    submitForm: () => void,
    error: string,
}

function Form({form, setForm, clearForm, submitForm, error} : FormProps) {
    return (
        <div className="card">
            <h2 id="formTitle">Create Post</h2>

            <div className="form-row">
                <label htmlFor="" className="form-label">Title</label>
                <input
                    type="text"
                    value={form.title}
                    onChange={e => setForm({...form, title: e.target.value})}
                />
            </div>

            <div className="form-row">
                <label htmlFor="" className="form-label">Body</label>
                <input
                    type="text"
                    value={form.body}
                    onChange={e => setForm({...form, body: e.target.value})}
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
        </div>
    )
}

export default Form;