<template>
  <Drawer :title="drawerTitle" :size="size" :show="isDrawerVisible" @update:isShow="isShow" @resetForm="resetForm">
    <div class="drawer-content">
      <div class="box" style="height: auto">
        <box-title title-name="就医结算信息" />
        <div class="box-body">
          <table-items
            :item-datas="itemsDatas"
            :form-datas="formsDatas"
          />
        </div>
      </div>
      <div class="table-wrapper box">
        <box-title title-name="扣款明细" />
        <MyTableView :border="true" :columns="deductionColumns" :data="deductionData" />
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
          '费用明细流水号': '8372883213',
          '医疗机构三大目录编码': '2121212',
          '医疗机构三大目录名称': '医药',
          '本条费用明细扣款金额(元)': '9281.83',
          '医疗费用扣款原因': '药不能停',
          '就诊记录号(本地)': '32432',
          '医院编码': '213213213',
          '备注': '药不能停',
          '经办人': 'alex',
          '经办时间': '2020-02-01'
        }
      ],
      itemsDatas: [
        [
          { label: '比对结果', prop: '比对结果' },
          { label: '就医地所属省', prop: '就医地所属省' },
          { label: '就医地所属市', prop: '就医地所属市' }
        ],
        [{ label: '就医地所属区县', prop: '就医地所属区县' },
          { label: '医疗机构编码', prop: '医疗机构编码' },
          { label: '医疗机构名称', prop: '医疗机构名称' }],
        [
          { label: '清分年月', prop: '清分年月' },
          { label: '业务类型', prop: '业务类型' },
          { label: '就诊记录号', prop: '就诊记录号' }
        ],
        [
          { label: '身份证号', prop: '身份证号' },
          { label: '姓名', prop: '姓名' },
          { label: '性别', prop: '性别' }
        ],
        [
          { label: '异地就医类型', prop: '异地就医类型' },
          { label: '入院日期', prop: '入院日期' },
          { label: '出院日期', prop: '出院日期' }
        ],
        [
          { label: '结算日期', prop: '结算日期' },
          { label: '总费用(元)', prop: '总费用(元)' },
          { label: '个人支付费用(元)', prop: '个人支付费用(元)' }
        ],
        [
          { label: '记账费用(元)', prop: '记账费用(元)' },
          { label: '审核扣减费用(元)', prop: '审核扣减费用(元)' },
          { label: '预付金实际支付费用(元)', prop: '预付金实际支付费用(元)' }
        ],
        [
          { label: '自费费用(元)', prop: '自费费用(元)' },
          { label: '个人自付费用(元)', prop: '个人自付费用(元)' },
          { label: '备注', prop: '备注' }
        ]
      ],
      formsDatas: {
        '比对结果': '一致',
        '就医地所属省': '湖南省',
        '就医地所属市': '长沙市',
        '就医地所属区县': '天心区',
        '医疗机构编码': '1290821',
        '医疗机构名称': '第一医院',
        '清分年月': '2020-01-01',
        '业务类型': '1',
        '就诊记录号': '89278921',
        '身份证号': '2109487012948',
        '姓名': 'iuwq',
        '性别': 'man',
        '异地就医类型': 'oiue',
        '入院日期': '2020-02-01',
        '出院日期': '2020-04-01',
        '结算日期': '2020-05-01',
        '总费用(元)': '392',
        '个人支付费用(元)': '321',
        '记账费用(元)': '123',
        '审核扣减费用(元)': '32',
        '预付金实际支付费用(元)': '12',
        '自费费用(元)': '32',
        '个人自付费用(元)': '32',
        '备注': '备注'
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

