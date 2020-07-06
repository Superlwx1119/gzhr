<template>
  <!--省外统筹区就医地信息提取-->
  <div class="info-extract" style="height: 100%">
    <normal-layer :search-number="7">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">省外统筹区就医地信息列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="extract">提取</el-button>
          <el-button type="primary" @click="importData">导入</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData" />
        <Pagination />
      </template>
    </normal-layer>
    <Progress v-if="isShowProgress" :type="'line'" :is-loaded="isLoaded" />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import Progress from '@/components/Progress'
import { tableColumns } from './tableConfig'
export default {
  name: 'PeopleApply',
  components: {
    NormalLayer,
    FormItems,
    Progress
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      isShowProgress: false,
      queryForm: {
        医保统筹区划: '',
        统筹区名称: '',
        参保地状态: '',
        就医地状态: '',
        参保地: '',
        数据版本号: '',
        统筹区: ''
      },
      itemsDatas: [
        { label: '医保统筹区划', prop: '医保统筹区划', type: 'input' },
        { label: '统筹区名称', prop: '统筹区名称', type: 'input' },
        { label: '参保地状态', prop: '参保地状态', type: 'select' },
        { label: '就医地状态', prop: '就医地状态', type: 'select' },
        { label: '参保地', prop: '参保地', type: 'cascader' },
        { label: '数据版本号', prop: '数据版本号', type: 'input' },
        { label: '统筹区', prop: '统筹区', type: 'cascader' }
      ],
      columns: tableColumns,
      tableData: [1, 2, 3].map(item => {
        return {
          '统筹区代码': '统筹区代码',
          '统筹区名称': '统筹区名称',
          '参保地开通标志': '参保地开通标志',
          '上级统筹区代码': '上级统筹区代码',
          '上级统筹区名称': '上级统筹区名称',
          '省统筹区划': '省统筹区划',
          '省名称': '省名称',
          '当前有效标识': '当前有效标识',
          '数据版本号': '数据版本号',
          '就医地所属行政省': '就医地所属行政省',
          '就医地所属行政市': '就医地所属行政市'
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
    extract() {
      this.isShowProgress = true
      console.log(133)
      setTimeout(() => {
        setTimeout(() => {
          this.isShowProgress = false
        }, 100)
      }, 6000)
    },
    importData() {

    }
  }
}
</script>

<style scoped lang="scss"></style>
