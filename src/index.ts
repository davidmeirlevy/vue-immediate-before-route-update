import { NavigationGuard, onBeforeRouteUpdate } from 'vue-router';

export function onImmediateBeforeRouteUpdate(updateGuard: NavigationGuard) {
  onBeforeRouteUpdate(updateGuard);
}