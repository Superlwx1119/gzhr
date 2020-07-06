<template>
  <normal-layer
    :is-show="show"
    title-name="权益单预览"
    title-need-handle
    @update:isShow="addIsShow"
  >
    <template slot="title-btns">
      <el-button @click="printClick">打印预览</el-button>
      <el-button type="primary" @click="exportClick">导出</el-button>
    </template>
  </normal-layer>
</template>
<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
export default {
  components: {
    NormalLayer
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }},
  methods: {
    addIsShow(v) {
      this.$emit('update:show', v)
    },
    printClick() {

    },
    exportClick() {

    }
  }

}
</script>
