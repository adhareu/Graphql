import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InN0cmluZyIsIm5iZiI6MTc1MDA1MzEwNywiZXhwIjoxNzUwMDU2NzA3LCJpYXQiOjE3NTAwNTMxMDd9._4NLKZ81mgI_uBNowt3bu4kdceXMOqYz_rb5EdSc4d0');
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
