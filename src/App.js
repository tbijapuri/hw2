import React, {useReducer, useEffect, createContext} from "react";
 import { useResource } from 'react-request-hook'
 import UserBar from "./UserBar";
 import CreateTodo from "./createTodo";
 import TodoList from "./TodoList";
 import appReducer from "./reducers"
 import Header from "./Header";

 function App() {
     //const [ user, setUser ] = useState("")
     //const [todos, setTodos] = useState([])
     const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] });


     const [ posts, getPosts ] = useResource(() => ({
      url: '/todos',
      method: 'get'
      }))
 
      useEffect(getPosts, [])
 
      useEffect(() => {
        if (posts && posts.data) {
          dispatch({ type: 'FETCH_POSTS', todos: posts.data })
        }
        }, [posts])

     useEffect(() => {
      if (state.user) {
      document.title = `${state.user}’s Blog`
      } else {
      document.title = 'Blog'
      }
      }, [state.user]
    )

     return (
      <div>
        <Header text="My TODO LIST" />
        <UserBar user={state.user} dispatch={dispatch} />
        {state.user && <CreateTodo dispatch={dispatch} />}
        {state.user && <TodoList todos={state.todos} dispatch={dispatch} />}
      </div>
    )
 }

 export const ThemeContext = createContext({primary:'blue'}); 
 export default App;