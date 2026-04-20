import { useState } from 'react';
import './App.css';
import FetchingData from './components/FetchingData';
import PostingData from './components/PostingData';

function App() {
  const [showFetchData, setShowFetchData] = useState(true);
  const [showPostData, setPostData] = useState(false);

  const [Form, setForm] = useState({
    title: '',
    body: "",
  })

  const [showForm, setShowForm] = useState(false);


  const handleShowFetchDataDemo = () => {
    setShowFetchData(true);
    setPostData(false);
  };

  const handleShowPostDataDemo = () => {
    setShowFetchData(false);
    setPostData(true);
  };

  return (
      <div className="container">
        <button onClick={() => handleShowFetchDataDemo()} className="button">
          Fetch Data
        </button>
        <button onClick={() => handleShowPostDataDemo()} className="button">
          Post Data
        </button>
        <hr />
        {showFetchData ? <FetchingData /> : <PostingData />}
      </div>
  );
}

export default App;