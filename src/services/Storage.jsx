export const storeUserData=(data)=>{
    localStorage.setItem('idToken',data)
}

export const getUserData=()=>{
    return localStorage.getItem('idToken')
}

export const removeUser=()=>{
    localStorage.removeItem('idToken')
}