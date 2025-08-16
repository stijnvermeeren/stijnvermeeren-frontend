import { authGuard } from '@auth0/auth0-vue';

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    await authGuard(to)
  } else {
    return navigateTo({path: '/auth/admin', query: {redirect: to.path}})
  }
})
