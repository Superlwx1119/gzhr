<template>
  <div class="listAuditAdd">
    <form-dialog title="补缴申请信息" width="1000px" new-class="big" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm">
            <div class="box-header handle">
              <span class="box-title">补缴申请信息</span>
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
                <el-form-item label="单位名称" label-width="105px" prop="单位名称">
                  <el-input v-model="searchForm.单位名称" :disabled="true" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="单位编码" label-width="105px" prop="单位编码">
                  <el-input v-model="searchForm.单位编码" :disabled="true" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="险种" label-width="105px" prop="险种">
                  <InsuranceType v-model="searchForm.险种" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="起止时间" label-width="105px" prop="起止时间">
                  <el-date-picker
                    v-model="searchForm.起止时间"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    placeholder="开始日期"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="异动类型" label-width="105px" prop="异动类型">
                  <el-input v-model="searchForm.异动类型" :disabled="true" />
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">查询结果</span>
              <div class="box-tools">
                <el-button type="primary">计算</el-button>
              </div>
            </div>
            <el-row :gutter="12">
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="关键字筛选" label-width="105px" prop="关键字筛选">
                  <el-input v-model="searchForm.关键字筛选" placeholder="请在此输入姓名或身份证">
                    <el-button slot="suffix" type="text">查找</el-button>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="调整模式" label-width="105px" prop="调整模式">
                  <el-select v-model="searchForm.调整模式" :disabled="searchForm.补缴原因 == 2" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="值域" label-width="105px" prop="值域">
                  <el-input v-model="searchForm.值域">
                    <el-button slot="suffix" type="text" @click="adjust">调整</el-button>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <my-table-view :multiple-selection.sync="multipleSelection" :border="true" height="300px" :columns="personalColumns" :data="personalData">
              <template slot="operation" slot-scope="scope">
                <el-button class="danger" title="删除" @click="deleteRow(scope)">
                  <svg-icon icon-class="delete" />
                </el-button>
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
      searchForm: {},
      multipleSelection: [],
      reasonOptions: [
        { label: '正常补缴', value: '1' },
        { label: '断档补缴', value: '2' }
      ],
      options: [
        { label: '统一基数', value: '1' },
        { label: '增加基数', value: '2' }
      ],
      personalData: [1, 2, 3].map(item => {
        return {
          aa: 'CN00' + item,
          bb: '康斯洛夫斯基',
          cc: '斯大林',
          dd: '列宁',
          ee: '列宁',
          ff: '列宁'
        }
      }),
      personalColumns: [
        { type: 'selection' },
        { type: 'index', label: '序号' },
        { label: '姓名', prop: 'aa' },
        { label: '身份证', prop: 'bb' },
        { label: '险种类型', prop: 'cc' },
        { label: '开始时间', prop: 'dd' },
        { label: '截止时间', prop: 'ee' },
        { label: '补退基数', prop: 'ff' },
        { label: '操作', type: 'operation', width: '100px' }
      ]
    }
  },
  methods: {
    addIsShow(v) {
      this.$emit('update:show', v)
    },
    adjust() {
      if (this.multipleSelection.length === 0) {
        this.$msgError('请选择人员')
      }
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
