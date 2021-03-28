import {Auth} from './Setup'

export const SignUpUser=(email, password)=>{
    alert(email);
    return new Promise(function(resolve, reject){
        Auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            resolve('Signup success');
        }).catch(error=>{
            reject(error);
        });
    });
};

export const SignInUser=(email, password)=>{
    alert(email);
    return new Promise(function(resolve, reject){
        Auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            resolve('Signin success');
        }).catch(error=>{
            reject(error);
        });
    });
};

export const SignOutUser=()=>{
    return new Promise(function(resolve, reject){
        Auth().signOut()
        .then(()=>{
            resolve('logout success');
        }).catch(error=>{
            reject(error);
        });
    });
};