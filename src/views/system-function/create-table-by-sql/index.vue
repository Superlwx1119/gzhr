<template>
  <div class="sql-page">
    <section class="layer">
      <el-row :gutter="12">
        <el-col :md="8" :lg="8" :xl="8">
          <div class="box">
            <div class="box-header">
              <span class="box-title">建表SQL</span>
              <div class="box-tools">
                <el-button plain size="small" @click="resetCondition">重置</el-button>
                <el-button type="primary" size="small" @click="search">查询</el-button>
              </div>
            </div>
            <div class="box-body edit-wrapper">
              <el-input v-model="sqlContent" type="textarea" placeholder="请输入建表SQL" />
            </div>
          </div>
        </el-col>
        <el-col :md="16" :lg="16" :xl="16">
          <div class="box">
            <div class="box-header handle">
              <span class="box-title">分析结果</span>
            </div>
            <div class="box-body analysis-result">
              <el-row :gutter="12">
                <el-form>
                  <el-row :gutter="12">
                    <el-col :md="24" :lg="12" :xl="12">
                      <el-form-item label="表名称" label-width="80px">
                        <el-input v-model="formName" :readonly="true">
                          <svg-icon v-if="formName" slot="suffix" icon-class="smile" style="color: #67c23a; font-size: 20px" />
                          <svg-icon v-else slot="suffix" icon-class="sad" style="color: #f56c6c; font-size: 20px" />
                        </el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :md="24" :lg="12" :xl="12">
                      <el-form-item>
                        <el-button type="primary" size="small" @click="addToDatabase">入库</el-button>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-row :gutter="12">
                    <el-col :md="24" :lg="12" :xl="12">
                      <el-form-item label="中文分词" label-width="80px">
                        <el-input v-model="cnWord" :readonly="true" />
                      </el-form-item>
                    </el-col>
                    <el-col :md="24" :lg="12" :xl="12">
                      <el-form-item label="英文分词" label-width="80px">
                        <el-input v-model="enWord" :readonly="true" />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :md="24" :lg="24" :xl="24">
                      <el-form-item label="建议分词" label-width="80px">
                        <el-input v-model="suggetWord" :readonly="true" type="textarea" />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </el-row>
              <div class="table-wrapper">
                <TableList :columns="columns" :data="tableData" :is-border="true" height="string" :is-index="true" />
              </div>
              <Pagination :data="pagenationData" @refresh="refreshPage" />
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import TableList from '@/components/list/default'
export default {
  components: {
    TableList
  },
  data() {
    return {
      sqlContent: '',
      formName: '',
      cnWord: '',
      enWord: '',
      suggetWord: '',
      columns: [
        {
          prop: 'wordName',
          label: '字段名称',
          align: 'center',
          overflow: true
        },
        {
          prop: 'cnWord',
          label: '中文分词',
          align: 'center'
        },
        {
          prop: 'enWord',
          label: '英文分词',
          align: 'center'
        },
        {
          prop: 'type',
          label: '类型',
          width: '100',
          align: 'center'
        },
        {
          prop: 'length',
          label: '长度',
          width: '50',
          align: 'center'
        },
        {
          prop: 'result',
          label: '结论',
          width: '100',
          align: 'center',
          type: 'icon'
        },
        {
          prop: 'suggetWord',
          label: '建议分词',
          align: 'center'
        }
      ],
      tableData: [
        {
          wordName: 'wordName',
          cnWord: 'cnWord',
          enWord: 'enWord',
          type: 123,
          length: 50,
          result: 'smile',
          suggetWord: 'suggetWord'
        },
        {
          wordName: 'wordNamedqiwueoiwq eiwqu oeuwqoiueoiwq uoieu askjdksa kdjsa',
          cnWord: 'cnWord',
          enWord: 'enWord',
          type: 123,
          length: 50,
          result: 'smile',
          suggetWord: 'suggetWord'
        },
        {
          wordName: 'wordName',
          cnWord: 'cnWord',
          enWord: 'enWord',
          type: 123,
          length: 50,
          result: 'smile',
          suggetWord: 'suggetWord'
        },
        {
          wordName: 'wordName',
          cnWord: 'cnWord',
          enWord: 'enWord',
          type: 123,
          length: 50,
          result: 'smile',
          suggetWord: 'suggetWord'
        },
        {
          wordName: 'wordName',
          cnWord: 'cnWord',
          enWord: 'enWord',
          type: 123,
          length: 50,
          result: 'sad',
          suggetWord: 'suggetWord'
        }
      ],
      pagenationData: { pageSize: 10, pageNum: 1, total: 1, startRow: 1, endRow: 1 }
    }
  },
  methods: {
    search() {
      console.log(this.sqlContent)
    },
    resetCondition() {
      this.sqlContent = ''
    },
    addToDatabase() {
      console.log('add to database')
    },
    refreshPage(data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.sql-page {
  height: 100%;
  .layer {
    height: 100%;
    > .el-row {
      height: 100%;
      > .el-col {
        height: 100%;
      }
    }
  }
  .edit-wrapper {
    height: calc(100% - 30px);
    .el-textarea {
      height: 100%;
      /deep/ .el-textarea__inner {
        height: 100%;
      }
    }
  }
  .analysis-result {
    display: flex;
    flex-direction: column;
    .table-wrapper {
      flex: 1;
      .pf-table {
        height: 100%;
        /deep/ .table-list{
          height: 100%;
          svg[data-icon=smile] {
            font-size: 20px;
            color: $--color-success;
          }
          svg[data-icon=sad] {
            font-size: 20px;
            color: $--color-danger;
          }
        }
      }
    }
    .pf-pagination {
      margin-top: -34px;
    }
  }
}
</style>
