<template>
  <div>
    <!-- 行政区划 -->
    <el-cascader
      v-model="selectValue"
      style="width: 100%"
      :props="props"
      @input="handleSelectChange($event)"
    />
    <!-- <el-select v-model="selectValue" placeholder="请选择" @change="handleSelectChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.codeName"
        :value="item.codeValue"
      /></el-select> -->
  </div>
</template>

<script type="text/javascript">
import { getOrgAreaSub } from '@/api/Common/Request'
export default {
  components: {

  },
  props: {
    value: {
      type: Array,
      default: function() { return [] }
    }
  },
  data() {
    return {
      selectValue: [],
      options: [
        // { label: '是', value: '1' },
        // { label: '否', value: '2' }
      ],
      props: {
        lazy: true,
        checkStrictly: true,
        lazyLoad(node, resolve) {
          const { level } = node
          getOrgAreaSub({ orguntId: level === 0 ? '520000' : node.value }).then(res => {
            if (res.code === 0) {
              let nodes = []
              if (res.data.length > 0) {
                nodes = res.data.map(item => ({
                  value: item.value,
                  label: item.name,
                  leaf: level >= 2
                }))
              }
              resolve(nodes)
            }
          })
        }
      }
    }
  },
  watch: {
    value: function(newValue) {
      this.selectValue = newValue
    }
  },
  created() {
    // getOrgAreaSub({ orguntId: '520000' }).then(res => {
    //   console.log(res)
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
