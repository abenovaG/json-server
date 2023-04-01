import './App.css';
import {useDispatch} from "react-redux";
import { useState} from "react";
import {postFetch} from "./store/slices/postSlice";
import {patchFetch} from "./store/slices/postSlice";
import {userActions} from "./store/slices/userSlice";

function App() {
    const dispatch = useDispatch()

    const [value, setValue] =useState('')
    const [value2, setValue2] =useState('')


    // useEffect(() => {
    //    dispatch( authThunk())
    //     // api.get('posts')
    //     //     .then((data) => {
    //     //         console.log(data)
    //     //     })
    // },[dispatch])

    // const loginUser = () => {
    //     const body = {
    //         username: value,
    //         password: value2
    //     }
    //     dispatch(authThunkToken(body))
    // }

    // const getPostsFetch = () => {
    //     dispatch(postThunk)
    // }

  return (
    <div className="App">
        <input value={value} onChange={(e) => setValue(e.target.value)}/>
        <input value={value2} onChange={(e) => setValue2(e.target.value)}/>
        {/*<button onClick={loginUser}>AUTH</button>*/}
        <button onClick={() => dispatch(postFetch())}>get posts</button>
        <button onClick={() => dispatch(patchFetch())}>post posts</button>
        {/*<div>*/}
        {/*    {users.map((item, i) =>*/}
        {/*    <h1 key={i} onClick={addElement}>{item}</h1>*/}
        {/*        )}*/}
        {/*</div>*/}
    </div>
  );
}

export default App;
