<template>
  <div class="item5 third-index inst-relationship-maint">
    <section class="layer layer-query">
      <div class="box">
        <!-- <div class="box-header handle">
          <span class="box-title">人员基本信息</span>
        </div> -->
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
              <!-- <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="categoryOptions"
                  label-name="label"
                  value-name="value"
                  form-label="见证类别"
                  form-prop="category"
                />
              </el-col> -->
              <el-col :md="12" :lg="8" :xl="6">
                <DateSelect
                  :search-form="searchForm"
                  form-label="日期"
                  form-prop="dateBelongs"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  date-type="daterange"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="auditOptions"
                  label-name="label"
                  value-name="value"
                  form-label="审核状态"
                  form-prop="audit"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-button @click="reset('searchForm')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">查询</el-button>
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
            <el-button type="primary" @click="review">批量审核</el-button>

          </div> -->
        </div>
        <div class="box-body">
          <MyTableView
            :columns="tableColumns"
            :data="tableData"
            :border="true"
            @update:multipleSelection="multipleSelection"
          >
            <!-- <template slot="operation" slot-scope="scope">
              <el-button type="text" @click="audit(scope.row)">审核</el-button>
            </template> -->
          </MyTableView>
          <Pagination />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SelectForm from '@/components/Select/FormComponents/SelectForm'
import DateSelect from '@/components/Select/FormComponents/DateSelect'
export default {
  components: {
    SelectForm,
    DateSelect
  },

  props: {

  },
  data() {
    return {
      searchForm: {
        conditions: '',
        name: '',
        certificate: '',
        dateBelongs: '',
        audit: '',
        category: ''
      },
      auditOptions: [
        {
          value: '审核未通过',
          lable: '1'
        }
      ],
      categoryOptions: [
        {
          value: '未继承',
          label: '1'
        }
      ],
      tableColumns: [
        // {
        //   type: 'selection',
        //   label: '',
        //   width: '30px'
        // },
        { label: '序号', type: 'index', width: '50' },

        {
          prop: '证件号码',
          label: '证件号码'
        },
        {
          prop: '姓名',
          label: '姓名'
        },

        {
          prop: '出生日期',
          label: '出生日期'
        },

        {
          prop: '单位名称',
          label: '单位名称'
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
          prop: '申请人',
          label: '申请人'
        },
        {
          prop: '审核标志',
          label: '审核标志'
        },
        {
          prop: '审核人',
          label: '审核人'
        },
        {
          prop: '审核时间',
          label: '审核时间'
        },
        {
          prop: '审核意见',
          label: '审核意见'
        }
        // {
        //   label: '操作',
        //   type: 'operation'
        // }
      ],
      tableData: [
        {
          证件号码: '430223XXXXXXXX1235',
          姓名: '张三',
          出生日期: '2010-01-01',
          单位名称: 'xxx企业',
          年度: '2020年',
          释放方式: '2020-01-01',
          拨付对象类型: 'xxxxxxxxxxx',
          返换类型: '李X',
          计息标志: '是',
          支付标志: '否',
          盈余: '1000',
          账户返还金额: '10',
          金融行业机构代码: 'xxxxx',
          银行行别代码: 'xxxddd',
          银行账号: '1234567',
          户名: '2345',
          银行同城异地标志: 'ghjkjhgf',
          申请人: '234567',
          审核标志: '2345654',
          审核人: 'xxxx',
          审核时间: '23456543',
          审核意见: '2345678'
        }
      ]
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    reset(searchForm) {
      this.$refs.searchForm.resetFields()
    },
    search() {},
    multipleSelection() {

    }
  }
}
</script>

<style scoped lang="scss">

</style>

