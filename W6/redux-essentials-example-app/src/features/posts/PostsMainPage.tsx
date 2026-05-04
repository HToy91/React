import { AddPostForm } from "./AddPostForm";
import { PostsList } from "./PostsList";

const PostsMainPage = () => {
    return (
        <>
          <AddPostForm />
          <PostsList />
        </>
    )
}

export default PostsMainPage;