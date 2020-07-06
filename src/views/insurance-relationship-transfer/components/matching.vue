<template>
  <div class="detail">
    <form-dialog title="个账匹配" width="1000px" new-calss="small" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <el-form ref="addForm" :model="addForm" label-width="105px">
            <div class="box-header handle">
              <span class="box-title">查询条件</span>
              <div class="box-tools">
                <el-button type="primary">查询</el-button>
              </div>
            </div>
            <el-row :gutter="12">
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="姓名">
                  <el-input v-model="addForm.姓名" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="金额">
                  <el-input v-model="addForm.金额" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="转出地">
                  <el-input v-model="addForm.转出地" placeholder="请输入" />
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">个账匹配结果</span>
              <div class="box-tools">
                <el-button type="primary" @click="selectRow">确定</el-button>
              </div>
            </div>
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :multiple-selection.sync="multipleSelection"
            >
              <template slot="select" slot-scope="scope">
                <el-select v-model="scope.row.确认情况" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </template>
              <template slot="operation" slot-scope="scope">
                <el-button type="text" class="modify" :class="scope.$index" @click="showDetail = true">详情</el-button>
              </template>
            </my-table-view>
            <Pagination :data="pageInfo" @refresh="pageChange" />
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd('addForm')">关闭</el-button>
      </span>
    </form-dialog>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  components: {
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      multipleSelection: [],
      loading: false,
      activeName: 1,
      showDetail: false,
      queryForm: {},
      options: [
        { label: '未确认', value: 1 },
        { label: '已确认', value: 2 }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '匹配方式', label: '匹配方式', align: 'center', overflow: true },
        { type: 'custom', slotName: 'select', prop: '确认情况', label: '确认情况', align: 'center', overflow: true },
        // { prop: '确认情况', label: '确认情况', align: 'center', overflow: true },
        { prop: '姓名', label: '姓名', align: 'center', overflow: true },
        { prop: '金额', label: '金额', align: 'center', overflow: true },
        { prop: '转出地', label: '转出地', align: 'center', overflow: true }
      ],
      tableData: [1, 2, 3].map(i => {
        return {
          匹配方式: '匹配方式',
          确认情况: '确认情况',
          姓名: '姓名',
          金额: '金额',
          转出地: '转出地'
        }
      }),
      addForm: {},
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      }
    }
  },
  methods: {
    pageChange(data) {
      this.pageInfo = data.pagination
    },
    selectRow(v) {
      if (this.multipleSelection.length > 1) {
        this.$msgError('只能选择一个结果')
        return
      }
      this.$emit('update:selectRow', this.multipleSelection)
      this.multipleSelection = []
    },
    addIsShow(v) {
      this.$emit('update:show', v)
    },
    //  取消新增弹窗
    cancelAdd(formName) {
      this.$emit('update:show', false)
    },
    //  提交新增弹窗
    addSubmit(formName) {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped lang="scss"></style>
