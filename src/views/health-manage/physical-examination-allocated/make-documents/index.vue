<template>
  <!--  制作拨付单-->
  <div class="makeDocuments">
    <section class="layer-tab">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="拨付信息" name="first">
          <Allocated :show-detail-save="true" detail-height="calc(100% - 228px)" @select="handleSelect" @row-click="rowClick">
            <template slot="left-tools">
              <div class="box-tools">
                <el-button type="primary" @click="allocatedCalculateAll">批量拨付计算</el-button>
                <el-button type="primary" @click="allocatedSaveAll">批量拨付保存</el-button>
              </div>
            </template>
            <template slot="right-tools">
              <el-button type="primary" @click="allocatedCalculate">拨付计算</el-button>
              <el-button type="primary" @click="allocatedSave">拨付保存</el-button>
            </template>
          </Allocated>
        </el-tab-pane>
        <el-tab-pane label="业务信息" name="second">
          <Business :show-audit-query="true" :show-cancel-btn="true" @select="selectAll">
            <template slot="tools">
              <div slot="table-title" class="box-header handle">
                <span class="box-title">业务明细列表</span>
                <div slot="title-btns" class="box-tools">
                  <el-button type="danger" @click="cancelAllocated">取消拨付</el-button>
                </div>
              </div>
            </template>
          </Business>
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>

<script>
import Allocated from '../components/allocated'
import Business from '../components/business'
export default {
  name: 'MakeDocuments',
  components: {
    Allocated,
    Business
  },
  mixins: [],
  props: {},
  data() {
    return {
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
    allocatedCalculateAll() { this.$msgSuccess('计算成功！') },
    allocatedSaveAll() { this.$msgSuccess('保存成功！') },
    allocatedCalculate() { this.$msgSuccess('计算成功！') },
    allocatedSave() { this.$msgSuccess('保存成功！') },
    //  业务信息全选
    selectAll(val) { this.businessSelection = val },
    cancelAllocated() {
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
