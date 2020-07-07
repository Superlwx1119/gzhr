<template>
  <!--  政治面貌-->
  <el-select
    :value="currValue"
    placeholder="请选择"
    :disabled="_disabled"
    style="width: 100%"
    @input="handleSelectChange($event)"
  >
    <el-option v-for="(v, i) in options" :key="i" :label="v.name" :value="v.value" />
  </el-select>
</template>

<script>
export default {
  components: {},
  mixins: [],
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currValue: this.value,
      options: [
        { name: '团员', value: '1' },
        { name: '党员', value: '2' },
        { name: '群众', value: '3' }
      ]
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
