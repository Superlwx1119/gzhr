<template>
  <Drawer :title="drawerTitle" :size="size" :show="isDrawerVisible" @update:isShow="isShow" @resetForm="resetForm">
    <div class="drawer-content">
      <div class="box" style="height: auto">
        <box-title title-name="异地费用初审明细信息" />
        <div class="box-body">
          <table-items
            :item-datas="itemsDatas"
            :form-datas="formsDatas"
          />
        </div>
      </div>
      <div class="table-wrapper box">
        <box-title title-name="费用明细" />
        <MyTableView :border="true" :columns="deductionColumns" :data="deductionData">
          <template slot="operation" slot-scope="scope">
            <el-button v-if="!scope.row.isEdit" type="text" class="modify" @click="deduction(scope.row)">扣减</el-button>
            <el-button v-if="scope.row.isEdit" type="text" class="modify" @click="cancelDeduction(scope.row)">取消扣减</el-button>
            <el-button v-if="scope.row.isEdit" type="text" class="modify" @click="saveDeduction(scope.row)">保存</el-button>
          </template>
          <template slot="suspensionValue" slot-scope="scope">
            <span v-if="!scope.row.isEdit">{{ scope.row.暂扣金额 }}</span>
            <el-input v-else v-model="scope.row.暂扣金额1" />
          </template>
          <template slot="suspensionReason" slot-scope="scope">
            <span v-if="!scope.row.isEdit">{{ scope.row.暂扣原因 }}</span>
            <el-select v-else v-model="scope.row.暂扣原因1" clearable style="width: 100%">
              <el-option label="选项1" :value="1" />
              <el-option label="选项2" :value="2" />
            </el-select>
          </template>
        </MyTableView>
        <Pagination />
      </div>
    </div>
    <div slot="footer" class="drawer-footer">
      <el-button @click="close">关闭</el-button>
    </div>
  </Drawer>
</template>

<script>
import { deductionColumns } from './../tableColumns'
import Drawer from '@/components/Drawer/Drawer'
import TableItems from '@/views/components/PageLayers/table-items'
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    TableItems,
    BoxTitle,
    Drawer
  },
  props: {
    drawerTitle: {
      type: String,
      default: ''
    },
    isDrawerVisible: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '30%'
    }
  },
  data() {
    return {
      deductionColumns,
      deductionData: [
        {
          '就医登记号': '32134214',
          '费用序列号': '323232',
          '目录编码': '321443243',
          '目录名称': 'ewq',
          '目录类别': 'sdf',
          '目录等级': '3',
          '数量': '4',
          '单价(元)': '12',
          '金额(元)': '54',
          '暂扣金额': '213',
          '暂扣金额1': '213',
          '暂扣原因': '选项1',
          '暂扣原因value': '1',
          '暂扣原因1': '选项1',
          '费用发生日期': '2020-02-01',
          '限制用药标识': 'erere',
          '限制范围': 'erdf',
          '是否全自费': '是',
          isEdit: false
        },
        {
          '就医登记号': '784584534',
          '费用序列号': '905486',
          '目录编码': '769878',
          '目录名称': 'dsf',
          '目录类别': 'fdsf',
          '目录等级': '5',
          '数量': '4',
          '单价(元)': '12',
          '金额(元)': '54',
          '暂扣金额': '213',
          '暂扣金额1': '213',
          '暂扣原因': '选项1',
          '暂扣原因value': '1',
          '暂扣原因1': '选项1',
          '费用发生日期': '2020-02-01',
          '限制用药标识': 'erere',
          '限制范围': 'erdf',
          '是否全自费': '是',
          isEdit: false
        }
      ],
      itemsDatas: [
        [
          { label: '审核状态', prop: '审核状态' },
          { label: '结算方式', prop: '结算方式' },
          { label: '业务类型', prop: '业务类型' }
        ],
        [
          { label: '身份证号码', prop: '身份证号码' },
          { label: '姓名', prop: '姓名' },
          { label: '性别', prop: '性别' }
        ],
        [
          { label: '疾病诊断', prop: '疾病诊断' },
          { label: '住院天数', prop: '住院天数' },
          { label: '入院时间', prop: '入院时间' }
        ],
        [
          { label: '出院时间', prop: '出院时间' },
          { label: '医疗费用(元)', prop: '医疗费用(元)' },
          { label: '扣付金额', prop: '扣付金额' }
        ],
        [
          { label: '扣减原因', prop: '扣减原因' },
          { label: '基金总支付', prop: '基金总支付' },
          { label: '个人自付金额', prop: '个人自付金额' }
        ],
        [
          { label: '基本统筹支付金额', prop: '基本统筹支付金额' },
          { label: '大病统筹支付金额', prop: '大病统筹支付金额', colspan: 3 }
        ]
      ],
      formsDatas: {
        '审核状态': 'wq',
        '结算方式': 'wq',
        '业务类型': 'wq',
        '身份证号码': '3213214214214',
        '姓名': 'ds',
        '性别': 's',
        '疾病诊断': 'we',
        '住院天数': '32',
        '入院时间': '2020-01-02',
        '出院时间': '2020-03-04',
        '医疗费用(元)': '12',
        '扣付金额': '212',
        '扣减原因': 'ew',
        '基金总支付': '212',
        '个人自付金额': '234',
        '基本统筹支付金额': '2144',
        '大病统筹支付金额': '549'
      }
    }
  },
  watch: {},
  methods: {
    close() {
      this.$emit('update:isShow', false)
    },
    isShow(v) {
      this.$emit('update:isShow', v)
    },
    resetForm() {
      this.$emit('update:isShow', false)
    },
    deduction(row) {
      // 改变编辑状态
      this.$set(row, 'isEdit', true)
      // 还原编辑框的值
      this.$set(row, '暂扣金额1', row.暂扣金额)
      this.$set(row, '暂扣原因1', row.暂扣原因)
    },
    cancelDeduction(row) {
      // 改变编辑状态
      this.$set(row, 'isEdit', false)
    },
    saveDeduction(row) {
      // 改变编辑状态
      this.$set(row, 'isEdit', false)
    }
  }

}
</script>

<style lang="scss" scoped>
.drawer-content {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    bottom: 50px;
    overflow-y: scroll;
    .table-wrapper {
        height: 500px;
        padding: 0 10px 10px;
        margin-top: 0;
    }
}
</style>

