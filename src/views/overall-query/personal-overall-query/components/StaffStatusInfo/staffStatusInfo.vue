<!-- 人员状态信息 -->
<template>
  <section>
    <normal-layer
      :search-number="tableData.length"
      title-name="参保险种信息"
    >
      <my-table-view
        :data="tableData"
        :columns="insuranceType"
      />
    </normal-layer>
    <normal-layer
      :search-number="tableData.length"
      title-name="退休状态修改信息"
    >
      <my-table-view
        :data="tableData"
        :columns="retirementStatus"
      />
    </normal-layer>

    <normal-layer
      :search-number="tableData.length"
      title-name="入库情况"
    >
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="入库情况" name="first">
          <!-- <div class="box">
              <div class="box-body"> -->
          <my-table-view
            :data="tableData"
            :columns="warehouse"
          />
          <Pagination />
          <!-- </div>
              </div> -->
        </el-tab-pane>
        <el-tab-pane label="取消入库" name="second">
          <!-- <div class="box">
              <div class="box-body"> -->
          <my-table-view
            :data="tableData"
            :columns="cancleWarehousing"
          />
          <Pagination />
          <!-- </div>
              </div> -->
        </el-tab-pane>
      </el-tabs>
    </normal-layer>
  </section>
</template>
<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import InsuranceType from './columns/insuranceType'
import RetirementStatus from './columns/retirementStatus'
import Warehouse from './columns/warehouse'
import CancleWarehousing from './columns/cancleWarehousing'
export default {
  components: {
    NormalLayer
  },
  data() {
    return {
      cancleWarehousing: CancleWarehousing,
      insuranceType: InsuranceType,
      retirementStatus: RetirementStatus,
      warehouse: Warehouse,
      activeName: 'first',
      tableData: [
        { name: '----', nameCode: 'xxx' }
      ]
    }
  }
}
</script>
