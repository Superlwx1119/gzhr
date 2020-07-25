<template>
  <!-- 进入方式 -->
  <el-select
    :value="currValue"
    style="width: 100%"
    :disabled="_disabled"
    placeholder="请选择"
    @input="handleSelectChange($event)"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.codeName"
      :value="item.codeValue"
    /></el-select>
</template>

<script>
export default {
  name: 'DiseaseType',
  components: {},
  mixins: [],
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currValue: this.value,
      options: []
    }
  },
  computed: {
    _disabled: function() {
      return this.disabled
    }
  },
  watch: {
    value: function(newValue) {
      this.currValue = newValue
    }
  },
  created() {
    if (this.$store.state.dictionary.dictionary['A2911']) {
      this.options = this.$store.state.dictionary.dictionary['A2911']
      return
    }
    this.$getTypeCodes('A2911', (res) => {
      this.options = res
      const dictionary = {}
      dictionary.A2911 = res
      this.$store.dispatch('dictionary/setDictionary', dictionary)
    })
  },
  mounted() {
  },
  methods: {
    handleSelectChange(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style scoped lang="scss"></style>
