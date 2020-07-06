<template>
  <div class="detail">
    <form-dialog title="医保关系转出录入" width="1200px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <el-form ref="addForm" :model="addForm" :rules="rules" label-width="105px">
            <div class="box-header handle">
              <span class="box-title">基本信息</span>
              <div class="box-tools">
                <el-button type="primary">查看扫描影像</el-button>
                <el-button type="primary">查看详细信息</el-button>
              </div>
            </div>
            <el-row :gutter="12">
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="姓名">
                  <el-input v-model="addForm.姓名" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="身份证">
                  <el-input v-model="addForm.身份证" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="个人电脑号">
                  <el-input v-model="addForm.个人电脑号" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="医保账号">
                  <el-input v-model="addForm.医保账号" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="医疗保障类型">
                  <el-input v-model="addForm.医疗保障类型" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="参保人所在经办区">
                  <PersonalInsuranceStatus v-model="addForm.参保人所在经办区" />
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">申请信息</span>
            </div>
            <el-row :gutter="12">
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="接收地机构行政区划代码">
                  <el-input v-model="addForm.接收地机构行政区划代码" placeholder="请输入">
                    <i slot="suffix" style="cursor: pointer" class="el-input__icon el-icon-search" @click="isShow = true" />
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="来函日期">
                  <el-input v-model="addForm.来函日期" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="来函编号">
                  <el-input v-model="addForm.来函编号" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="医疗保障类型">
                  <el-select v-model="addForm.医疗保障类型" placeholder="请选择">
                    <el-option
                      v-for="item in insuranceOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="12">
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="接收地经办机构开户银行">
                  <el-input v-model="addForm.接收地经办机构开户银行" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="接收地经办机构开户名称">
                  <el-input v-model="addForm.接收地经办机构开户名称" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="接收地经办机构银行账号">
                  <el-input v-model="addForm.接收地经办机构银行账号" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="接收地经办机构地址">
                  <el-input v-model="addForm.接收地经办机构地址" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="接收地经办机构邮编">
                  <el-input v-model="addForm.接收地经办机构邮编" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="接收地经办机构联系电话">
                  <el-input v-model="addForm.接收地经办机构联系电话" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="接收地经办机构名称">
                  <el-input v-model="addForm.接收地经办机构名称" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="接收地经办机构联系人">
                  <el-input v-model="addForm.接收地经办机构联系人" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="省">
                  <el-input v-model="addForm.省" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="市">
                  <el-input v-model="addForm.市" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="区县">
                  <el-input v-model="addForm.区县" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="是否跨省">
                  <el-select v-model="addForm.是否跨省" placeholder="请选择">
                    <el-option
                      v-for="item in ifElseOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">个人账户匹配</span>
              <div class="box-tools">
                <el-button type="primary" @click="isShowMatching = true">匹配</el-button>
              </div>
            </div>
            <el-row :gutter="12">
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="是否转移个账">
                  <el-select v-model="addForm.是否转移个账" placeholder="请选择">
                    <el-option
                      v-for="item in ifElseOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="转账方式">
                  <el-input v-model="addForm.转账方式" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="转出金额">
                  <el-input v-model="addForm.转出金额" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="确认情况">
                  <el-input v-model="addForm.确认情况" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="匹配个账姓名">
                  <el-input v-model="addForm.匹配个人姓名" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="匹配个账转出地">
                  <el-input v-model="addForm.匹配个账转出地" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="匹配方式">
                  <el-input v-model="addForm.匹配方式" placeholder="请输入" />
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">转入信息</span>
            </div>
            <el-row :gutter="12">
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="基本医疗保险类型">
                  <el-input v-model="addForm.基本医疗保险类型" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="参保凭证号">
                  <el-input v-model="addForm.参保凭证号" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="参保起止时间">
                  <el-input v-model="addForm.参保起止时间" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="享受待遇起止时间">
                  <el-input v-model="addForm.享受待遇起止时间" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="缴费月数">
                  <el-input v-model="addForm.缴费月数" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item />
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item />
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item>
                  <el-button type="primary" @click="addRow">新增</el-button>
                  <el-button type="danger" @click="deleteRow">删除</el-button>
                </el-form-item>
              </el-col>
            </el-row>
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :multiple-selection.sync="multipleSelection"
            />
            <Pagination :data="pageInfo" @refresh="pageChange" />
            <div class="box-header handle">
              <span class="box-title">新参保地信息(此处为联系函寄出机构信息)</span>
            </div>
            <el-row :gutter="12">
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="经办机构行政区划代码">
                  <el-input v-model="addForm.经办机构行政区划代码" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="经办机构行政区划名称">
                  <el-input v-model="addForm.经办机构行政区划名称" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="地址">
                  <el-input v-model="addForm.地址" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="所属辖区编码">
                  <el-input v-model="addForm.所属辖区编码" placeholder="请输入" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="12">
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="电话">
                  <el-input v-model="addForm.电话" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="开户银行">
                  <el-input v-model="addForm.开户银行" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="开户全称">
                  <el-input v-model="addForm.开户全称" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="银行卡号">
                  <el-input v-model="addForm.银行卡号" placeholder="请输入" />
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">户籍信息</span>
            </div>
            <el-row :gutter="12">
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="户籍类型">
                  <el-input v-model="addForm.户籍类型" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="户主姓名">
                  <el-input v-model="addForm.户主姓名" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="户主身份证">
                  <el-input v-model="addForm.户主身份证" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="户籍所在地">
                  <el-input v-model="addForm.户籍所在地" placeholder="请输入" />
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">代办人信息</span>
            </div>
            <el-row :gutter="12">
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="代办人">
                  <el-input v-model="addForm.代办人" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="与参保人关系">
                  <el-input v-model="addForm.与参保人关系" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="联系电话">
                  <el-input v-model="addForm.联系电话" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="邮编">
                  <el-input v-model="addForm.邮编" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="代办人地址">
                  <el-input v-model="addForm.代办人地址" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item label="参保人联系电话">
                  <el-input v-model="addForm.参保人联系电话" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item />
              </el-col>
              <el-col :md="6" :lg="6" :xl="6">
                <el-form-item />
              </el-col>
              <el-col :md="24" :lg="24" :xl="24">
                <el-form-item label="备注">
                  <el-input v-model="addForm.备注" type="textarea" :rows="4" placeholder="请输入" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd('addForm')">关闭</el-button>
        <el-button type="primary" @click="cancelAdd('addForm')">保存</el-button>
      </span>
    </form-dialog>
    <!-- 异地经办机构信息 -->
    <SearchOrganization :show.sync="isShow" @update:selectRow="selectRow" />
    <!-- 匹配 -->
    <Matching :show.sync="isShowMatching" @update:selectRow="matchingRow" />
  </div>
