import React, {useState, useEffect} from "react";
import { useResource } from "react-request-hook";


export default function Login({dispatch}) {
  const [ username, setUsername ] = useState("")

  function handleUsername (evt) { setUsername(evt.target.value) }

  const [ loginFailed, setLoginFailed ] = useState(false)
  const [ password, setPassword ] = useState('')

  function handlePassword (evt) { setPassword(evt.target.value) }

   const [ user, login ] = useResource((username, password) => ({
     url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
     method: 'get'
     }))

     useEffect(() => {
       if (user && user.data) {
         if (user.data.length > 0) {
           setLoginFailed(false)
           dispatch({ type: 'LOGIN', username: user.data[0].username })
         } else {
           setLoginFailed(true)
           }
         }
       }, [user])

  return (
    <> 
    <form onSubmit={(e) => {e.preventDefault(); login(username, password)}}>
      <label htmlFor="login-username">Username:</label>
      <input type="text" name="login-username" value={username} onChange={handleUsername} id="login-username" />
      <label htmlFor="login-password">Password:</label>
      <input type="password" value={password} onChange={handlePassword} name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={username.length === 0} />
    </form>
    {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}
    </>
  );
  
}