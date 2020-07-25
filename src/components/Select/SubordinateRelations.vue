<template>
  <!--  隶属关系-->
  <el-select v-model="currValue" placeholder="请选择" @change="handleSelectChange">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.codeName"
      :value="item.codeValue"
    /></el-select>
</template>

<script>
export default {
  name: 'Relationship',
  components: {},
  mixins: [],
  props: {
    value: {
      type: [Array, String],
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
    if (this.$store.state.dictionary.dictionary['aab021']) {
      this.options = this.$store.state.dictionary.dictionary['aab021']
      return
    }
    this.$getType('aab021', (res) => {
      this.options = res
      const dictionary = {}
      dictionary.aab021 = res
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

<style scoped>

</style>
