## vue-immediate-before-route-update

This is a Vue.js composition that allows you to execute a function before the route is updated.

The function will also be executed on component created.

### Installation

```bash
npm install vue-immediate-before-route-update
```

### Usage

```vue 
<script setup lang="ts">
import { onImmediateBeforeRouteUpdate } from 'vue-immediate-before-route-update'

onImmediateBeforeRouteUpdate((to, from, next) => {
  console.log('before route update')
})
</script>
```