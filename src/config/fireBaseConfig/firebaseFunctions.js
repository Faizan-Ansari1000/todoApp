const auth = getAuth();
const db = getDatabase();

const signUp = (obj) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
}
const login = (obj) => {
    signInWithEmailAndPassword(auth, obj.email, obj.password)
}
const dataGet = (nodeName, obj) => { }
const dataEdit = (nodeName, obj, id) => { }
const dataDelete = (obj, id) => { }
const dataPost = (nodeName, obj, id) => { }