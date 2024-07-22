import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'auth-9ca99',
        appId: '1:575437522996:web:6fb31ad6eeb0df3ea76261',
        storageBucket: 'auth-9ca99.appspot.com',
        apiKey: 'AIzaSyCiXXft5V2l8HFuuuYqODMck-knb6imWnE',
        authDomain: 'auth-9ca99.firebaseapp.com',
        messagingSenderId: '575437522996',
        measurementId: 'G-39DXGS8LRM',
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'auth-9ca99',
        appId: '1:575437522996:web:6fb31ad6eeb0df3ea76261',
        storageBucket: 'auth-9ca99.appspot.com',
        apiKey: 'AIzaSyCiXXft5V2l8HFuuuYqODMck-knb6imWnE',
        authDomain: 'auth-9ca99.firebaseapp.com',
        messagingSenderId: '575437522996',
        measurementId: 'G-39DXGS8LRM',
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'auth-9ca99',
        appId: '1:575437522996:web:6fb31ad6eeb0df3ea76261',
        storageBucket: 'auth-9ca99.appspot.com',
        apiKey: 'AIzaSyCiXXft5V2l8HFuuuYqODMck-knb6imWnE',
        authDomain: 'auth-9ca99.firebaseapp.com',
        messagingSenderId: '575437522996',
        measurementId: 'G-39DXGS8LRM',
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
  ],
};
