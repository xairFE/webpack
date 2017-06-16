<template>
  <div>
    <router-view></router-view>
    <demo></demo>
  </div>
</template>

<script>
import demo from 'components/demo/demo'
export default {
  name: 'demo-root',
  components: { demo }
}
</script>
