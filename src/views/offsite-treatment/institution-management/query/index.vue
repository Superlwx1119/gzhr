<template>
  <!--省外统筹区就医地信息提取-->
  <div class="info-extract" style="height: 100%">
    <normal-layer :search-number="4">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header">
        <span class="box-title">省内异地医疗机构变动通知列表</span>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData" />
        <Pagination />
      </template>
    </normal-layer>
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import { tableColumns } from './tableConfig'
export default {
  components: {
    NormalLayer,
    FormItems
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      queryForm: {
        就医地: '',
        变动类型: '',
        执业许可证号: '',
        医院名称: ''
      },
      itemsDatas: [
        { label: '就医地', prop: '就医地', type: 'select' },
        { label: '变动类型', prop: '变动类型', type: 'select' },
        { label: '执业许可证号', prop: '执业许可证号', type: 'input' },
        { label: '医院名称', prop: '医院名称', type: 'input' }
      ],
      columns: tableColumns,
      tableData: [1, 2, 3].map(item => {
        return {
          '就医地': '就医地',
          '执业许可证登记号': '执业许可证登记号',
          '医院名称': '医院名称',
          '变动类型': '变动类型',
          '变动日期': '变动日期',
          '说明': '说明'
        }
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

  }
}
</script>

<style scoped lang="scss"></style>
