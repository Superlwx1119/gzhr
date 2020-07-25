<template>
  <div>
    <!-- 健康状态 -->
    <el-select v-model="selectValue" placeholder="请选择" @change="handleSelectChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.codeName"
        :value="item.codeValue"
      /></el-select>
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
  created() {
    if (this.$store.state.dictionary.dictionary['aac033']) {
      this.options = this.$store.state.dictionary.dictionary['aac033']
      return
    }
    this.$getType('aac033', (res) => {
      this.options = res
      const dictionary = {}
      dictionary.aac033 = res
      this.$store.dispatch('dictionary/setDictionary', dictionary)
    })
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
