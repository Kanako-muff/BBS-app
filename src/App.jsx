import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { addPost, deletePost } from './features/Posts';

function App() {
  const [name, setName] = useState("Anonymous");
  const [content, setContent] = useState("Omg, there's no content!");

  const postList = useSelector((state) => state.posts.value);
  console.log(postList);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addPost({
        id: postList.length,
        name: name,
        content: content,
      }));

      setName("");
      setContent("");
  };

  return (
    <div className='App'>
      <div>
        <h1>Hey Yo BBS</h1>
      </div>
      <div className='addPost'>
        <input 
          type="text" 
          placeholder="name" 
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={() => handleClick() }>Post</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
          <div key={post.id} className='post'>
            <h1>{post.name}</h1>
            <h1 className='postContent'>{post.content}</h1>
            <button onClick={() => dispatch(deletePost({ id: post.id }))}>
              Delete this Post
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
