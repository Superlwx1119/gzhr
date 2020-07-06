<template>
  <div class="item10 third-index inst-relationship-maint">
    <section class="layer layer-query">
      <div class="box">
        <!-- <div class="box-header handle">
          <span class="box-title">人员基本信息</span>
        </div>-->
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
                <el-form-item label="单位编码" prop="unitcode">
                  <el-input v-model="searchForm.unitcode" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="单位名称" prop="unitname">
                  <el-input v-model="searchForm.unitname" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-button @click="reset('searchForm','FromList')">重置</el-button>
                <el-button type="primary" @click="search('searchForm','FromList')">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>

    <section class="layer layer-query">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">返还信息</span>
          <!-- <div class="box-tools">
            <el-button type="primary" @click="save">保存</el-button>
          </div>-->
        </div>
        <div class="box-body">
          <el-form ref="FromList" :model="FromList" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="FromList"
                  :options="fbfsOptions"
                  label-name="label"
                  value-name="value"
                  form-label="发布方式"
                  form-prop="fbfs"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="FromList"
                  :options="bfdxlxOptions"
                  label-name="label"
                  value-name="value"
                  form-label="拨付对象类型"
                  form-prop="bfdxlx"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="FromList"
                  :options="fhlxOptions"
                  label-name="label"
                  value-name="value"
                  form-label="返还类型"
                  form-prop="fhlx"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="FromList"
                  :options="jxbzOptions"
                  label-name="label"
                  value-name="value"
                  form-label="计息标志"
                  form-prop="jxbz"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="银行账号" prop="yhzh">
                  <el-input v-model="FromList.yhzh" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="银行户名" prop="yhhm">
                  <el-input v-model="FromList.yhhm" placeholder="请输入" />
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
          <span class="box-title">账户返还明细信息</span>
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
        unitcode: '',
        unitname: ''
      },
      FromList: {
        fbfs: '',
        bfdxlx: '',
        fhlx: '',
        jxbz: '',
        yhzh: '',
        yhhm: ''
      },
      fbfsOptions: [
        {
          value: '汇款',
          lable: '1'
        }
      ],
      bfdxlxOptions: [
        {
          value: '个人',
          lable: '1'
        }
      ],
      fhlxOptions: [
        {
          value: '个人',
          lable: '1'
        }
      ],
      jxbzOptions: [
        {
          value: '是',
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
          prop: '证件号码',
          label: '证件号码'
        },
        {
          prop: '出生日期',
          label: '出生日期'
        },

        {
          prop: '医疗人员类别',
          label: '医疗人员类别'
        },

        {
          prop: '单位名称',
          label: '单位名称'
        },

        {
          prop: '所属行业',
          label: '所属行业'
        },

        {
          prop: '特殊单位类别',
          label: '特殊单位类别'
        },

        {
          prop: '隶属关系',
          label: '隶属关系'
        },
        {
          prop: '经济类型',
          label: '经济类型'
        },
        {
          prop: '单位类型',
          label: '单位类型'
        },
        {
          prop: '年度',
          label: '年度'
        },
        {
          prop: '释放方式',
          label: '释放方式'
        },
        {
          prop: '拨付对象类型',
          label: '拨付对象类型'
        },
        {
          prop: '返换类型',
          label: '返换类型'
        },
        {
          prop: '计息标志',
          label: '计息标志'
        },
        {
          prop: '支付标志',
          label: '支付标志'
        },
        {
          prop: '盈余',
          label: '盈余(元)'
        },
        {
          prop: '账户返还金额',
          label: '账户返还金额(元)'
        },
        {
          prop: '金融行业机构代码',
          label: '金融行业机构代码'
        },
        {
          prop: '银行行别代码',
          label: '银行行别代码'
        },
        {
          prop: '银行账号',
          label: '银行账号'
        },
        {
          prop: '户名',
          label: '户名'
        },
        {
          prop: '银行同城异地标志',
          label: '银行同城异地标志'
        },
        {
          label: '操作',
          type: 'operation'
        }
      ],
      tableData: [
        {
          证件号码: '430223XXXXXXXX1235',
          姓名: '张三',
          出生日期: '2010-01-01',
          医疗人员类别: '10',
          单位名称: 'xxx企业',
          所属行业: 'xxxxx',
          特殊单位类别: 'xxxxxxxxxxx',
          隶属关系: 'xxxx',
          经济类型: '',
          单位类型: '',
          年度: '',
          释放方式: '',
          拨付对象类型: '',
          返换类型: '',
          计息标志: '',
          支付标志: '',
          盈余: '',
          账户返还金额: '',
          金融行业机构代码: '',
          银行行别代码: '',
          银行账号: '',
          户名: '',
          银行同城异地标志: ''
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    reset(searchForm, FromList) {
    //  console.log(searchForm)
      this.$refs.searchForm.resetFields()
      this.$refs.FromList.resetFields()
    },
    search() {
      if (!this.searchForm.name) {
        this.$msgError('请先查询人员信息!')
      } else {
        this.$msgConfirm('确定执行保存操作?')
          .then(res => {
            this.$msgSuccess(res)
          })
          .catch(err => {
            this.$msgInfo(err)
          })
      }
    },
    multipleSelection() {},
    Modify() {
      this.visible = true
      this.bouncedTitle = '修改个人账户返还信息'
    },
    deleteData() {
      this.$msgSuccess('操作成功')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
