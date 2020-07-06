<template>
  <!--拨付单审核-->
  <div class="documentsRegister">
    <Allocated :show-allocated-query="true" :show-allocated-documents="false" table-height="calc(100% - 52px)" detail-height="calc(100% - 188px)" @select="handleSelect" @row-click="rowClick">
      <template slot="left-tools">
        <div class="box-tools">
          <el-button type="primary" @click="allocatedAll">拨付登记</el-button>
          <el-button type="danger" @click="cancelAllocatedAll">取消拨付</el-button>
        </div>
      </template>
      <template slot="right-tools">
        <el-button type="primary" @click="allocated">拨付登记</el-button>
        <el-button type="danger" @click="cancelAllocated">取消拨付</el-button>
      </template>
    </Allocated>
  </div>
</template>

<script>
import Allocated from '../components/allocated'
export default {
  name: 'DocumentsRegister',
  components: {
    Allocated
  },
  mixins: [],
  props: {},
  data() {
    return {
      auditShow: false,
      activeName: 'first',
      selection: [],
      businessSelection: []
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    handleSelect(val) { this.selection = val },
    rowClick(val) { console.log(val) },
    allocated() { this.$msgSuccess('登记成功！') },
    cancelAllocated() {
      this.$msgConfirm('是否取消拨付？').then(res => {
        this.$msgSuccess('取消成功')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    allocatedAll() { this.$msgSuccess('登记成功！') },
    cancelAllocatedAll() {
      this.$msgConfirm('是否取消拨付？').then(res => {
        this.$msgSuccess('取消成功')
      }).catch(err => {
        this.$msgInfo(err)
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
