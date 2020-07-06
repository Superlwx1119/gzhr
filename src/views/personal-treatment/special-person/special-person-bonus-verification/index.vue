<template>
  <!--特殊人群奖励金-->
  <div class="specialPersonBonusVerification">
    <normal-layer :search-number="3">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="是否有结余1">
            <el-select v-model="queryForm.是否有结余1" style="width: 100%;" placeholder="请选择">
              <el-option label="是" value="1" />
              <el-option label="否" value="0" />
            </el-select>
          </template>
          <template slot="关键字1">
            <keyword v-model="queryForm.关键字1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">特殊人群奖励金列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="calculate">计算</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="operation">
            <el-button type="text" @click="calculate">计算</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
    <Report :show.sync="reportVisible" />
  </div>
</template>

<script>
import Keyword from '@/components/Select/personal-sporadic/Keyword'
import FormItems from '@/views/components/PageLayers/form-items'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
import Report from './Report'
export default {
  name: 'SpecialPersonBonusVerification',
  components: { Keyword, FormItems, NormalLayer, Report },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      reportVisible: false,
      itemsDatas: [
        { label: '年度', prop: '年度1', type: 'dateYear' },
        { label: '是否有结余', prop: '是否有结余1', type: 'custom' },
        { label: '关键字', prop: '关键字1', type: 'custom' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'a' },
        { label: '性别', prop: 'b' },
        { label: '证件类型', prop: 'c' },
        { label: '证件号码', prop: 'd' },
        { label: '全年总费用(元)', prop: 'e' },
        { label: '基金合计支付(元)', prop: 'f' },
        { label: '结余金额(元)', prop: 'g' },
        { label: '奖励金额(元)', prop: 'h' },
        { label: '奖励金定额(元)', prop: 'i' },
        { label: '奖励金发放比率', prop: 'j' },
        { label: '单位', prop: 'k' },
        { label: '操作', type: 'operation' }

      ],
      tableData: [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
        return {
          a: 'xxx', b: '男', c: '居民身份证', d: '431227xxxxxxxx271' + item, e: '896.93', f: '896.93', g: '3903.07', h: '1951.54', i: '4800.00', j: '0.5', k: 'xxx'
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
    handleSave() {
      this.$msgSuccess('保存成功！')
    },
    calculate() { this.reportVisible = true }
  }
}
</script>

<style scoped lang="scss"></style>
