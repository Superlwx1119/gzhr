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
      <box-title title-name="个人信息" />
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
              <box-title title-name="职工基本信息" />
              <div class="box-body" style="padding-right: 0;">
                <table-items
                  :item-datas="itemsDatas2"
                  :form-datas="formsDatas2"
                />
              </div>
            </div>
            <div class="box" style="height: auto">
              <box-title title-name="居民基本信息" />
              <div class="box-body" style="padding-right: 0;">
                <table-items
                  :item-datas="itemsDatas3"
                  :form-datas="formsDatas3"
                />
              </div>
              <!-- </div>
              </div> -->
            </div>
          </el-tab-pane>

          <el-tab-pane label="所在单位信息" name="second">
            <div class="box">
              <div class="box-body" style="overflow-y: scroll;">
                <unit-info />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="个人异动信息" name="third">
            <div class="box">
              <div class="box-body">
                <personal-change-info />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="个人共享信息" name="fourth" style="overflow-y: scroll;">
            <div class="box">
              <div class="box-body">
                <personal-share-info />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="缴费台账信息" name="fifth">
            <div class="box">
              <div class="box-body">
                <pay-ledger-info />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="待遇冻结" name="sixth" class="sixth" style="overflow-y: scroll;">
            <div class="box">
              <div class="box-body">
                <treate-freeze />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="人员状态信息" name="seventh" style="overflow-y: scroll;">
            <div class="box">
              <div class="box-body">
                <staff-status-info />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="个人账户信息" name="eighth" style="overflow-y: scroll;">
            <div class="box">
              <div class="box-body">
                <personal-account-info />
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="注资信息" name="ninth" style="overflow-y: scroll;">
            <div class="box">
              <div class="box-body">
                <injection-info />
              </div>
            </div></el-tab-pane>

          <el-tab-pane label="异地门诊包干" name="tenth">
            <div class="box">
              <div class="box-body">
                <Offsite-outsourcing />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="门诊选定医院" name="eleventh">
            <div class="box">
              <div class="box-body">
                <selected-hospital />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="异地安置" name="twelfth" style="overflow-y: scroll;">
            <div class="box">
              <div class="box-body">
                <relocation />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="缴费历史变动" name="thirteenth" style="overflow-y: scroll;">
            <div class="box">
              <div class="box-body">
                <pay-history-change />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="缴费历史汇总查询" name="fourteenth">
            <div class="box">
              <div class="box-body">
                <pay-history />
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
import UnitInfo from '@/views/overall-query/personal-overall-query/components/UnitInfo/unitInfo'
import PersonalChangeInfo from '@/views/overall-query/personal-overall-query/components/PersonalChangeInfo/personalChangeInfo'
import PersonalShareInfo from '@/views/overall-query/personal-overall-query/components/PersonalShareInfo/personalShareInfo'
import PayLedgerInfo from '@/views/overall-query/personal-overall-query/components/PayLedgerInfo/payLedgerInfo'
import TreateFreeze from '@/views/overall-query/personal-overall-query/components/TreateFreeze/treateFreeze'
import StaffStatusInfo from '@/views/overall-query/personal-overall-query/components/StaffStatusInfo/staffStatusInfo'
import PersonalAccountInfo from '@/views/overall-query/personal-overall-query/components/PersonalAccountInfo/personalAccountInfo'
import InjectionInfo from '@/views/overall-query/personal-overall-query/components/InjectionInfo/injectionInfo'
import OffsiteOutsourcing from '@/views/overall-query/personal-overall-query/components/OffsiteOutsourcing/offsiteOutsourcing'
import SelectedHospital from '@/views/overall-query/personal-overall-query/components/SelectedHospital/selectedHospital'
import Relocation from '@/views/overall-query/personal-overall-query/components/Relocation/relocation'
import PayHistoryChange from '@/views/overall-query/personal-overall-query/components/PayHistoryChange/payHistoryChange'
import PayHistory from '@/views/overall-query/personal-overall-query/components/PayHistory/payHistory'

export default {
  components: {
    NormalLayer,
    FormItems,
    TableItems,
    BoxTitle,
    UnitInfo,
    PersonalChangeInfo,
    PersonalShareInfo,
    PayLedgerInfo,
    TreateFreeze,
    StaffStatusInfo,
    PersonalAccountInfo,
    InjectionInfo,
    OffsiteOutsourcing,
    SelectedHospital,
    Relocation,
    PayHistoryChange,
    PayHistory
  },
  mixins: [PageHandle],
  data() {
    return {
      activeName: 'first',
      itemsDatas: [
        { label: '查询条件', prop: 'xxx', type: 'select' },
        { label: '姓名', prop: 'xxx', type: 'input' },
        { label: '证件号', prop: 'xxx', type: 'input' }
      ],
      queryForm: {
        xxx: ''
      },
      itemsDatas1: [
        [
          { label: '姓名', prop: 'aa' },
          { label: '性别', prop: 'aa' },
          { label: '证件类型', prop: 'aa' },
          { label: '身份证号码', prop: 'aa' }
        ]
      ],
      formsDatas1: {
        aa: '----'
      },
      itemsDatas2: [
        [
          { label: '电脑号', prop: 'bb' },
          { label: '出生日期', prop: 'bb' },
          { label: '国籍', prop: 'bb' },
          { label: '人员身份', prop: 'bb' }
        ],
        [

          { label: '医保退休时间', prop: 'bb' },
          { label: '人员状态', prop: 'bb' },
          { label: '所属统筹区', prop: 'bb' },
          { label: '医疗救助标识 ', prop: 'bb' }
        ],
        [
          { label: '联系电话', prop: 'bb' },
          { label: '单位编码', prop: 'bb' },
          { label: '单位名称', prop: 'bb', colspan: '3' }
        ],
        [
          { label: '是否大中专包干学生', prop: 'bb' }
        ]
      ],
      formsDatas2: {
        bb: '--'
      },
      itemsDatas3: [
        [
          { label: '电脑号', prop: 'cc' },
          { label: '人员身份', prop: 'cc' },
          { label: '是否港澳台参保人员', prop: 'cc' },
          { label: '是否大中专包干学生', prop: 'cc' }
        ],
        [
          { label: '银行户名 ', prop: 'cc' },
          { label: '银行账号 ', prop: 'cc' },
          { label: '银行行别 ', prop: 'cc' },
          { label: '学籍', prop: 'cc' }
        ],
        [
          { label: '学院 ', prop: 'cc' },
          { label: '年级 ', prop: 'cc' },
          { label: '班级 ', prop: 'cc' },
          { label: '入学年份', prop: 'cc' }
        ],
        [
          { label: '单位编码', prop: 'cc' },
          { label: '联系电话', prop: 'cc' },
          { label: '户口性质', prop: 'cc' },
          { label: '资助参保标识 ', prop: 'cc' }
        ],
        [
          { label: '单位名称', prop: 'cc', colspan: '3' },
          { label: '户口所在地址', prop: 'cc', colspan: '3' }
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
</style>
