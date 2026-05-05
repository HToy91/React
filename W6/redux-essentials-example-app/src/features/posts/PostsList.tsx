import { useAppSelector, useAppDispatch} from '@/app/hooks'
import { Link } from 'react-router-dom'
import { selectAllPosts, fetchPosts, selectPostsStatus, selectPostsError } from './postsSlice'
import { ReactionButtons } from './ReactionButtons'
import React, { useEffect } from 'react'
import { TimeAgo } from '@/components/TimeAgo'
import { PostAuthor } from './PostAuthor'

import { Spinner } from '@/components/Spinner'
// export const PostsList = () => {
//     const posts = useAppSelector(selectAllPosts)
// }

interface PostsExcerptProps {
  post: Post
}

function PostExcerpt({ post }: PostsExcerptProps) {
  return (
    <article className='post-excerpt' key={post.id}>
      <h3>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className='post-content'>{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
    </article>
  )
}

export const PostsList = () => {
  const dispatch = useAppDispatch()
  // Select the `state.posts` value from the store into the component
  const posts = useAppSelector(selectAllPosts)
  const postsStatus = useAppSelector(selectPostsStatus)
  const postsError = useAppSelector(selectPostsError)

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  let content: React.ReactNode

  if (postsStatus === 'pending') {
    content = <Spinner text="Loading..." />
  } else if (postsStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))

    content = orderedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    ))
  } else if (postsStatus === 'rejected') {
    content = <div>{postsError}</div>
  }

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {content}
    </section>
  )

  // const renderedPosts = posts.map(post => (
  //   <article className='post-excerpt' key={post.id}>
  //     <h3>
  //         <Link to={`/posts/${post.id}`}>{post.title}</Link>
  //     </h3>
  //     <p className='post-content'>{post.content.substring(0, 100)}</p>
  //   </article>
  // ))
  //
  // Sort posts in reverse chronological order by datetime string
  // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  //
  // const renderedPosts = orderedPosts.map((post) => (
  //   <article className="post-excerpt" key={post.id}>
  //     <h3>
  //       <Link to={`/posts/${post.id}`}>{post.title}</Link>
  //     </h3>
  //     <p className="post-content">{post.content.substring(0, 100)}</p>
  //     <ReactionButtons post={post} />
  //   </article>
  // ))

  // return (
  //   <section className="posts-list">
  //     <h2>Posts</h2>
  //     {renderedPosts}
  //   </section>
  // )
}