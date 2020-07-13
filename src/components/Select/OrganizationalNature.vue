<template>
  <div>
    <!-- 单位性质 -->
    <el-select v-model="selectValue" placeholder="请选择" @change="handleSelectChange">
      <el-option v-for="item of options" :key="item.value" :label="item.label" :value="item.value" />
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
        { label: '机关单位', value: '1' },
        { label: '事业单位(差额)', value: '2' },
        { label: '事业单位(全额)', value: '3' }
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
