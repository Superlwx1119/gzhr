<template>
  <!--  手术名称-->
  <el-select :value="currValue" filterable remote :remote-method="remoteMethod" :disabled="_disabled" :loading="loading" placeholder="请选择" style="width: 100%" @input="handleSelectChange($event)">
    <el-option label="中国建设银行" value="1" />
    <el-option label="中国银行" value="2" />
    <el-option label="中国农业银行" value="3" />
    <el-option label="中国工商银行" value="4" />
    <el-option label="中国交通银行" value="5" />
  </el-select>
</template>

<script>
export default {
  name: 'OperationName',
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
      loading: false
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
      this.$emit('change', v)
    },
    //  远程搜索
    remoteMethod() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>
