<template>
  <div>
    <!-- 主管部门 -->
    <el-select v-model="selectValue" placeholder="请选择" filterable @change="handleSelectChange">
      <el-option label="芦淞区" value="1" />
      <el-option label="芦淞区组织部" value="0" />
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
  methods: {
    handleSelectChange(v) {
      this.$emit('update:select', v)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 100%;
}
</style>
