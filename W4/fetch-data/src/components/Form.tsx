type Form = {
    userId: number;
    title: string;
    body: string;
}

type FormProps = {
    form: Form,
    setForm: (p: {userId: number; title: string; body: string}) => void,
    submitForm: () => void,
    error: string,
}
function Form(props: FormProps) {
    return (
        <div className={"card"}>
            <h2 id={"formTitle"}>Add</h2>

            <div className={"form-row"}>
                <label htmlFor="" className={"form-label"}>Title</label>
                <input
                    type="text"
                    value={props.form.title}
                    onChange={e => props.setForm({...props.form, title: e.target.value})}
                />
            </div>

            <div className={"form-row"}>
                <label htmlFor="" className={"form-label"}>Body</label>
                <input
                    type="text"
                    value={props.form.body}
                    onChange={e => props.setForm({...props.form, body: e.target.value})}
                />
            </div>

            <div className={"form-row form-btns"}>
                <div>
                    <button onClick={props.submitForm}>Submit</button>
                </div>
            </div>

            {props.error && <div className={"error"}>{props.error}</div>}
        </div>
    )
}

export default Form