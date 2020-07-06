<template>
  <!--省内异地医疗机构确认-->
  <div class="confirm">
    <normal-layer :search-number="2">
      <template slot="search-header">
        <FormItems :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <el-button @click="reset('queryForm')">重置</el-button>
            <el-button type="primary" @click="search('queryForm')">查询</el-button>
          </div>
        </FormItems>
      </template>
      <template>
        <div class="layer-tab">
          <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane label="省平台医疗机构" name="first">
              <div class="box">
                <div class="box-header handle">
                  <div class="box-tools">
                    <el-button type="primary">确认</el-button>
                    <el-button type="primary">取消确认</el-button>
                  </div>
                </div>
                <div class="box-body">
                  <my-table-view :border="true" :columns="institutionColumns" :data="institutionTable">
                    <template slot="operation" slot-scope="scope">
                      <el-button type="text" class="modify" @click="checkRow(scope.row, 1)">详情</el-button>
                    </template>
                  </my-table-view>
                  <Pagination />
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="已确认医疗机构" name="second">
              <div class="box">
                <div class="box-header handle">
                  <div class="box-tools">
                    <el-button type="primary">确认</el-button>
                    <el-button type="primary">取消确认</el-button>
                  </div>
                </div>
                <div class="box-body">
                  <my-table-view :border="true" :columns="confirmInstitutionColumns" :data="confirmInstitutionTable">
                    <template slot="operation" slot-scope="scope">
                      <el-button type="text" class="modify" @click="checkRow(scope.row, 2)">详情</el-button>
                    </template>
                  </my-table-view>
                  <Pagination />
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </template>
    </normal-layer>
    <Detail
      :dialog-title="detailTitle"
      :is-dialog-visible="isDetailDialogVisible"
      :detail-data="detailData"
      :type="type"
      @update:isShow="isDetailShow"
    />
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import Detail from './components/Detail'
import { institutionColumns, confirmInstitutionColumns } from './tableCofig'
export default {
  components: {
    NormalLayer,
    FormItems,
    Detail
  },
  mixins: [pageHandle],
  props: {},
  data() {
    return {
      activeName: 'first',
      queryForm: {
        就医地: '',
        确认状态: ''
      },
      itemsDatas: [
        { label: '就医地', prop: '就医地', type: 'select' },
        { label: '确认状态', prop: '确认状态', type: 'select' }
      ],
      institutionColumns,
      confirmInstitutionColumns,
      institutionTable: [
        {
          '执业许可证登记号': '123',
          '医院名称': '湘雅',
          '地址': '长沙',
          '医院级别': '三级',
          '医院等级': '一级',
          '医院服务范围': '范围1',
          '医院类型': '类型1',
          '起始日期': '2020-02-01',
          '截止日期': '2020-03-02',
          '确认状态': '已确认'
        }
      ],
      confirmInstitutionTable: [
        {
          '执业许可证登记号': '456',
          '医院名称': '湘雅',
          '地址': '长沙',
          '医院级别': '三级',
          '医院等级': '一级',
          '医院服务范围': '范围1',
          '医院类型': '类型1',
          '起始日期': '2020-02-01',
          '截止日期': '2020-03-02',
          '更新状态': '已确认'
        }
      ],
      detailTitle: '',
      isDetailDialogVisible: false,
      detailData: {},
      type: 1
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    isDetailShow(v) {
      this.isDetailDialogVisible = v
    },
    checkRow(row, type) {
      this.detailData = row
      this.isDetailDialogVisible = true
      this.type = type
      this.detailTitle = type === 1 ? '省平台医疗机构' : '已确认医疗机构'
    }
  }
}
</script>

<style scoped lang="scss">
.confirm {
  height: 100%;
  >>> .layer-result {
    > .box {
      > .box-body {
        padding: 0;
        height: 100%;
        .el-tabs__content {
          padding: 0;
        }
      }
    }
  }
}
</style>
