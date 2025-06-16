import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache,ApolloLink  } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideApollo(() => {
      const httpLink = inject(HttpLink);
// Auth link to add JWT token
      const authLink = setContext(() => {
        const token = localStorage.getItem('token'); // Get the JWT from local storage
        return {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        };
      });
       // Combine authLink and httpLink
      const link = ApolloLink.from([authLink, httpLink.create({ uri: 'https://localhost:7280/graphql' })]);

      return {
        link,
        cache: new InMemoryCache(),
      };
    })]
};
