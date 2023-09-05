import React from "react";


import { useAuth0 } from "@auth0/auth0-react";


const LoginWitSSO = () => {


    const {isAuthenticated,isLoading, user, error, logout, loginWithRedirect} =useAuth0()

    if (isLoading){
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Oops ... {error.message}</div>
    }

    if (isAuthenticated) {
        return (
            <div>
                welcome {user.name} 
                <button onClick={()=>logout({logoutParams:{returnTo:'http://localhost:3000'}})}>log out</button>
            </div>
        )
    }else{
        return <div>
            <button onClick={()=>loginWithRedirect()}>log in</button>
        </div>
    }


}

export default LoginWitSSO