import { Redirect } from 'react-router-dom'
// import { Component } from 'react'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
    const [state, setState] = useState({ username: '', password: '', errorMsg: '' })

    const loginSuccess = requestToken => {
        Cookies.set('jwt_token', requestToken, { expires: 30 })
        // const { history } = props
        // history.replace('/')
    }

    const loginFailed = loginData => {
        setState({ ...state, errorMsg: loginData.status_message })
        // const { history } = .props
        // history.replace('/login')
    }

    const onSubmitForm = async event => {
        event.preventDefault()
        const { username, password } = state
        const tokenUrl =
            'https://api.themoviedb.org/3/authentication/token/new?api_key=639ba2e19fa297642eec1cefb28ef177'
        const response = await fetch(tokenUrl)
        const data = await response.json()
        const requestToken = data.request_token

        const loginApiUrl =
            'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=639ba2e19fa297642eec1cefb28ef177'
        const userDetails = {
            username,
            password,
            request_token: requestToken,
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-type': 'application/json',
            },
        }

        const loginResponse = await fetch(loginApiUrl, options)
        const loginData = await loginResponse.json()
        if (loginResponse.ok === true) {
            loginSuccess(loginData.request_token)
        } else {
            loginFailed(loginData)
        }
    }

    const onChangeUserName = event => {
        setState({ username: event.target.value })
    }

    const onChangePassword = event => {
        setState({ password: event.target.value })
    }


    const { username, password, errorMsg } = state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
        // return <Redirect to="/" />
    }
    return (
        <div className="log-in-bg-container">
            <div className="logo-heading-container">
                <img
                    src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1628099153/movie%20app%20mini%20project/580b57fcd9996e24bc43c529_d5ju8c.png"
                    alt="website logo"
                    className="movie-logo-css"
                />
            </div>
            <div className="form-container">
                <form className="sing-in-container" onSubmit={onSubmitForm}>
                    <h1 className="sign-in-heading">Sign in</h1>
                    <div className="label-input-container">
                        <label htmlFor="username" className="label">
                            USERNAME
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="User name"
                            className="input-ele"
                            onChange={onChangeUserName}
                            value={username}
                        />
                    </div>
                    <div className="label-input-container">
                        <label htmlFor="password" className="label">
                            PASSWORD
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            className="input-ele"
                            onChange={onChangePassword}
                            value={password}
                        />
                    </div>
                    {errorMsg === '' ? null : (
                        <p className="error-msg">username not correct</p>
                    )}
                    <div className="button-container">
                        <button className="sign-in-button" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
