<template>
  <div class="detail">
    <form-dialog title="医保关系转出详细" width="1200px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
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
            <table class="table-data total-info">
              <tbody>
                <tr>
                  <td>姓名</td>
                  <td>{{ addForm.姓名 }}</td>
                  <td>身份证</td>
                  <td>{{ addForm.身份证 }}</td>
                  <td>个人电脑号</td>
                  <td>{{ addForm.个人电脑号 }}</td>
                  <td>医保账号</td>
                  <td>{{ addForm.医保账号 }}</td>
                </tr>
                <tr>
                  <td>医疗保障类型</td>
                  <td>{{ addForm.医疗保障类型 }}</td>
                  <td>参保人所在经办区</td>
                  <td colspan="5">{{ addForm.参保人所在经办区 }}</td>
                </tr>
              </tbody>
            </table>
            <div class="box-header handle">
              <span class="box-title">申请信息</span>
            </div>
            <table class="table-data total-info">
              <tbody>
                <tr>
                  <td>接收地机构行政区划代码</td>
                  <td>{{ addForm.接收地机构行政区划代码 }}</td>
                  <td>来函日期</td>
                  <td>{{ addForm.来函日期 }}</td>
                  <td>来函编号</td>
                  <td>{{ addForm.来函编号 }}</td>
                  <td>医疗保障类型</td>
                  <td>{{ addForm.医疗保障类型 }}</td>
                </tr>
                <tr>
                  <td>接收地经办机构开户银行</td>
                  <td>{{ addForm.接收地经办机构开户银行 }}</td>
                  <td>接收地经办机构开户名称</td>
                  <td>{{ addForm.接收地经办机构开户名称 }}</td>
                  <td>接收地经办机构银行账号</td>
                  <td>{{ addForm.接收地经办机构银行账号 }}</td>
                  <td>接收地经办机构地址</td>
                  <td>{{ addForm.接收地经办机构地址 }}</td>
                </tr>
                <tr>
                  <td>接收地经办机构邮编</td>
                  <td>{{ addForm.接收地经办机构邮编 }}</td>
                  <td>接收地经办机构联系电话</td>
                  <td>{{ addForm.接收地经办机构联系电话 }}</td>
                  <td>接收地经办机构名称</td>
                  <td>{{ addForm.接收地经办机构名称 }}</td>
                  <td>接收地经办机构联系人</td>
                  <td>{{ addForm.接收地经办机构联系人 }}</td>
                </tr>
                <tr>
                  <td>省</td>
                  <td>{{ addForm.省 }}</td>
                  <td>市</td>
                  <td>{{ addForm.市 }}</td>
                  <td>区县</td>
                  <td>{{ addForm.区县 }}</td>
                  <td>是否跨省</td>
                  <td>{{ addForm.是否跨省 }}</td>
                </tr>
              </tbody>
            </table>
            <div class="box-header handle">
              <span class="box-title">个人账户基本信息</span>
              <div class="box-tools">
                <el-button type="primary">获取账户余额</el-button>
              </div>
            </div>
            <table class="table-data total-info">
              <tbody>
                <tr>
                  <td>是否转移个账</td>
                  <td>{{ addForm.是否转移个账 }}</td>
                  <td>转账方式</td>
                  <td>{{ addForm.转账方式 }}</td>
                  <td>余额</td>
                  <td>{{ addForm.余额 }}</td>
                  <td>银行处理时间</td>
                  <td>{{ addForm.银行处理时间 }}</td>
                </tr>
                <tr>
                  <td>银行处理结果</td>
                  <td>{{ addForm.银行处理结果 }}</td>
                  <td>银行处理说明</td>
                  <td colspan="5">{{ addForm.银行处理说明 }}</td>
                </tr>
              </tbody>
            </table>
            <div class="box-header handle">
              <span class="box-title">医保信息</span>
              <div class="box-tools">
                <el-button type="primary">查看缴费历史</el-button>
              </div>
            </div>
            <!-- <table class="table-data total-info">
              <tbody>
                <tr>
                  <td>基本医疗保险类型</td>
                  <td>{{ addForm.基本医疗保险类型 }}</td>
                  <td>参保凭证号</td>
                  <td>{{ addForm.参保凭证号 }}</td>
                  <td>参保起止时间</td>
                  <td>{{ addForm.参保起止时间 }}</td>
                  <td>享受待遇起止时间</td>
                  <td>{{ addForm.享受待遇起止时间 }}</td>
                </tr>
                <tr>
                  <td>缴费月数</td>
                  <td>{{ addForm.缴费月数 }}</td>
                </tr>
              </tbody>
            </table> -->
            <my-table-view
              v-loading="loading"
              :data="tableData"
              :columns="columns"
              :multiple-selection.sync="multipleSelection"
            >
              <template slot="operation" slot-scope="scope">
                <el-button type="text" class="modify" :class="scope.$index" @click="showDetail = true">详情</el-button>
              </template>
            </my-table-view>
            <Pagination :data="pageInfo" @refresh="pageChange" />
            <div class="box-header handle">
              <span class="box-title">新参保地信息(此处为联系函寄出机构信息)</span>
            </div>
            <table class="table-data total-info">
              <tbody>
                <tr>
                  <td>经办机构行政区划代码</td>
                  <td>{{ addForm.经办机构行政区划代码 }}</td>
                  <td>经办机构行政区划名称</td>
                  <td>{{ addForm.经办机构行政区划名称 }}</td>
                  <td>地址</td>
                  <td>{{ addForm.地址 }}</td>
                  <td>所属辖区编码</td>
                  <td>{{ addForm.所属辖区编码 }}</td>
                </tr>
                <tr>
                  <td>电话</td>
                  <td>{{ addForm.电话 }}</td>
                  <td>开户银行</td>
                  <td>{{ addForm.开户银行 }}</td>
                  <td>开户全称</td>
                  <td>{{ addForm.开户全称 }}</td>
                  <td>银行卡号</td>
                  <td>{{ addForm.银行卡号 }}</td>
                </tr>
              </tbody>
            </table>
            <div class="box-header handle">
              <span class="box-title">户籍信息</span>
            </div>
            <table class="table-data total-info">
              <tbody>
                <tr>
                  <td>户籍类型</td>
                  <td>{{ addForm.户籍类型 }}</td>
                  <td>户主姓名</td>
                  <td>{{ addForm.户主姓名 }}</td>
                  <td>户主身份证</td>
                  <td>{{ addForm.户主身份证 }}</td>
                  <td>户籍所在地</td>
                  <td>{{ addForm.户籍所在地 }}</td>
                </tr>
              </tbody>
            </table>
            <div class="box-header handle">
              <span class="box-title">代办人信息</span>
            </div>
            <table class="table-data total-info">
              <tbody>
                <tr>
                  <td>代办人</td>
                  <td>{{ addForm.代办人 }}</td>
                  <td>与参保人关系</td>
                  <td>{{ addForm.与参保人关系 }}</td>
                  <td>联系电话</td>
                  <td>{{ addForm.联系电话 }}</td>
                  <td>邮编</td>
                  <td>{{ addForm.邮编 }}</td>
                </tr>
                <tr>
                  <td>代办人地址</td>
                  <td>{{ addForm.代办人地址 }}</td>
                  <td>参保人联系电话</td>
                  <td colspan="5">{{ addForm.参保人联系电话 }}</td>
                </tr>
                <tr>
                  <td rowspan="2">备注</td>
                  <td colspan="7">{{ addForm.备注 }}</td>
                </tr>
              </tbody>
            </table>
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd('addForm')">关闭</el-button>
      </span>
    </form-dialog>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  components: {
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      multipleSelection: [],
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
      ],
      operate: {
        fixed: 'right',
        width: '100',
        list: [
          {
            show: true,
            label: '详情',
            type: 'text',
            method: (key, row, index) => {
              this.showDetail = true
            }
          }
        ]
      },
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
      pageInfo: {
        pageNum: 1,
        pageSize: 15,
        total: 10,
        startRow: 1,
        endRow: 10
      },
      addForm: {},
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
    getSelectRow(row) {

    },
    addRow() {
      const json = {
        报销类型: this.addForm.报销类型,
        住院: this.addForm.住院,
        总金额: this.addForm.总金额,
        医疗机构编码: this.addForm.医疗机构编码,
        结算日期: this.addForm.结算日期,
        医疗机构: this.addForm.医疗机构,
        就诊日期: this.addForm.就诊日期,
        备注: this.addForm.备注
      }
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
