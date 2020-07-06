<template>
  <div class="itme15 third-index inst-relationship-maint">
    <!-- 被继承人基本信息 -->
    <section class="layer layer-query">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">被继承人基本信息</span>
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
                  :options="sexOptions"
                  label-name="label"
                  value-name="value"
                  form-label="性别"
                  form-prop="sex"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <DateSelect
                  :search-form="searchForm"
                  form-label="出生日期"
                  form-prop="dateBelongs"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  date-type="date"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label=" 年龄" prop="age">
                  <el-input v-model="searchForm.age" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="PersonnelCategoryOptions"
                  label-name="label"
                  value-name="value"
                  form-label="人员类别"
                  form-prop="PersonnelCategory"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="WhatwasOptions"
                  label-name="label"
                  value-name="value"
                  form-label="名族"
                  form-prop="Whatwas"
                />
              </el-col>

              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="searchForm"
                  :options="DangerPlantedOptions"
                  label-name="label"
                  value-name="value"
                  form-label="参保险种"
                  form-prop="DangerPlanted"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="单位编码" prop="dwcode">
                  <el-input v-model="searchForm.dwcode" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="单位名称" prop="dwname">
                  <el-input v-model="searchForm.dwname" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医保区划" prop="CareDivision">
                  <el-input v-model="searchForm.CareDivision" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="当前账户余额" prop="zhyr">
                  <el-input v-model="searchForm.zhyr" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6" style="float: left;">
                <SelectForm
                  :search-form="searchForm"
                  :options="personalstateOptions"
                  label-name="label"
                  value-name="value"
                  form-label="个人账户状态"
                  form-prop="PersonalState"
                />
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <!-- 继承人基本信息 -->
    <section class="layer layer-query">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">继承人基本信息</span>
        </div>
        <div class="box-body">
          <el-form ref="FromLsit" :model="FromLsit" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="查询条件" prop="conditions">
                  <el-input v-model="FromLsit.conditions" placeholder="在此入身份证或者姓名" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="FromLsit.name" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="证件号码" prop="certificate">
                  <el-input v-model="FromLsit.certificate" placeholder="请输入" />
                </el-form-item>
              </el-col>

              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="FromLsit"
                  :options="sexOptions"
                  label-name="label"
                  value-name="value"
                  form-label="性别"
                  form-prop="sex"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <!-- <DateSelect
                  :search-form="FromLsit"
                  form-label="出生日期"
                  form-prop="dateBelongs"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  date-type="date"
                /> -->
                <el-form-item label="出生日期" prop="age">
                  <el-date-picker
                    v-model="FromLsit.date"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%;"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="年龄" prop="age">
                  <el-input v-model="FromLsit.age" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="FromLsit"
                  :options="PersonnelCategoryOptions"
                  label-name="label"
                  value-name="value"
                  form-label="人员类别"
                  form-prop="PersonnelCategory"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="FromLsit"
                  :options="WhatwasOptions"
                  label-name="label"
                  value-name="value"
                  form-label="名族"
                  form-prop="Whatwas"
                />
              </el-col>

              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="FromLsit"
                  :options="DangerPlantedOptions"
                  label-name="label"
                  value-name="value"
                  form-label="参保险种"
                  form-prop="DangerPlanted"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="单位编码" prop="dwcode">
                  <el-input v-model="FromLsit.dwcode" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="单位名称" prop="dwname">
                  <el-input v-model="FromLsit.dwname" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="医保区划" prop="CareDivision">
                  <el-input v-model="FromLsit.CareDivision" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="当前账户余额" prop="zhyr">
                  <el-input v-model="FromLsit.zhyr" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6" style="float: left;">
                <SelectForm
                  :search-form="FromLsit"
                  :options="personalstateOptions"
                  label-name="label"
                  value-name="value"
                  form-label="个人账户状态"
                  form-prop="PersonalState"
                />
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </section>
    <!-- 被继承人退保信息 -->
    <section class="layer layer-query">
      <div class="box">
        <div class="box-header handle">
          <span class="box-title">被继承人退保信息</span>
        </div>
        <div class="box-body">
          <el-form ref="FromData" :model="FromData" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="FromData"
                  :options="surrenderOptions"
                  label-name="label"
                  value-name="value"
                  form-label="是否退保"
                  form-prop="surrender"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="变更原因" prop="ChangeReason">
                  <el-input v-model="FromData.ChangeReason" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">

                <el-form-item label="变更时间" prop="ChangeReason">
                  <el-date-picker
                    v-model="FromData.date"
                    type="date"
                    placeholder="选择日期"
                    style="width:100%"
                  />
                </el-form-item>
              </el-col>

              <el-col :md="12" :lg="8" :xl="6">
                <SelectForm
                  :search-form="FromData"
                  :options="proveOptions"
                  label-name="label"
                  value-name="value"
                  form-label="死亡证明"
                  form-prop="prove"
                />
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-form-item label="备注" prop="note">
                  <el-input v-model="FromData.note" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="6">
                <el-button @click="reset('searchForm','FromData','FromLsit')">重置</el-button>
                <el-button type="primary" @click="search('searchForm')">保存</el-button>
              </el-col>
            </el-row>
          </el-form>
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
        sex: '',
        date: '',
        age: '',
        PersonnelCategory: '',
        Whatwas: '',
        DangerPlanted: '',
        dwcode: '',
        dwname: '',
        CareDivision: '',
        zhyr: '',
        PersonalState: ''
      },
      FromLsit: {
        conditions: '',
        name: '',
        certificate: '',
        sex: '',
        date: '',
        age: '',
        PersonnelCategory: '',
        Whatwas: '',
        DangerPlanted: '',
        dwcode: '',
        dwname: '',
        CareDivision: '',
        zhyr: '',
        PersonalState: ''
      },
      FromData: {
        surrender: '',
        ChangeReason: '',
        date: '',
        prove: '',
        note: ''
      },
      sexOptions: [
        {
          value: '男',
          lebale: '1'
        },
        {
          value: '女',
          lebale: '2'
        }
      ],
      PersonnelCategoryOptions: [
        {
          value: '全部',
          lebale: '1'
        }
      ],
      WhatwasOptions: [
        {
          value: '汉',
          lebale: '1'
        },
        {
          value: '土家族',
          lebale: '2'
        }
      ],
      DangerPlantedOptions: [
        {
          value: '全部',
          lebale: '1'
        }
      ],
      personalstateOptions: [
        {
          value: '全部',
          lebale: '1'
        }
      ],
      surrenderOptions: [
        {
          value: '全部',
          lebale: '1'
        }
      ],
      proveOptions: [
        {
          value: '全部',
          lebale: '1'
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
    reset(searchForm, FromData, FromLsit) {
      this.$refs.searchForm.resetFields()
      this.$refs.FromData.resetFields()
      this.$refs.FromLsit.resetFields()
    },
    search() {},
    multipleSelection() {

    }
  }
}
</script>

<style scoped lang="scss">

</style>

