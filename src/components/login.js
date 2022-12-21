import { GoogleLogin } from 'react-google-login'

function login (){

    const onSuccess = (res) => {
        console.log("Loggin SUCCES! Current login status: ",  res.profileObj)
    };

    const onFailure = (res) => {
        console.log("Loggin SUCCES! Current login status: ",  res)
    };

    return (
            <GoogleLogin
                clientId="195816859292-fbc7mrvnbro85faf8ob1i02mor6573e0.apps.googleusercontent.com"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
    )
}

export default login;