import SignUpForm from '../../components/SignUpForm/SignUpForm'

import React from 'react'

function LoginPage ({setProfile}) {
    return (
        <>
        <h1>LoginPage</h1>
        <SignUpForm setProfile={setProfile}/>
        </>
    )
}

export default LoginPage