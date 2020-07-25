<template>
  <div>
    <!-- 来源类型 -->
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
    if (this.$store.state.dictionary.dictionary['rc0212']) {
      this.options = this.$store.state.dictionary.dictionary['rc0212']
      return
    }
    this.$getType('rc0212', (res) => {
      this.options = res
      const dictionary = {}
      dictionary.rc0212 = res
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
