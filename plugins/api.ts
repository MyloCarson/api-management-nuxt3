/* eslint-disable @typescript-eslint/no-unused-vars */
import { $fetch, FetchOptions } from 'ohmyfetch';
import { defineNuxtPlugin } from '#app';
import AuthModule from '~~/services/repository/modules/auth';

interface ApiInstance {
  auth: AuthModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.API_BASE_URL,
  };

  const apiFetcher = $fetch.create(fetchOptions);

  const modules: ApiInstance = {
    auth: new AuthModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
