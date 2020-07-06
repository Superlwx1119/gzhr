<template>
  <div class="item9 third-index inst-relationship-maint">
    <section class="layer layer-query">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">人员基本信息</span>
        </div>
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="查询条件" prop="conditions">
                  <el-input v-model="searchForm.conditions" placeholder="在此入身份证或者姓名" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="searchForm.name" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="证件号码" prop="certificate">
                  <el-input v-model="searchForm.certificate" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="genderOptions"
                  label-name="label"
                  value-name="value"
                  form-label="性别"
                  form-prop="gender"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-button @click="reset('searchForm','fromData')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>

    <section class="layer layer-query">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">个人账户预划信息</span>
          <div class="box-tools">
            <el-button type="primary" @click="save">保存</el-button>
          </div>
        </div>
        <div class="box-body">
          <el-form ref="fromData" :model="fromData" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="fromData"
                  :options="PlantTypeOptions"
                  label-name="label"
                  value-name="value"
                  form-label="险种类型"
                  form-prop="PlantType"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="划账月数" prop="months">
                  <el-input v-model="fromData.months" placeholder="在此入身份证或者姓名" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="划账金额" prop="amount">
                  <el-input v-model="fromData.amount" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6" style="float: left;">
                <el-form-item label="划账时间" prop="date">
                  <el-date-picker
                    v-model="fromData.date"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%;height:100%;"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="备注" prop="note">
                  <el-input v-model="fromData.note" placeholder="请输入" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>

    <section class="layer layer-result">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">预划成功信息</span>
          <!-- <div class="box-tools">
            <el-button type="primary" @click="Addnew">新增</el-button>
            <el-button type="primary" @click="combined">合计</el-button>
            <el-button type="primary" @click="confirm">到账确认</el-button>
          </div>-->
        </div>
        <div class="box-body">
          <MyTableView
            :columns="tableColumns"
            :data="tableData"
            :border="true"
            @update:multipleSelection="multipleSelection"
          >
            <template slot="operation" slot-scope="scope">
              <el-button type="text" @click="Modify(scope.row)">修改</el-button>
              <el-button type="text" @click="deleteData(scope.row)">删除</el-button>
            </template>
          </MyTableView>
          <Pagination />
        </div>
      </div>
    </section>
    <Add :show.sync="visible" :bounced-title="bouncedTitle" />
  </div>
</template>

<script>
import SelectForm from '@/components/Select/FormComponents/SelectForm'
import Add from './components/Add'
export default {
  components: {
    SelectForm,
    Add
  },
  props: {},
  data() {
    return {
      visible: false,
      bouncedTitle: '',
      searchForm: {
        conditions: '',
        name: '',
        certificate: '',
        gender: ''
      },
      fromData: {
        PlantType: '',
        amount: '',
        months: '',
        date: '',
        note: ''
      },
      genderOptions: [
        {
          value: '男',
          lable: '1'
        },
        {
          value: '女',
          lable: '2'
        }
      ],
      PlantTypeOptions: [
        {
          value: '全部',
          lable: '1'
        },
        {
          value: '失业保险',
          lable: '1'
        }
      ],
      tableColumns: [
        {
          type: 'selection',
          label: '',
          width: '30px'
        },
        { label: '序号', type: 'index', width: '50' },
        {
          prop: '审核标志',
          label: '审核标志'
        },
        {
          prop: '证件号码',
          label: '证件号码'
        },
        {
          prop: '姓名',
          label: '姓名'
        },

        {
          prop: '险种类型',
          label: '险种类型'
        },

        {
          prop: '划账月数',
          label: '划账月数'
        },

        {
          prop: '划账金额',
          label: '划账金额(元)'
        },

        {
          prop: '划账时间',
          label: '划账时间'
        },

        {
          prop: '备注',
          label: '备注'
        },
        {
          label: '操作',
          type: 'operation'
        }
      ],
      tableData: [
        {
          审核标志: '待审核',
          证件号码: '430223XXXXXXXX1235',
          姓名: '张三',
          险种类型: '土著保险',
          划账月数: '10',
          划账金额: '100.01',
          划账时间: '2020-01-01',
          备注: 'xxxxxxxxxxx'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    reset(searchForm, fromData) {
      this.$refs.searchForm.resetFields()
      this.$refs.fromData.resetFields()
    },
    search() {},
    save() {},
    Modify() {
      this.visible = true
      this.bouncedTitle = '修改个人账户预划信息'
    },
    deleteData() {
      this.$msgConfirm('是否删除？')
        .then(res => {
          this.$msgSuccess(res)
        })
        .catch(err => {
          this.$msgInfo(err)
        })
    },
    multipleSelection() {}
  }
}
</script>

<style scoped lang="scss">
</style>