</template>

<script>
import Matching from '../../../components/matching'
import SearchOrganization from './searchOrganization'
import PersonalInsuranceStatus from '@/components/Select/PersonalInsuranceStatus'
export default {
  name: 'Detail',
  components: {
    PersonalInsuranceStatus,
    SearchOrganization,
    Matching
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      isShowMatching: false,
      multipleSelection: [],
      ifElseOptions: [
        { label: '是', value: '1' },
        { label: '否', value: '2' }
      ],
      insuranceOptions: [
        { label: '职工医保', value: '1' },
        { label: '居民医保', value: '2' },
        { label: '新农合', value: '3' }
      ],
      loading: false,
      activeName: 1,
      showDetail: false,
      queryForm: {},
      columns: [
        { type: 'selection' },
        { type: 'index', label: '序号', width: '55px' },
        { prop: '开始年月', label: '开始年月', align: 'center', overflow: true },
        { prop: '结束年月', label: '结束年月', align: 'center', overflow: true },
        { prop: '医疗保障类型', label: '医疗保障类型', align: 'center', overflow: true },
        { prop: '医疗保障号', label: '医疗保障号', align: 'center', overflow: true },
        { prop: '缴费性质', label: '缴费性质', align: 'center', overflow: true },
        { prop: '缴费月数', label: '缴费月数', align: 'center', overflow: true },
        { prop: '经办机构名称', label: '经办机构名称', align: 'center', overflow: true },
        { prop: '经办机构行政代码', label: '经办机构行政代码', align: 'center', overflow: true },
        { prop: '备注', label: '备注', align: 'center', overflow: true }
        // { type: 'operation', label: '操作', fixed: 'right', width: '100px' }
      ],
      tableData: [1, 2, 3].map(i => {
        return {
          开始年月: '开始年月',
          结束年月: '结束年月',
          医疗保障类型: '医疗保障类型',
          医疗保障号: '医疗保障号',
          缴费性质: '缴费性质',
          缴费月数: '缴费月数',
          经办机构名称: '经办机构名称',
          经办机构行政代码: '经办机构行政代码',
          备注: ''
        }
      }),
      addForm: {},
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      rules: {
        证件类型: { trigger: 'change', message: '请选择', required: true },
        出生日期: { trigger: 'change', message: '请选择', required: true },
        医保区划: { trigger: 'change', message: '请选择', required: true },
        救助认定类型: { trigger: 'change', message: '请选择', required: true },
        待遇开始时间: { trigger: 'change', message: '请选择', required: true },
        待遇结束时间: { trigger: 'change', message: '请选择', required: true },
        证件号码: { trigger: 'blur', message: '请输入', required: true },
        姓名: { trigger: 'blur', message: '请输入', required: true }
      }
    }
  },
  methods: {
    pageChange(data) {
      this.pageInfo = data.pagination
    },
    matchingRow(v) {
      this.isShowMatching = false
    },
    selectRow(v) {
      this.isShow = false
      this.addForm.原经办机构电话 = v.row.联系电话
      this.addForm.省 = v.row.所属省
      this.addForm.市 = v.row.所属市
      this.addForm.区县 = v.row.所属区
      this.addForm.原经办机构联系人 = v.row.联系人
      this.addForm.原经办机构名称 = v.row.经办机构名称
      this.addForm.原经办机构电话 = v.row.联系电话
      this.addForm.原经办机构行政区划代码 = v.row.行政区划代码
    },
    deleteRow() {
      console.log(this.multipleSelection)
    },
    addRow() {
      const json = {}
      this.tableData.push(json)
    },
    addIsShow(v) {
      this.$emit('update:show', v)
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
