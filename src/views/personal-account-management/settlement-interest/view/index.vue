<!-- 个人账户结息 -->
<template>

  <div class="item4 third-index ">
    <section class="layer layer-query">
      <div class="box">
        <div class="box-body">
          <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
            <div>
              <el-button @click="reset('queryForm')">重置</el-button>
              <el-button type="primary" @click="search('queryForm')">查询</el-button>
            </div>
          </FormItems>
        </div>
      </div>
    </section>
    <section class="layer layer-query">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">结息信息</span>
          <div class="box-tools">
            <!-- <el-button type="primary">保存</el-button> -->
          </div>
        </div>
        <div class="box-body">
          <FormItems :items-datas="basicInfo" :form-datas="basicForm" />
        </div>
      </div>
    </section>

    <section class="layer layer-result">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">结息明细信息</span>
          <div class="box-tools">
            <el-button type="primary" @click="batchDeleteEvent()">批量删除</el-button>
          </div>
        </div>
        <div class="box-body">
          <my-table-view
            v-loading="loading"
            :data="tableData"
            :columns="columns"
            :multiple-selection.sync="multipleSelection"
          >
            <template slot="operation" slot-scope="scope">
              <el-button type="error" class="modify" @click="deleteEvent(scope.row)">删除</el-button>
            </template>
          </my-table-view>
          <Pagination />
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import Columns from './columns'
export default {
  components: {
    FormItems
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      multipleSelection: [],
      itemsDatas: [
        { label: '查询条件', prop: 'xx', type: 'input' },
        { label: '姓名', prop: 'xx', type: 'input' },
        { label: '证件号码', prop: 'xx', type: 'input' },
        { label: '查询条件2', prop: 'xx', type: 'input' },
        { label: '单位名称', prop: 'xx', type: 'input' },
        { label: '单位编码', prop: 'xx', type: 'input' }
      ],
      queryForm: {
        xxx: ''
      },
      basicInfo: [
        { label: '计息类别', prop: 'xxx', type: 'select' }
      ],
      basicForm: {
        XXX: '-'
      },
      columns: Columns,
      tableData: [
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' },
        { name: 'xxx', code: 'xxx', nameCode: 'xxx' }
      ]
    }
  },
  methods: {
    search() {
      if (!this.queryForm.xxx) {
        this.$msgError('请先查询人员信息!')
      } else {
        this.$msgConfirm('确定执行保存操作?')
          .then(res => {
            this.$msgSuccess(res)
          })
          .catch(err => {
            this.$msgInfo(err)
          })
      }
    },
    deleteEvent(row) {
      this.$msgSuccess('删除成功')
    },
    batchDeleteEvent() {
      if (this.multipleSelection.length > 0) {
        this.$msgSuccess('批量删除成功')
      } else {
        this.$msgError('请至少选择一条数据')
      }
    }
  }
}
</script>

 <style lang="scss">
//  .pf-table .el-table {
//     min-height: 490px !important;
// }
 </style>
