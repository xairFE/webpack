<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getWXTicket } from 'service/common'
import { wxApis } from 'utils/wx'
export default {
  name: 'app-root',
  created () {
    getWXTicket({ fromUrl: window.location.href.split('#')[0] }).then(data => {
      data.jsApiList = wxApis
      window.wx.config(data)
    })
  }
}
</script>
