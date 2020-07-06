<template>
  <div class="listAuditAdd">
    <form-dialog title="补缴申请信息" width="1000px" new-class="big" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm">
            <div class="box-header handle">
              <span class="box-title">查询条件</span>
              <div class="box-tools">
                <el-button type="primary">查询</el-button>
              </div>
            </div>
            <el-row :gutter="12">
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="查询条件" label-width="105px" prop="查询条件">
                  <el-input v-model="searchForm.查询条件" placeholder="请在此输入身份证或姓名" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="姓名" label-width="105px" prop="姓名">
                  <el-input v-model="searchForm.姓名" :disabled="searchForm.补缴原因 == 2" placeholder="姓名" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="证件号码" label-width="105px" prop="证件号码">
                  <el-input v-model="searchForm.证件号码" :disabled="searchForm.补缴原因 == 2" />
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">参数信息</span>
              <div v-if="searchForm.补缴原因 == 2" class="box-tools">
                <el-button type="primary">查询</el-button>
              </div>
            </div>
            <el-row :gutter="12">
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="查询条件" label-width="105px" prop="查询条件">
                  <el-input v-model="searchForm.查询条件" placeholder="请在此输入单位名称或编码" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="单位名称" label-width="105px" prop="单位名称">
                  <el-input v-model="searchForm.单位名称" :disabled="searchForm.补缴原因 == 2" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="单位编码" label-width="105px" prop="单位编码">
                  <el-input v-model="searchForm.单位编码" :disabled="searchForm.补缴原因 == 2" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="补缴原因" label-width="105px" prop="补缴原因">
                  <el-select v-model="searchForm.补缴原因" placeholder="请选择">
                    <el-option
                      v-for="item in reasonOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="人员类别" label-width="105px" prop="人员类别">
                  <el-select v-model="searchForm.人员类别" :disabled="searchForm.补缴原因 == 2" placeholder="请选择">
                    <el-option
                      v-for="item in personOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">查询结果</span>
              <div class="box-tools">
                <el-button v-if="searchForm.补缴原因 == 1" type="primary" @click="addRow">新增</el-button>
                <el-button type="primary">计算</el-button>
              </div>
            </div>
            <my-table-view :border="true" height="300px" :columns="personalColumns" :data="personalData">
              <template slot="operation" slot-scope="scope">
                <el-button class="danger" title="删除" @click="deleteRow(scope)">
                  <svg-icon icon-class="delete" />
                </el-button>
              </template>
              <template slot="select" slot-scope="scope">
                <InsuranceType v-model="scope.row.险种类型" />
              </template>
            </my-table-view>
          </el-form>

        </div>
      </div>
    </form-dialog>
  </div>
</template>

<script>
import InsuranceType from '@/components/Select/InsuranceType'
export default {
  components: {
    InsuranceType
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeName: '1',
      searchForm: { 补缴原因: '' },
      reasonOptions: [
        { label: '正常补缴', value: '1' },
        { label: '断档补缴', value: '2' }
      ],
      personOptions: [
        { label: '在职', value: '1' }
      ],
      personalData: [1, 2, 3].map(item => {
        return {
          aa: 'CN00' + item,
          bb: '康斯洛夫斯基',
          cc: '斯大林',
          dd: '列宁'
        }
      }),
      personalColumns: [
        { type: 'index', label: '序号' },
        { label: '险种类型', type: 'custom', slotName: 'select', prop: 'aa' },
        { label: '开始时间', prop: 'bb' },
        { label: '截止时间', prop: 'cc' },
        { label: '补退基数', prop: 'dd' },
        { label: '操作', type: 'operation', width: '100px' }
      ]
    }
  },
  methods: {
    addIsShow(v) {
      this.$emit('update:show', v)
    },
    addRow() {
      const json = {}
      this.personalData.unshift(json)
    },
    deleteRow(row) {
      this.personalData.splice(row.$index, 1)
    },
    //  取消新增弹窗
    cancelAdd(formName) {
      this.$emit('update:show', false)
    },
    //  提交新增弹窗
    addSubmit(formName) {
      this.$emit('update:show', false)
    },
    resetQuery(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="scss"></style>
