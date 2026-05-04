import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { PostsList } from './features/posts/PostsList'
import { PostMainPage } from './features/posts/PostsMainPage'
import { SinglePostPage } from './features/posts/SinglePostPage'

import { AddPostForm } from '@/features/posts/AddPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<PostMainPage />}></Route>
            <Route path="/posts/:postId" element={<SinglePostPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
