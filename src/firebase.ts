import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDwKX_UEL6n_OZFSrh1oQRw_LsB79zTSRQ',
  authDomain: 'ecommerce-2e3b9.firebaseapp.com',
  projectId: 'ecommerce-2e3b9',
  storageBucket: 'ecommerce-2e3b9.appspot.com',
  messagingSenderId: '483165237660',
  appId: '1:483165237660:web:2e06cae59410f348681859',
  measurementId: 'G-6KBKQWPCGM',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
