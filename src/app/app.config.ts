import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "zoldsegesseg", appId: "1:908182855966:web:41eeeb94e0403516c4e90f", storageBucket: "zoldsegesseg.firebasestorage.app", apiKey: "AIzaSyATa9BngdtxdbTPSEUpmxJysCluPruNM80", authDomain: "zoldsegesseg.firebaseapp.com", messagingSenderId: "908182855966", measurementId: "G-6BSTDNRFB7" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
