<!-- 个人共享信息 -->
<template>
  <section>
    <normal-layer
      :search-number="tableData.length"
      title-name="户籍信息"
    >
      <my-table-view
        :data="tableData"
        :columns="householdRegistration"
      />
    </normal-layer>
    <normal-layer
      :search-number="tableData.length"
      title-name="生存殡葬"
    >
      <my-table-view
        :data="tableData"
        :columns="survivalFuneral"
      />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="生育指标"
    >
      <my-table-view
        :data="tableData"
        :columns="fertilityIndex"
      />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="结婚证"
    >
      <my-table-view
        :data="tableData"
        :columns="marriageCertificate"
      />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="出生证"
    >
      <my-table-view
        :data="tableData"
        :columns="birthCertificate"
      />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="失业登记查询"
    >
      <my-table-view
        :data="tableData"
        :columns="unemployment"
      />
    </normal-layer>
  </section>
</template>
<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import HouseholdRegistration from './columns/householdRegistration'
import SurvivalFuneral from './columns/survivalFuneral'
import FertilityIndex from './columns/fertilityIndex'
import Unemployment from './columns/unemployment'
import MarriageCertificate from './columns/marriageCertificate'
import BirthCertificate from './columns/birthCertificate'
export default {
  components: {
    NormalLayer
  },
  data() {
    return {
      householdRegistration: HouseholdRegistration,
      survivalFuneral: SurvivalFuneral,
      fertilityIndex: FertilityIndex,
      unemployment: Unemployment,
      marriageCertificate: MarriageCertificate,
      birthCertificate: BirthCertificate,
      tableData: [
        { name: '----', nameCode: 'xxx' }
      ],
      columns: [
        { prop: 'nameCode', label: '民族', align: 'center' },
        { prop: 'name', label: '婚姻状况', minWidth: '140px', align: 'center' },
        { prop: 'name', label: '文化程度', align: 'center' },
        { prop: 'name', label: '出生日期', align: 'center' },
        { prop: 'name', label: '户籍地省市县（区）', align: 'center' },
        { prop: 'name', label: '户籍地乡镇街道', align: 'center' },
        { prop: 'name', label: '户籍地所属派出所', minWidth: '140px', align: 'center' },
        { prop: 'name', label: '户成员关联号', align: 'center' },
        { prop: 'name', label: '照片', align: 'center' }
      ]
    }
  }

}
</script>
