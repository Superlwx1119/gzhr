<template>
  <!--  拨付单审核-->
  <div class="documentsAudit">
    <section class="layer-tab">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="拨付信息" name="first">
          <Allocated :show-audit-query="true" :show-detail-save="true" @select="handleSelect" @row-click="rowClick">
            <template slot="left-tools">
              <div class="box-tools">
                <el-button type="primary" @click="auditAll">审核</el-button>
                <el-button type="danger" @click="cancelAuditAll">取消审核</el-button>
              </div>
            </template>
            <template slot="right-tools">
              <el-button type="primary" @click="audit">审核</el-button>
              <el-button type="danger" @click="cancelAudit">取消审核</el-button>
            </template>
          </Allocated>
        </el-tab-pane>
        <el-tab-pane label="业务信息" name="second">
          <Business :show-audit-query="true">
            <template slot="tools">
              <div slot="table-title" class="box-header">
                <span class="box-title">业务明细列表</span>
              </div>
            </template>
          </Business>
        </el-tab-pane>
      </el-tabs>
    </section>
    <Audit :show.sync="auditShow" />
  </div>
</template>

<script>
import Allocated from '../components/allocated'
import Business from '../components/business'
export default {
  name: 'DocumentsAudit',
  components: {
    Allocated,
    Business
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
    auditAll() { this.auditShow = true },
    cancelAuditAll() {
      this.$msgConfirm('是否取消审核？').then(res => {
        this.$msgSuccess('取消成功')
      }).catch(err => {
        this.$msgInfo(err)
      })
    },
    audit() { this.auditShow = true },
    cancelAudit() {
      this.$msgConfirm('是否取消审核？').then(res => {
        this.$msgSuccess('取消成功')
      }).catch(err => {
        this.$msgInfo(err)
      })
    }
  }
}
</script>

<style scoped lang="scss"></style>
