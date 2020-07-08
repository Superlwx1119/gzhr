<template>
  <!--  考评等级-->
  <el-select :value="currValue" placeholder="请选择" style="width: 100%" @input="handleSelectChange($event)">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  name: 'AuditStatus',
  components: {},
  mixins: [],
  props: {
    value: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      currValue: this.value,
      options: [
        { label: '优秀', value: '1' },
        { label: '合格', value: '2' },
        { label: '不合格', value: '3' }
      ]
    }
  },
  computed: {},
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
