import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBEsktykodW97IFxE-7_at5RSlMs3_Ue0w",
	authDomain: "reactappdeploy-a4476.firebaseapp.com",
	projectId: "reactappdeploy-a4476",
	storageBucket: "reactappdeploy-a4476.appspot.com",
	messagingSenderId: "825802077817",
	appId: "1:825802077817:web:7ba1247cd45c058cec86a8",
	measurementId: "G-DWJWXCSE4N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
