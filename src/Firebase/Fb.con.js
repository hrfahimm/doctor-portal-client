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

// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId,
// measurementId: process.env.REACT_APP_measurementId,
