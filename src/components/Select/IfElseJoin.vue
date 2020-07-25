<template>
  <div>
    <!-- 是否参公 -->
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
      options: [
        // { label: '是', value: '1' },
        // { label: '否', value: '2' }
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
    if (this.$store.state.dictionary.dictionary['rb0195']) {
      this.options = this.$store.state.dictionary.dictionary['rb0195']
      return
    }
    this.$getType('rb0195', (res) => {
      this.options = res
      const dictionary = {}
      dictionary.rb0195 = res
      this.$store.dispatch('dictionary/setDictionary', dictionary)
    })
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
