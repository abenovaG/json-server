import './App.css';
import {useDispatch, useSelector} from "react-redux";
import React, {Suspense, useState} from "react";
import {postFetch} from "./store/slices/postSlice";
import {useActionCreator} from "./helpers/actionCreator";
import InfiniteScroll from 'react-infinite-scroll-component';


function App() {
    const dispatch = useDispatch()
    const post = useSelector(state => state.post.post)
    const getPostCreator = useActionCreator(postFetch)

    const [value, setValue] =useState('')
    const [value2, setValue2] =useState('')
    const [more, setMore] = useState(true)

    function infiniteGetPosts() {
        if (post.length > 20){
            setMore(false)
        }
        const params = {
            _limit: 10,
            page: 1
        }
        getPostCreator(params)
    }

    const ExmChunk = React.lazy(() => import('./pages/About'))

  return (
      <Suspense fallback={<h1>LOADING...</h1>}>
          <div className="App">
              <div>
                  <input value={value} onChange={(e) => setValue(e.target.value)}/>
                  <input value={value2} onChange={(e) => setValue2(e.target.value)}/>
              </div>
              <button onClick={infiniteGetPosts}>get posts</button>
              <InfiniteScroll
                  dataLength={post.length}
                  next={infiniteGetPosts}
                  hasMore={more}
                  loader={<h4>click the button at the top list, to see POSTS...</h4>}
              >
                  {post?.map( (item) =>
                      <div key={item.id} className='itemCard'>
                          <div className='everyItem'>
                              {item.title}
                          </div>
                      </div>
                  )}
                  <ExmChunk />
              </InfiniteScroll>
          </div>
      </Suspense>
  );
}

export default App;
