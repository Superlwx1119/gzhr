<template>
  <div>
    <!-- 复刻标志 -->
    <el-select v-model="selectValue" placeholder="请选择" filterable @change="handleSelectChange">
      <!-- <el-option label="申请/退回" value="0" />
      <el-option label="审核完成" value="1" />
      <el-option label="主管审核" value="2" /> -->
      <el-option v-for="(item,index) of options" :key="index" :label="item.codeName" :value="item.codeValue" />
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
      options: []
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
