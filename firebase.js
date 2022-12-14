import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCLA4vnLFaVow25ylLUkb57NhmnN6qk1vE',
  authDomain: 'fir-auth-65294.firebaseapp.com',
  projectId: 'fir-auth-65294',
  storageBucket: 'fir-auth-65294.appspot.com',
  messagingSenderId: '105428798939',
  appId: '1:105428798939:web:49a9375f32ea94d4dfebfe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
