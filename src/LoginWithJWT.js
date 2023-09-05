import React, { useState } from "react";
import jsrsasign from "jsrsasign";
import { useNavigate } from "react-router-dom";

const USERS = [{
    id:1,
    username:'karan',
    password:'password'
}]


const LoginWithJWT = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState('')
    const [pwd, setPwd] =useState('')


    const handleLogin = (e) => {
        e.preventDefault()
        console.log(user, pwd)
        const userExists = USERS.find((u)=>u.username===user && u.password===pwd)
        if(userExists) {
            const header = {alg:'HS256', typ:"JWT"}
            const payload = {sub:userExists.id, username:userExists.username}
            const secret = 'YPOUR_SECRET_KEY';
            const token = jsrsasign.jws.JWS.sign('HS256', JSON.stringify(header), JSON.stringify(payload), secret)
            localStorage.setItem('token',token)
            localStorage.setItem('name', user)
            navigate('/dashboard')
        }
    }


    return (<section>
        <form onSubmit={handleLogin}>
            <label htmlFor="username">username</label>
            <input 
            type='text'
            id="username"
            value={user}
            onChange={(e)=>setUser(e.target.value)}/>
            
            <label htmlFor="password">password</label>
            <input 
            type='text'
            id="password"
            value={pwd}
            onChange={(e)=>setPwd(e.target.value)}/>
            <button>sign in</button>
        </form>
    </section>
    )

}

export default LoginWithJWT