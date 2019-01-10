<template>
  <div class="msg">
    <p :style="styleObj">{{value}}</p>
  </div>
</template>

<script>
export default {
  name: 'SegiTips',
  props: {
    value: {
      type: String,
      default: ''
    },
    styleObj: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.msg{
  display: inline-block;
  p{
    height: 30px;
    padding: 0 8px;
    line-height: 30px;
    border: 1px solid #45a2ff;
    background: #ecf6ff;
    border-radius: 4px;
  }
}
</style>
