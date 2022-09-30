import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDIb5bq5nStITMCTuG6dpnLMd3T1-yZO1o",
    authDomain: "blog-7774a.firebaseapp.com",
    projectId: "blog-7774a",
    storageBucket: "blog-7774a.appspot.com",
    messagingSenderId: "262240523828",
    appId: "1:262240523828:web:0652c1a61ad5b4c7e5dc61",
    measurementId: "G-KZWNWMB6QS"
};

initializeApp(firebaseConfig);

const db = getFirestore(); 