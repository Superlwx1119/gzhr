<template>
  <div>
    <!-- 单位 -->
    <el-select v-model="selectValue" :disabled="disabled" placeholder="请选择" filterable @change="handleSelectChange">
      <el-option v-for="(item,index) of options" :key="index" :label="item.aab069" :value="item.aab001" />
    </el-select>
  </div>
</template>

<script type="text/javascript">
import { queryCorpInfo } from '@/api/BaseInformation/OrganizationInformationManagement/AddOrganizationApply'
export default {
  components: {

  },
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
    if (this.$store.state.dictionary.dictionary['aab069']) {
      this.options = this.$store.state.dictionary.dictionary['aab069']
      return
    }
    queryCorpInfo().then(res => {
      res.data.forEach(item => {
        item.aab001 = item.aab001.toString()
      })
      this.options = res.data
      const dictionary = {}
      dictionary.aab069 = res.data
      this.$store.dispatch('dictionary/setDictionary', dictionary)
    })
    // this.$getType('aab069', (res) => {
    //   this.options = res
    //   const dictionary = {}
    //   dictionary.aab069 = res
    //   this.$store.dispatch('dictionary/setDictionary', dictionary)
    // })
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
