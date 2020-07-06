<template>
  <!--异地医疗费扣付原因维护-->
  <div class="info-extract" style="height: 100%">
    <normal-layer :search-number="2">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">异地医疗费扣付列表</span>
        <div class="box-tools">
          <el-button type="primary" @click="addList">新增</el-button>
          <el-button type="danger" @click="batchDelete">批量删除</el-button>
        </div>
      </div>
      <template>
        <my-table-view :border="true" :columns="columns" :data="tableData">
          <template slot="reasonNo" slot-scope="scope">
            <span v-if="!scope.row.isEdit">{{ scope.row.拒付原因编号 }}</span>
            <el-input v-else v-model="scope.row.拒付原因编号1" placeholder="请输入" />
          </template>
          <template slot="reason" slot-scope="scope">
            <span v-if="!scope.row.isEdit">{{ scope.row.拒付原因 }}</span>
            <el-input v-else v-model="scope.row.拒付原因1" placeholder="请输入" />
          </template>
          <template slot="category" slot-scope="scope">
            <span v-if="!scope.row.isEdit">{{ scope.row.拒付类别 }}</span>
            <el-select v-else v-model="scope.row.拒付类别Value" clearable style="width: 100%">
              <el-option label="选项1" :value="1" />
              <el-option label="选项2" :value="2" />
            </el-select>
          </template>
          <template slot="center" slot-scope="scope">
            <span v-if="!scope.row.isEdit">{{ scope.row.所属中心 }}</span>
            <el-select v-else v-model="scope.row.所属中心Value" clearable style="width: 100%">
              <el-option label="选项1" :value="3" />
              <el-option label="选项2" :value="4" />
            </el-select>
          </template>
          <template slot="sign" slot-scope="scope">
            <span v-if="scope.row.isEdit">{{ scope.row.有效标志 ? '有效' : '无效' }}</span>
            <el-switch v-if="!scope.row.isEdit" v-model="scope.row.有效标志" @change="switchSign(scope.row)" />  {{ !scope.row.isEdit ? (scope.row.有效标志 ? '有效' : '无效') : '' }}
          </template>
          <template slot="operation" slot-scope="scope">
            <el-button v-if="scope.row.isEdit" type="text" class="modify" @click="saveEdit(scope.row)">保存</el-button>
            <el-button type="text" class="delete" @click="deleteRow(scope.row, scope.rowIndex)">删除</el-button>
          </template>
        </my-table-view>
        <Pagination />
      </template>
    </normal-layer>
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import { tableColumns } from './tableConfig'
import { deepClone } from '@/utils'
export default {
  components: {
    NormalLayer,
    FormItems
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      queryForm: {
        拒付类别: '',
        有效标志: ''
      },
      itemsDatas: [
        { label: '拒付类别', prop: '拒付类别', type: 'select' },
        { label: '有效标志', prop: '有效标志', type: 'select' }
      ],
      columns: tableColumns,
      tableData: [1, 2, 3].map(item => {
        return {
          '拒付原因编号': '984732984',
          '拒付原因': 'uiowur',
          '拒付类别': '选项1',
          '拒付类别Value': '1',
          '所属中心': '选项3',
          '所属中心Value': '1',
          '有效标志': true,
          isEdit: false
        }
      }),
      addObj: {
        '拒付原因编号': '',
        '拒付原因': '',
        '拒付类别': '',
        '拒付类别Value': '',
        '所属中心': '',
        '所属中心Value': '',
        '有效标志': true,
        isEdit: true
      }
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    addList() {
      this.tableData.push(deepClone(this.addObj))
    },
    saveEdit(row) {

    },
    deleteRow(row, index) {
      // 若是正在增加的删除，直接删除，否则需要调接口
      if (row.isEdit) {
        this.tableData.splice(index, 1)
      } else {
        console.log(row, index)
      }
    },
    switchSign(row) {
      console.log(row)
    },
    batchDelete() {

    }
  }
}
</script>

<style scoped lang="scss"></style>
