<template>
  <!-- 居民应缴征收方式调整-->
  <div class="levyWayAdjust">
    <normal-layer :search-number="3">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="人员信息1">
            <personal-info v-model="queryForm.人员信息1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">居民缴费登记列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="handleChangeAll">批量变更</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="type" slot-scope="scope">
            <el-select v-model="scope.row.type" placeholder="请选择">
              <el-option label="现金缴费" value="1" />
              <el-option label="银行批扣" value="2" />
            </el-select>
          </template>
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="handleChange(scope.row)">变更</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import PersonalInfo from '@/components/Select/fund-insurance-manage/PersonalInfo'
export default {
  name: 'LevyWayAdjust',
  components: {
    PersonalInfo,
    NormalLayer,
    FormItems
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      itemsDatas: [
        { label: '人员信息', prop: '人员信息1', type: 'custom' },
        { label: '年度', prop: '年度1', type: 'dateYear' },
        { label: '费款所属期', prop: '费款所属期1', type: 'dateYear' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '单位编号', prop: 'a' },
        { label: '单位名称', prop: 'b' },
        { label: '缴费主体', prop: 'c' },
        { label: '费款所属期', prop: 'd' },
        { label: '对应费款所属期', prop: 'e' },
        { label: '金额', prop: 'e' },
        { label: '身份类型', prop: 'e' },
        { label: '缴费状态', prop: 'e' },
        { label: '扣费方式', prop: 'type', type: 'custom', slotName: 'type' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { 'a': 'CAC414288123' + item, 'b': '统筹区' + item, c: 'xxx', d: 'xxx', e: 'xxx', type: '2' }
      })
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    handleChange() {},
    handleChangeAll() {}
  }
}
</script>

<style scoped lang="scss"></style>
