<template>
  <div>
    <h2>当前环境</h2>
    <div>是否ios设备：<span v-text="$isIos"></span></div>
    <div>是否微信环境：<span v-text="$isWechat"></span></div>
  </div>
</template>

<script>
export default {
  name: 'demo'
}
</script>
