<template>
  <div>这是测试页面内容</div>
</template>

<script>
import { getDemoList } from 'service/demo'
import { setDocumentTitle } from 'utils'

export default {
  name: 'demo-index',
  created () {
    setDocumentTitle('测试页面')
    getDemoList({a: 1, b: '', c: undefined, d: 0}).then(data => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
