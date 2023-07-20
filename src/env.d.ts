/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_EMAILJS_SERVICE_ID: string;
  readonly PUBLIC_EMAILJS_TEMPLATE_ID: string;
  readonly PUBLIC_EMAILJS_PUBLIC_KEY: string;
  // firebase
  apiKey: 'AIzaSyCehByxwjgRDt_T52VxXeG4hitgaX080Bo';
  authDomain: 'surveynight-9d544.firebaseapp.com';
  projectId: 'surveynight-9d544';
  storageBucket: 'surveynight-9d544.appspot.com';
  messagingSenderId: '676258839241';
  appId: '1:676258839241:web:fb1cb5351e1b3c2400eb18';
  readonly PUBLIC_FIREBASE_API_KEY: string;
  readonly PUBLIC_FIREBASE_AUTH_DOMAIN: string;
  readonly PUBLIC_FIREBASE_PROJECT_ID: string;
  readonly PUBLIC_FIREBASE_STORAGE_BUCKET: string;
  readonly PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly PUBLIC_FIREBASE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
