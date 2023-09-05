import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    
    const [isAuthenticated, setAuth] = useState(!!localStorage.getItem('token'))
    const username = localStorage.getItem('name')
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isAuthenticated){
            navigate('/')
        }
      },[isAuthenticated])

    const logout = () => {
        localStorage.removeItem('token')
        setAuth(!!localStorage.removeItem('token'))
    }

    return (
    <section>
        <div>
            Welcome {username}
            <button onClick={()=>logout()}>logout</button>
        </div>
    </section>
    )

}

export default Dashboard