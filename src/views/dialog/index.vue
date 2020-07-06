<template>
  <div>
    <el-button type="primary" @click="show = true">buttonCont</el-button>
    <el-button type="primary" @click="handleSuccess">操作成功</el-button>
    <el-button type="primary" @click="handleError">操作失败</el-button>
    <el-button type="primary" @click="handleConfirm">确认操作</el-button>
    <enter :show.sync="show" />
  </div>
</template>

<script>
import Enter from './components/enter'
export default {
  name: '',
  components: {
    'enter': Enter
  },
  mixins: [],
  props: {},
  data() {
    return {
      show: false
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    // 成功提醒
    handleSuccess() {
      this.$msgSuccess('操作成功')
    },
    // 失败提醒
    handleError() {
      this.$msgError('操作失败')
    },
    // 确认框
    handleConfirm() {
      this.$msgConfirm('是否作废？').then(res => {
        this.$msgSuccess(res)
      }).catch(err => {
        this.$msgInfo(err)
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
