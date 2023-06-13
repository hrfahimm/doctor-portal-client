import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
   apiKey: 'AIzaSyAMiuxylI7g-DUQUc4hMr-96r9aH0qlHCo',
   authDomain: 'doctor-portal-ll.firebaseapp.com',
   projectId: 'doctor-portal-ll',
   storageBucket: 'doctor-portal-ll.appspot.com',
   messagingSenderId: '980296350239',
   appId: '1:980296350239:web:ea1f2846ec114c4184b32a',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
