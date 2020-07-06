<template>
  <normal-layer
    :search-number="itemsDatas.length"
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>
    </template>

    <div class="box" style="height: auto">
      <box-title title-name="单位信息" />
      <div class="box-body" style="padding-right: 0;">
        <table-items
          :item-datas="itemsDatas1"
          :form-datas="formsDatas1"
        />
      </div>
    </div>

    <section class="layer" style="height: calc(100% - 60px)">
      <div class="layer-tab">
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane label="基本信息" name="first">
            <!-- <div class="box">
              <div class="box-body"> -->
            <div class="box" style="height: auto">
              <box-title title-name="基本信息" />
              <div class="box-body" style="padding-right: 0;">
                <table-items
                  :item-datas="itemsDatas2"
                  :form-datas="formsDatas2"
                />
              </div>
            </div>
            <div class="box" style="height: auto">
              <box-title title-name="对公账户" />
              <div class="box-body" style="padding-right: 0;">
                <table-items
                  :item-datas="itemsDatas3"
                  :form-datas="formsDatas3"
                />
              </div>
            </div>
            <!-- </div>
            </div> -->
          </el-tab-pane>

          <el-tab-pane label="参保信息" name="second">
            <div class="box">
              <div class="box-body" style="overflow-y: scroll;">
                <insurance-info />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="单位应缴信息" name="third">
            <div class="box">
              <div class="box-body">
                <unit-pay-info />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="变更信息" name="fourth">
            <div class="box">
              <div class="box-body">
                <change-info />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="制卡银行" name="fifth">
            <div class="box">
              <div class="box-body">
                <card-bank />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="员工花名册" name="sixth" class="sixth">
            <div class="box">
              <div class="box-body">
                <staff-roster />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="缴费历史汇总查询" name="seventh">
            <div class="box">
              <div class="box-body">
                <pay-history />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="用章备案" name="eighth">
            <div class="box">
              <div class="box-body">
                <badge-record />
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>

  </normal-layer>
</template>
<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import TableItems from '@/views/components/PageLayers/table-items'
import BoxTitle from '@/views/components/PageLayers/box-title'
import InsuranceInfo from '@/views/overall-query/unit-overall-query/components/InsuranceInfo/insuranceInfo'
import UnitPayInfo from '@/views/overall-query/unit-overall-query/components/UnitPayInfo/unitPayInfo'
import ChangeInfo from '@/views/overall-query/unit-overall-query/components/ChangeInfo/changeInfo'
import CardBank from '@/views/overall-query/unit-overall-query/components/CardBank/cardBank'
import StaffRoster from '@/views/overall-query/unit-overall-query/components/StaffRoster/staffRoster'
import PayHistory from '@/views/overall-query/unit-overall-query/components/PayHistory/payHistory'
import BadgeRecord from '@/views/overall-query/unit-overall-query/components/BadgeRecord/badgeRecord'
export default {
  components: {
    NormalLayer,
    FormItems,
    TableItems,
    BoxTitle,
    InsuranceInfo,
    ChangeInfo,
    UnitPayInfo,
    CardBank,
    StaffRoster,
    PayHistory,
    BadgeRecord
  },
  mixins: [PageHandle],
  data() {
    return {
      activeName: 'first',
      itemsDatas: [
        { label: '查询条件', prop: 'xxx', type: 'select' },
        { label: '单位名称', prop: 'xxx', type: 'input' },
        { label: '单位管理码', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: ''
      },
      itemsDatas1: [
        [
          { label: '单位名称', prop: 'aa' },
          { label: '单位类型', prop: 'aa' },
          { label: '单位编号', prop: 'aa' },
          { label: '虚拟社保号', prop: 'aa' }
        ]
      ],
      formsDatas1: {
        aa: '广州新东方科技有限公司'
      },
      itemsDatas2: [
        [

          { label: '行业风险类别', prop: 'bb' },
          { label: '特殊单位类型', prop: 'bb' },
          { label: '隶属关系', prop: 'bb' },
          { label: '经济类型', prop: 'bb' }
        ],
        [

          { label: '工商执照编号', prop: 'bb' },
          { label: '工商执照发照日期', prop: 'bb' },
          { label: '工商执照发招期限', prop: 'bb' },
          { label: '邮政编码', prop: 'bb' }
        ],
        [
          { label: '法人代表姓名', prop: 'bb' },
          { label: '法人代表身份证', prop: 'bb' },
          { label: '批准成立日期', prop: 'bb' },
          { label: '统一组织机构代码', prop: 'bb' }
        ],
        [
          { label: '联系人姓名', prop: 'bb' },
          { label: '联系人电话', prop: 'bb' },
          { label: '联系人手机', prop: 'bb' },
          { label: '联系人电子邮箱', prop: 'bb' }
        ],
        [
          { label: '所属行政区', prop: 'bb' },
          { label: '主管部门或总机构', prop: 'bb' },
          { label: '是否每年邮寄权益单', prop: 'bb' },
          { label: '税号', prop: 'bb' }
        ],
        [
          { label: '通讯地址', prop: 'bb', colspan: 3 },
          { label: '备注', prop: 'bb', colspan: 3 }
        ]
      ],
      formsDatas2: {
        bb: '--'
      },
      itemsDatas3: [
        [
          { label: '户名', prop: 'cc' },
          { label: '银行类别', prop: 'cc' },
          { label: '单位账号', prop: 'cc' },
          { label: '数据状态', prop: 'cc' }
        ]
      ],
      formsDatas3: {
        cc: 'xxx'
      }

    }
  },
  watch: {
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
.sixth .box .box-body {
    height: calc(100% - 20px);
}
</style>
