import {Auth, database} from './Setup'

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

export const submitUser = (Id, Name, Position) => {
    return new Promise(function(resolve, reject){
        let key;
        if (Id != null){
            key = Id;
        }
        else{
            key = database().ref().push().key;
        }
        let dataToSave = {
            Id: key,
            Name: Name,
            Position: Position,
        };
        database().ref('users/'+key).update(dataToSave).then(snapshot => {
            resolve(snapshot);
        })
        .catch(error => {
            reject(error);
        });
    });
};