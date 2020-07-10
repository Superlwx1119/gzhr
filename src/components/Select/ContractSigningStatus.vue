<template>
  <div>
    <!-- 合同签订状态 -->
    <el-select v-model="selectValue" placeholder="请选择" filterable @change="handleSelectChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
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
        { label: '签订固定期限聘用合同', value: '1' },
        { label: '签订项目合同', value: '2' },
        { label: '签订劳动合同', value: '3' },
        { label: '未签订合同', value: '4' },
        { label: '聘用至退休', value: '5' }
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
