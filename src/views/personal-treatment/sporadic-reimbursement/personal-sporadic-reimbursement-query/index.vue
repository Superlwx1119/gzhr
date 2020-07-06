<template>
  <!--个人零星报销查询与统计-->
  <!--  <div class="personalSporadicReimbursementQuery">-->
  <AutoSizeLayer>
    <template slot="header">
      <collapse
        v-model="isCollapse"
        :height="100"
        @boxChange="headerBoxChange"
        @showAll="collapseHandleShowAll"
      >
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="零报情形1">
            <sporadic-reimbursement-situation-type v-model="queryForm.零报情形1" />
          </template>
          <template slot="零报分类1">
            <sporadic-reimbursement-type v-model="queryForm.零报分类1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
            <el-button class="collapse-btn" @click="collapseClick">
              <i :class="['el-icon-arrow-down', 'icon', isCollapse?'down':'up']" />
            </el-button>
          </div>
        </FormItems>
      </collapse>
    </template>
    <div class="box">
      <section class="layer-tab">
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane name="first" label="个人零星报销查询">
            <div class="box-header handle">
              <div class="box-tools">
                <el-button type="primary">导出</el-button>
                <el-button type="primary">打印</el-button>
              </div>
            </div>
            <my-table-view style="height: calc(100% - 60px)" :columns="columns" :data="tableData" />
            <Pagination />
          </el-tab-pane>
          <el-tab-pane name="second" label="个人零星报销统计">
            123
          </el-tab-pane>
        </el-tabs>
      </section>
    </div>
  </AutoSizeLayer>
<!--  </div>-->
</template>

<script>
import Collapse from '@/components/Collapse'
import HeaderBoxChange from '@/mixins/headerBoxChange'
import AutoSizeLayer from '@/views/components/PageLayers/autoSizeLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import pageHandle from '@/mixins/pageHandle'
import SporadicReimbursementSituationType from '@/components/Select/SporadicReimbursementSituationType'
import SporadicReimbursementType from '@/components/Select/SporadicReimbursementType'
export default {
  name: 'PersonalSporadicReimbursementQuery',
  components: { SporadicReimbursementType, SporadicReimbursementSituationType, AutoSizeLayer, FormItems, Collapse },
  mixins: [pageHandle, HeaderBoxChange],
  props: {},
  data() {
    return {
      activeName: 'first',
      itemsDatas: [
        { label: '受理时间', prop: '受理时间1', type: 'dateRange' },
        { label: '出院时间', prop: '出院时间1', type: 'dateRange' },
        { label: '所属统筹区', prop: '所属统筹区1', type: 'select' },
        { label: '受理人', prop: '受理人1', type: 'input' },
        { label: '受理号', prop: '受理号1', type: 'input' },
        { label: '业务类型', prop: '业务类型1', type: 'select' },
        { label: '待遇类型', prop: '待遇类型1', type: 'select' },
        { label: '业务环节', prop: '业务环节1', type: 'select' },
        { label: '零报情形', prop: '零报情形1', type: 'custom' },
        { label: '零报分类', prop: '零报分类1', type: 'custom' },
        { label: '是否异地', prop: '是否异地1', type: 'select' },
        { label: '医院数据调取', prop: '医院数据调取1', type: 'select' }
      ],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '结算汇总批号', prop: 'a' },
        { label: '业务交接号', prop: 'b' },
        { label: '业务环节', prop: 'c' },
        { label: '医院调取情况', prop: 'd' },
        { label: '零报方式', prop: 'e' },
        { label: '医疗机构编码', prop: 'f' },
        { label: '医疗机构名称', prop: 'g' },
        { label: '医院级别', prop: 'h' },
        { label: '就医登记号', prop: 'i' },
        { label: '个人电脑号', prop: 'j' },
        { label: '证件号码', prop: 'k' },
        { label: '姓名', prop: 'l' },
        { label: '性别', prop: 'm' },
        { label: '出生年月', prop: 'n' },
        { label: '年龄', prop: 'o' },
        { label: '人员类别', prop: 'p' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { a: 'xxx', b: 'xxx', c: 'xxx', d: 'xxx', e: 'xxx', f: 'xxx', g: 'xxx', h: 'xxx', i: 'xxx',
          j: 'xxx', k: 'xxx', l: 'xxx', m: 'xxx', n: 'xxx', o: 'xxx', p: 'xxx'
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
  methods: {}
}
</script>

<style scoped lang="scss"></style>
