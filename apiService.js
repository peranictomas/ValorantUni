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

export const submitUser = (Id, emailAdd, firstName, lastName, Age) => {
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
            emailAdd: emailAdd,
            firstName: firstName,
            lastName: lastName,
            Age: Age,
        };
        database().ref('users/'+key).update(dataToSave).then(snapshot => {
            resolve(snapshot);
        })
        .catch(error => {
            reject(error);
        });
    });
};

export const submitTutorial = (Id, Title, Tags, Link) => {
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
            Title: Title,
            Tags: Tags,
            Link: Link,
        };
        database().ref('tutorials/'+key).update(dataToSave).then(snapshot => {
            resolve(snapshot);
        })
            .catch(error => {
                reject(error);
            });
    });
};