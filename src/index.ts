import { NavigationGuard, NavigationGuardNext, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

export function onImmediateBeforeRouteUpdate(updateGuard: NavigationGuard) {
  const to = useRoute();
  const router = useRouter();

  onBeforeRouteUpdate(updateGuard);

  const res = new Promise(async (resolve) => {
    const result = updateGuard(to, router.currentRoute.value, <NavigationGuardNext>resolve);
    if (result?.then) {
      resolve(await result);
    }
  });
  res.then((nextResult) => {
    if (nextResult === undefined) {
      return;
    }
    if (nextResult === false) {
      return router.go(-1);
    }
    if (typeof nextResult === 'string') {
      return router.push(nextResult);
    }
    if (typeof nextResult === 'object') {
      return router.push(nextResult);
    }
    throw new Error('Invalid return value from navigation guard');
  })
}