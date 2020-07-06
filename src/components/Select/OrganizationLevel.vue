<template>
  <div>
    <!-- 单位级别 -->
    <el-select v-model="selectValue" placeholder="请选择" @change="handleSelectChange">
      <el-option label="中央、国家级(正)" value="0" />
      <el-option label="中央、国家级(副)" value="1" />
      <el-option label="部级" value="2" />
      <el-option label="副部级" value="3" />
      <el-option label="厅级" value="4" />
    </el-select>
  </div>
</template>

<script type="text/javascript">
export default {
  components: {

  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectValue: '',
      options: [
        { label: '已提交申报数据', value: '1' },
        { label: '已提交申报材料', value: '2' },
        { label: '中心已受理', value: '3' }
      ]
    }
  },
  watch: {
    value: {
      handler(val) {
        this.selectValue = val
      },
      immediate: true
    }
  },
  created() {
    console.log(this.$store.state)
    this.$getType('rb0150')
  },
  methods: {
    handleSelectChange(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 100%;
}
</style>
