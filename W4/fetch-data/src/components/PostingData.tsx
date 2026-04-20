import {useEffect, useState} from "react";
import Form from "./Form.tsx";
const PostingData = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        userId: 3,
        title: "",
        body: "",
    })

    const clearForm = () => {
        setForm({
            ...form,
            title: "",
            body: "",
        })
    }

    const submitForm = () => {
        for (const key in form) {
            if (form[key as keyof typeof form] === "") {
                setError("Please fill out all fields")
                return;
            }
        }
        setError("");
        setFormSubmit(true);
    }

    useEffect(() => {
        if (!submitForm) {
            clearForm();
            setError("");
        }
    }, [setFormSubmit])

    return (
        <>
            {!formSubmit &&
                <Form
                    form={form}
                    setForm={setForm}
                    submitForm={submitForm}
                    error={error}
                />
            }
        </>
    )
}

export default PostingData;