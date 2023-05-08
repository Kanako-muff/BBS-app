import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import postsReducer from "./features/Posts.js" // ここでReducerを受け取っている。

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ReducerでAppを挟むことで、Reducerは常にAppにアクセスできるようになる。 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
