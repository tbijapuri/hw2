import { useReducer } from "react";
 import UserBar from "./UserBar";
 import CreateTodo from "./createTodo";
 import TodoList from "./TodoList";
 import appReducer from "./reducers"

 function App() {
     //const [ user, setUser ] = useState("")
     //const [todos, setTodos] = useState([])
     const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] });

     return (
      <div>
        <UserBar user={state.user} dispatch={dispatch} />
        {state.user && <CreateTodo dispatch={dispatch} />}
        {state.user && <TodoList todos={state.todos} dispatch={dispatch} />}
      </div>
    )
 }

 export default App;