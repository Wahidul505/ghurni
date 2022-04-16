import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCVZRdvRNtX2cTSZZqMgOD3nt47bZ3NrTQ",
    authDomain: "ghurni-59dff.firebaseapp.com",
    projectId: "ghurni-59dff",
    storageBucket: "ghurni-59dff.appspot.com",
    messagingSenderId: "548451571137",
    appId: "1:548451571137:web:e7efa0712a04d4df7ccb40"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;