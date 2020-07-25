<template>
  <!-- 岗位等级 -->
  <el-select
    :value="currValue"
    style="width: 100%"
    :disabled="_disabled"
    placeholder="请选择"
    @input="handleSelectChange($event)"
  >
    <el-option v-for="(item,index) of options" :key="index" :label="item.codeName" :value="item.codeValue" />
  </el-select>
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
    if (this.$store.state.dictionary.dictionary['rc0703']) {
      this.options = this.$store.state.dictionary.dictionary['rc0703']
      return
    }
    this.$getTypeCodes('rc0703', (res) => {
      this.options = res
      const dictionary = {}
      dictionary.rc0703 = res
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
