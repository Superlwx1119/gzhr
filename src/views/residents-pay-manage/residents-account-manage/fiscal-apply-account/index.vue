<template>
  <!-- 居民财政申拨到账-->
  <div class="fiscalApplyAccount">
    <normal-layer :search-number="3">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="医保区划1">
            <insurance-area v-model="queryForm.医保区划1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">居民财政申拨到账列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="handleSaveAll">批量保存</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="operation" slot-scope="scope">
            <el-button type="text" @click="handleSave(scope.row)">保存</el-button>
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
import InsuranceArea from '@/components/Select/residents-pay-manage/InsuranceArea'
export default {
  name: 'FiscalApplyAccount',
  components: {
    InsuranceArea,
    NormalLayer,
    FormItems
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      itemsDatas: [
        { label: '医保区划', prop: '医保区划1', type: 'custom' },
        { label: '年度', prop: '年度1', type: 'dateMoon' },
        { label: '申拨状态', prop: '申拨状态1', type: 'select' }
      ],
      columns: [
        { type: 'selection' },
        { label: '序号', type: 'index' },
        { label: '医保区划', prop: 'a' },
        { label: '年度', prop: 'b' },
        { label: '款项类别', prop: 'c' },
        { label: '申拨人数', prop: 'd' },
        { label: '申拨总金额', prop: 'e' },
        { label: '已到账金额', prop: 'f' },
        { label: '本次到账金额', prop: 'g' },
        { label: '本次到账时间', prop: 'h' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { 'a': 'CAC414288123' + item, 'b': '统筹区' + item, c: 'xxx', d: 'xxx', e: 'xxx', f: 'xxx', g: 'xxx', h: 'xxx' }
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
    handleSaveAll() {},
    handleSave() {}
  }
}
</script>

<style scoped lang="scss"></style>
