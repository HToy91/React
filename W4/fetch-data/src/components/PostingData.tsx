import {useEffect, useState} from "react";
import Form from "./Form.tsx";
import Loading from "./Loading";
import usePost from "../hooks/usePost.tsx";
const PostingData = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [formError, setFormError] = useState("");

    const [form, setForm] = useState({
        userId: 3,
        title: "",
        body: "",
    })

    const {data, loading, error, postData} = usePost("posts");


    const clearForm = () => {
        setForm({
            ...form,
            title: "",
            body: "",
        });
        setFormError("");
    }

    const submitForm = async () => {
        for (const key in form) {
            if (form[key as keyof typeof form] === "") {
                setFormError("Please fill out all fields")
                return;
            }
        }
        setFormError("");
        await postData(form);
        setFormSubmit(true);
    }

    useEffect(() => {
        if (!submitForm) {
            clearForm();
            setFormError("");
        }
    }, [setFormSubmit])

    const goBack = () => {
        setFormSubmit(false);
        setFormError("");
        clearForm();
    }

    if (loading) {
        return <Loading />;
    }

    if (error.length > 0) {
        return <p>{error}</p>
    }

    return (
        <>
            {!formSubmit
                ? (<Form
                    form={form}
                    setForm={setForm}
                    submitForm={submitForm}
                    error={error}
                />)
                : (<div className={"card"}>
                    <h2>Post Created</h2>

                    <p><strong>User ID: </strong>{data?.userId}</p>
                    <p><strong>ID: </strong>{data?.id}</p>
                    <p><strong>Title: </strong>{data?.title}</p>
                    <p><strong>Body: </strong>{data?.body}</p>

                    <button onClick={goBack}>Go Back</button>
                </div>)
            }
        </>
    )
}

export default PostingData;