<template>
  <!--体检协议机构维护-->
  <div class="agencyAgreementMaintenance">
    <normal-layer :search-number="2">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <template slot="体检机构1">
            <health-institution v-model="queryForm.体检机构1" />
          </template>
          <template slot="体检机构等级1">
            <health-institution-level v-model="queryForm.体检机构等级1" />
          </template>
          <div style="text-align: right">
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">体检协议机构列表</span>
        <div slot="title-btns" class="box-tools">
          <el-button type="primary" @click="add">新增</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="name" slot-scope="scope">
            <health-institution v-if="scope.row.isEdit" v-model="scope.row.newName" placeholder="placeholder" />
          </template>
          <template slot="level" slot-scope="scope">
            <health-institution-level v-if="scope.row.isEdit" v-model="scope.row.newLevel" placeholder="placeholder" />
          </template>
          <template slot="mobile" slot-scope="scope">
            <el-input v-if="scope.row.isEdit" v-model="scope.row.newMobile" placeholder="请输入手机号" />
          </template>
          <template slot="operation" slot-scope="scope">
            <el-button v-if="!scope.row.isEdit" type="text" class="delete" @click="deleteClick">删除</el-button>
            <template v-else>
              <el-button type="text" class="delete" @click="cancelAdd(scope.row)">取消</el-button>
              <el-button type="text" @click="saveAdd(scope.row)">保存</el-button>
            </template>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
  </div>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import pageHandle from '@/mixins/pageHandle'
import FormItems from '@/views/components/PageLayers/form-items'
import HealthInstitution from '@/components/Select/health-manage/HealthInstitution'
import HealthInstitutionLevel from '@/components/Select/health-manage/HealthInstitutionLevel'
export default {
  name: 'AgencyAgreementMaintenance',
  components: {
    NormalLayer,
    FormItems,
    HealthInstitution,
    HealthInstitutionLevel
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      queryForm: {
        体检机构1: '',
        体检机构等级1: ''
      },
      itemsDatas: [
        { label: '体检机构', prop: '体检机构1', type: 'custom' },
        { label: '体检机构等级', prop: '体检机构等级1', type: 'custom' }
      ],
      columns: [
        { label: '序号', type: 'index' },
        { type: 'selection' },
        { label: '体检机构名称', prop: 'name', type: 'custom', slotName: 'name', minWidth: '180' },
        { label: '体检机构等级', prop: 'level', type: 'custom', slotName: 'level' },
        { label: '预约电话', prop: 'mobile', type: 'custom', slotName: 'mobile' },
        { label: '经办人', prop: 'people' },
        { label: '经办时间', prop: 'date' },
        { label: '操作', type: 'operation' }
      ],
      tableData: [1, 2, 3].map(item => {
        return { name: '啊哈哈', level: '2', mobile: '13512341234', people: '夏尔', date: '2020-02-02' }
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
    add() {
      this.tableData.push(
        { newName: '', newLevel: '', newMobile: '', people: '夏尔', date: '2020-02-02', isEdit: true }
      )
    },
    cancelAdd(row) {
      this.tableData.pop()
    },
    saveAdd(row) {
      this.$set(row, 'name', row.newName)
      this.$set(row, 'level', row.newLevel)
      this.$set(row, 'mobile', row.newMobile)
      this.$set(row, 'isEdit', false)
    },
    search() { console.log(this.queryForm) }
  }
}
</script>

<style scoped lang="scss"></style>
