<template>
  <div class="detail">
    <form-dialog title="柱状图" width="1200px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <Chart :height="'600px'" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd('addForm')">关闭</el-button>
      </span>
    </form-dialog>
  </div>
</template>

<script>
import Chart from '@/components/Charts/MixChart'
// import echarts from 'echarts'
export default {
  name: 'Detail',
  components: {
    Chart
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      chart: null,
      multipleSelection: [],
      loading: false,
      activeName: 1,
      showDetail: false
    }
  },
  methods: {
    addIsShow(v) {
      this.$emit('update:show', v)
    },
    //  取消新增弹窗
    cancelAdd(formName) {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss"></style>
