<template>
  <!--  费用信息-->
  <section class="layer">
    <div class="box">
      <div :class="['box-header', { 'handle': showTools }]">
        <span class="box-title">费用信息</span>
        <div v-if="showTools" class="box-tools">
          <el-button type="primary" @click="getHospitalCost">读取医院上传费用</el-button>
          <el-button type="primary" @click="getPreviewCost">识别当前预览费用</el-button>
          <el-button type="danger" @click="deleteCost">删除</el-button>
          <el-button type="primary" @click="addCost">新增</el-button>
          <el-button type="primary" @click="saveCost">保存</el-button>
        </div>
      </div>
      <div class="box-body">
        <el-table :height="tableHeight" :data="tableData" style="width: 100%">
          <el-table-column v-if="isEdit" type="selection" align="center" width="50" />
          <el-table-column type="index" align="center" label="序号" width="50" />
          <el-table-column prop="way" align="center" label="录入方式" width="80">
            <template slot-scope="scope">
              <span v-if="scope.row.way === '1'">医院上传</span>
              <span v-if="scope.row.way === '2'">识别录入</span>
              <span v-if="scope.row.way === '3'">手工录入</span>
            </template>
          </el-table-column>
          <el-table-column prop="type" align="center" label="费用类别" width="100">
            <template slot-scope="scope">
              <el-select v-if="isEdit && scope.row.way !== '1'" v-model="scope.row.type">
                <el-option label="西药费" value="1" />
                <el-option label="床位费" value="2" />
                <el-option label="检查费" value="3" />
                <el-option label="资料费" value="4" />
              </el-select>
              <span v-else>{{ scope.row.typeName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="医保目录名称" width="120">
            <template slot-scope="scope">
              <el-select v-if="isEdit && scope.row.way !== '1'" v-model="scope.row.directoryCode" filterable remote reserve-keyword :remote-method="remoteMethod" :loading="loading" @change="directoryChange($event,scope.row)">
                <el-option label="青霉素A" value="1" />
                <el-option label="青霉素B" value="2" />
                <el-option label="青霉素C" value="3" />
                <el-option label="青霉素D" value="4" />
              </el-select>
              <span v-else>{{ scope.row.directoryName }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="directoryCode" align="center" label="医保目录编码" width="110" />
          <el-table-column prop="projectName" align="center" label="项目名称">
            <template slot-scope="scope">
              <el-input v-if="isEdit && scope.row.way !== '1'" v-model="scope.row.projectName" />
              <span v-else>{{ scope.row.projectName }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="count" align="center" label="数量" width="60">
            <template slot-scope="scope">
              <el-input v-if="isEdit && scope.row.way !== '1'" v-model="scope.row.count" />
              <span v-else>{{ scope.row.count }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="price" align="center" label="单价(元)" width="80">
            <template slot-scope="scope">
              <el-input v-if="isEdit && scope.row.way !== '1'" v-model="scope.row.price" />
              <span v-else>{{ scope.row.price }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="amount" align="center" label="金额(元)" width="80">
            <template slot-scope="scope">
              <el-input v-if="isEdit && scope.row.way !== '1'" v-model="scope.row.amount" />
              <span v-else>{{ scope.row.amount }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="percent" align="center" label="自付比例(%)" width="110">
            <template slot-scope="scope">
              <el-input v-if="isEdit && scope.row.way !== '1'" v-model="scope.row.percent" />
              <span v-else>{{ scope.row.percent }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="deductionsAmount" align="center" label="扣付金额(元)" width="100">
            <template slot-scope="scope">
              <el-input v-if="isEdit" v-model="scope.row.deductionsAmount" />
              <span v-else>{{ scope.row.deductionsAmount }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="deductionsReason" align="center" label="扣付原因">
            <template slot-scope="scope">
              <el-input v-if="isEdit" v-model="scope.row.deductionsReason" />
              <span v-else>{{ scope.row.deductionsReason }}</span>
            </template>
          </el-table-column>
        </el-table>
        <Pagination />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CostInfo',
  components: {},
  mixins: [],
  props: {
    showTools: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    tableHeight: {
      type: String,
      default: '250px'
    }
  },
  data() {
    return {
      loading: false,
      tableData: []
    }
  },
  computed: {
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 200)
      }
    },
    directoryChange(v, row) {
      console.log(v)
      console.log(row)
    },
    getHospitalCost() {
      this.tableData = [
        { way: '1', type: '1', typeName: '西药费', directoryName: '青霉素A', directoryCode: '1', projectName: '青霉素A', count: '2', price: '80', amount: '160', percent: '10', deductionsAmount: '0', deductionsReason: '123' }
      ]
    },
    getPreviewCost() {
      this.tableData = [
        { way: '2', type: '1', typeName: '西药费', directoryName: '青霉素A', directoryCode: '1', projectName: '青霉素A', count: '2', price: '80', amount: '160', percent: '10', deductionsAmount: '0', deductionsReason: '123' }
      ]
    },
    deleteCost() {
      this.tableData.pop()
    },
    addCost() {
      this.tableData = [
        { way: '3', type: '1', typeName: '西药费', directoryName: '青霉素A', directoryCode: '1', projectName: '青霉素A', count: '2', price: '80', amount: '160', percent: '10', deductionsAmount: '0', deductionsReason: '123' }
      ]
    },
    saveCost() {}
  }
}
</script>

<style scoped lang="scss"></style>
