<template>
  <!--新增单位申报-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="5">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="单位">
            <OrganizationName v-model="queryForm.单位" />
          </template>
          <template slot="单位类型">
            <OrganizationType v-model="queryForm.aab019" @input="function(){return handleSelectChange(queryForm.aab019,'aab019') }" />
          </template>
          <template slot="是否参公">
            <IfElseJoin v-model="queryForm.是否参公" />
          </template>
          <template slot="单位级别">
            <OrganizationLevel v-model="queryForm.rb0150" @input="function(){return handleSelectChange(queryForm.rb0150,'rb0150') }" />
          </template>
          <template slot="复刻标志">
            <RetroMark v-model="queryForm.复刻标志" />
          </template>
          <template slot="主管部门">
            <OrganizationName v-model="queryForm.主管部门" />
          </template>
          <template slot="行业代码">
            <Industry v-model="queryForm.aab022" @input="function(){return handleSelectChange(queryForm.aab022,'aab022') }" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">新增单位申报列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="showDialog('add')">新增</el-button>
          <el-button type="primary" @click="calculate">数据导入</el-button>
        </div>
      </div>
      <template>
        <my-table-view v-loading="loading" :border="true" :max-cloumns="20" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <!-- <el-button type="text" @click="showDialog('apply')">申报</el-button> -->
            <el-button type="text" @click="showDialog('detail',scope.row)">详情</el-button>
            <el-button type="text" @click="showDialog('edit',scope.row)">修改</el-button>
            <!-- <el-button type="text" class="delete" @click="deleteRow(scope.row)">删除</el-button> -->
          </template>
        </my-table-view>
        <Pagination :data="pageInfo" @refresh="pageChange" />
      </template>
    </normal-layer>
    <DetailDialog ref="detailDialog" v-model="isShowDetail" :detail-info="detailInfo" :operation="operation" dialog-title="单位信息查看" @search="search" />
  </div>
</template>

<script>
import { queryCorpList } from '@/api/BaseInformation/OrganizationInformationManagement/AddOrganizationApply'
import FormItems from '@/views/components/PageLayers/form-items'
import Industry from '@/components/Select/Industry'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import DetailDialog from '@/views/components/DetailDialog/index'
import OrganizationLevel from '@/components/Select/OrganizationLevel'
import OrganizationType from '@/components/Select/OrganizationType'
import OrganizationName from '@/components/Select/OrganizationName'
import IfElseJoin from '@/components/Select/IfElseJoin'
import RetroMark from '@/components/Select/RetroMark'
import pageHandle from '@/mixins/pageHandle'
export default {
  name: 'NewOrganizationApply',
  components: { Industry, FormItems, NormalLayer, DetailDialog, OrganizationLevel, OrganizationType, RetroMark, OrganizationName, IfElseJoin },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      detailInfo: {},
      loading: false,
      isShowDetail: false,
      reportVisible: false,
      operation: 'detail',
      itemsDatas: [
        // { label: '年度', prop: '年度1', type: 'dateYear' },
        { label: '单位', prop: '单位', type: 'custom' },
        { label: '单位类型', prop: '单位类型', type: 'custom' },
        // { label: '是否参公', prop: '是否参公', type: 'custom' },
        { label: '单位级别', prop: '单位级别', type: 'custom' },
        // { label: '复刻标志', prop: '复刻标志', type: 'custom' },
        { label: '主管部门', prop: '主管部门', type: 'custom' },
        { label: '行业代码', prop: '行业代码', type: 'custom' }
        // { label: '组织机构代码', prop: '组织机构代码', type: 'input' }
      ],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '单位编码', prop: 'aab001' },
        { label: '单位名称', prop: 'aab069' },
        { label: '社会信用代码', prop: 'c' },
        { label: '单位类型', prop: 'aab019' },
        { label: '是否参公', prop: 'rb0195' },
        { label: '主管部门', prop: 'aab023' },
        { label: '行业代码', prop: 'aab022' },
        { label: '编制数', prop: 'rb0705' },
        { label: '法人代表', prop: 'i' },
        { label: '联系人', prop: 'k' },
        { label: '联系电话', prop: 'l' },
        { label: '地址', prop: 'm' },
        { label: '批准编制日期', prop: 'n' },
        { label: '批准编制文号', prop: 'o' },
        { label: '法人单位编码', prop: 'p' },
        { label: '单位主要工作职责', prop: 'r' },
        { label: '操作', type: 'operation', fixed: 'right', width: '160px' }

      ],
      tableData: []
    }
  },
  computed: {},
  watch: {},
  created() {
    this.search()
  },
  mounted() {
  },
  methods: {
    showDialog(type, row) {
      this.operation = type
      this.$refs.detailDialog.queryCorpDetail('')
      if (type === 'detail' || type === 'edit') {
        this.getDetail(row.aab001)
        return
      }
      this.isShowDetail = true
    },
    search() {
      const form = Object.assign(this.queryForm, { pageNum: this.pageInfo.pageNum, pageSize: this.pageInfo.pageSize, aae016: '0' })
      this.$search(queryCorpList, form)
    },
    getDetail(id) {
      // queryCorpDetail({ id: id }).then(res => {
      //   this.detailInfo = Object.assign(res.data, { aab001: id })
      //   this.isShowDetail = true
      // })
      this.isShowDetail = true
      this.$refs.detailDialog.queryCorpDetail(id)
    },
    pageChange(data) {
      this.pageInfo = data.pagination
      this.search()
    },
    deleteRow(row) {
      this.$msgConfirm('确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$msgSuccess('删除成功')
      }).catch(() => {
        this.$msgInfo('已取消删除')
      })
    },
    handleSave() {
      this.$msgSuccess('保存成功！')
    },
    handleSelectChange(v, type) {
      this.queryForm[type] = v
    },
    calculate() { this.reportVisible = true }
  }
}
</script>

<style scoped lang="scss">
  /deep/ .el-table .el-table__body-wrapper{
    z-index: 0;
  }
</style>
