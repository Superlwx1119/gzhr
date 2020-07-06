<!-- 缴费历史汇总查询 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-need-handle
  >
    <template slot="search-header">
      <form-items :items-datas="itemsDatas" :form-datas="queryForm">
        <el-button @click="reset">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </form-items>

      <el-row :gutter="10">
        <el-col :span="24">
          <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">险种</el-checkbox>
          <el-checkbox-group v-model="checkedCities" style="padding-top:10px" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
    </template>

    <!-- <template slot="title-btns">
      <el-button type="primary" @click="printClick">打印</el-button>
    </template> -->
    <div class="layer-tab">
      <el-tabs v-model="activeName" type="border-card">

        <el-tab-pane label="汇总查询" name="first">
          <div class="box">
            <div class="box-body" />
          </div>
        </el-tab-pane>

        <el-tab-pane label="明细查询" name="second">
          <div class="box">
            <div class="box-body" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

  </normal-layer>
</template>
<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PageHandle from '@/mixins/pageHandle'
import moment from 'moment'
const cityOptions = ['职工社会医疗保险', '住院和特殊门诊基本医疗保险', '外来工医保', '重大疾病医疗补助', '补充医疗保险', '城乡居民社会医疗保险']
export default {
  components: {
    NormalLayer,
    FormItems
  },
  mixins: [PageHandle],
  data() {
    return {
      activeName: 'first',
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: true,

      itemsDatas: [
        { label: '台账期间', prop: 'dateRange', type: 'dateRange' },
        { label: '到账标志', prop: 'xxx', type: 'select' }
      ],
      queryForm: {
        xxx: '',
        dateRange: [
          moment().startOf('month').format('YYYY-MM-DD'),
          moment().endOf('month').format('YYYY-MM-DD')
        ]
      }

    }
  },
  methods: {
    printClick() {
      window.print()
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
