<template>
  <el-row :gutter="10" class="tab-body">
    <el-col :md="10" :lg="8" :xl="6" class="tab-body-left">
      <el-form ref="queryForm" label-width="105px">
        <left-search-table :search-height="'150px'" :show-more-btn="false">
          <el-form-item label="选择人员" prop="xzry">
            <el-select v-model="queryForm.xzry" style="width:100%" />
          </el-form-item>
          <el-form-item label="险种" prop="xz">
            <el-select v-model="queryForm.xz" style="width:100%">
              <el-option label="基本医疗保险" value="基本医疗保险" />
              <el-option label="大额互助" value="大额互助" />
            </el-select>
          </el-form-item>
          <template slot="btn">
            <el-button @reset="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button type="primary" @click="paymentStatus">缴费情况</el-button>
          </template>
          <div slot="list" class="box">
            <div class="box-header handle">
              <span class="box-title">单位零星应收核定{{ allTableData.leftTableTitle }}列表</span>
              <div class="box-tools">
                <el-button v-if="allTableData.leftTableTitle === '未试算'" type="primary" @click="batchCompute">批量计算</el-button>
                <el-button v-if="allTableData.leftTableTitle === '已试算'" type="danger" @click="batchDelete">批量删除</el-button>
              </div>
            </div>
            <div class="box-body" style="height: calc(100%-150px)">
              <my-table-view :border="true" :max-cloumns="5" :first-highlight="true" :highlight-current-row="true" :columns="allTableData.leftTableColumns | filterColumns(5)" :data="allTableData.leftTableData" @rowClick="rowClick" @update:multipleSelection="selectAll" />
              <Pagination layout="total,prev, pager, next,jumper" />
            </div>
          </div>
        </left-search-table>
      </el-form>
    </el-col>
    <el-col :md="14" :lg="16" :xl="18" class="tab-body-right">
      <div class="box">
        <div class="box-body">
          <RightDetailInfo :title="'单位零星应收核定详情'" :options="allTableData.leftTableColumns.slice(2)" :list-data="currDetail">
            <slot slot="tools" name="right-tools">
              <el-button v-if="allTableData.leftTableTitle === '未试算'" type="primary" @click="compute">计算</el-button>
              <el-button v-if="allTableData.leftTableTitle === '已试算'" type="danger" @click="deleteItemData">删除</el-button>
            </slot>
          </RightDetailInfo>
          <section class="layer" :style="allTableData.leftTableTitle === '未试算' ? 'height: calc(100% - 179px)' : 'height: calc(100% - 142px)' ">
            <div class="layer-tab">
              <el-tabs v-model="activeName" type="border-card">
                <el-tab-pane label="单位汇总" name="first">
                  <div class="box">
                    <div class="box-body">
                      <my-table-view style="height:calc(100% - 20px)!important;" :border="true" :max-cloumns="7" :columns="allTableData.rightUnitTableColumns" :data="allTableData.rightUnitTableData" />
                      <Pagination />
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="个人明细" name="second">
                  <div class="box">
                    <div class="box-body">
                      <my-table-view style="height:calc(100% - 20px)!important;" :border="true" :max-cloumns="7" :columns="allTableData.rightPersonalDetailsColumns" :data="allTableData.rightPersonalDetailsData" />
                      <Pagination />
                    </div>
                  </div></el-tab-pane>
              </el-tabs>
            </div>
          </section>
        </div>
      </div>
    </el-col>
    <PaymentStatusDialog :is-dialog-visible="isPaymentStatusVisible" @closeAll="closePaymentStatusDialog" />
  </el-row>
</template>

<script>
import LeftSearchTable from '@/components/SearchList/LeftSearchTable'
import pageHandle from '@/mixins/pageHandle'
import PaymentStatusDialog from './PaymentStatusDialog'

export default {
  name: 'Allocated',
  components: { LeftSearchTable, PaymentStatusDialog },
  mixins: [pageHandle],
  props: {
    showDetailSave: { type: Boolean, default: false },
    showAuditQuery: { type: Boolean, default: false },
    showAllocatedQuery: { type: Boolean, default: false },
    showAllocatedDocuments: { type: Boolean, default: true },
    tableHeight: { type: String, default: 'calc(100% - 40px)' },
    allTableData: { type: Object, default: () => {} }
  },
  data() {
    return {
      activeName: 'first',
      queryForm: {
        xzry: '',
        xz: ''
      },
      currDetail: this.allTableData.leftTableData[0],
      leftSelectRows: [],
      isPaymentStatusVisible: false
    }
  },
  computed: {},
  watch: {
    allTableData: {
      handler(newVal, oldVal) {
        this.currDetail = this.allTableData.leftTableData[0]
      },
      immediate: true
    }
  },
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.currDetail = this.allTableData.leftTableData[0]
      // this.$emit('row-click', this.tableData[0])
    },
    //  全选
    selectAll(val) {
      console.log(val)
      this.leftSelectRows = val
      this.$emit('select', val)
    },
    rowClick(v) {
      console.log(v)
      this.currDetail = v.row
      this.$emit('row-click', v.row)
    },
    detailSave() { this.$msgSuccess('保存成功!') },
    batchCompute() {
      if (this.leftSelectRows.length > 0) {
        this.$msgSuccess('计算完成！')
      } else {
        this.$msgError('请选择要操作的数据！')
      }
    },
    compute() {
      this.$msgSuccess('计算完成！')
    },
    batchDelete() {
      if (this.leftSelectRows.length > 0) {
        this.$msgSuccess('删除成功！')
      } else {
        this.$msgError('请选择要操作的数据！')
      }
    },
    deleteItemData() {
      this.$msgSuccess('删除成功！')
    },
    // 缴费情况
    paymentStatus() {
      this.isPaymentStatusVisible = true
    },
    closePaymentStatusDialog() {
      this.isPaymentStatusVisible = false
    }
  }
}
</script>

<style scoped lang="scss"></style>
