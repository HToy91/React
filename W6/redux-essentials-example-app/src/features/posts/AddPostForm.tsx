import React, { useEffect } from 'react'
import { nanoid} from '@reduxjs/toolkit'
import {useAppDispatch} from '@/app/hooks'
import { type Post, postAdded} from '@/features/posts/postsSlice'

// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement
  postContent: HTMLTextAreaElement
}
interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields
}

export const AddPostForm = () => {
  // Get the `dispatch` method from the store
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
    // Prevent server submission
    e.preventDefault()

    const { elements } = e.currentTarget
    const title = elements.postTitle.value
    const content = elements.postContent.value

    // Create the post object and dispatch the `postAdded` action
    const newPost: Post = {
      id: nanoid(),
      title,
      content
    }
    dispatch(postAdded(newPost))

    console.log('Values: ', { title, content })

    e.currentTarget.reset()
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          defaultValue=""
          required
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          defaultValue=""
          required
        />
        <button>Save Post</button>
      </form>
    </section>
  )
}