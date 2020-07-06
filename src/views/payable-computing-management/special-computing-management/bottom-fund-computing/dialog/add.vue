<template>
  <div class="listAuditAdd">
    <form-dialog title="铺底资金计算" width="1000px" new-class="big" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <el-form ref="searchForm" :model="searchForm">
            <div class="box-header handle">
              <span class="box-title">查询条件</span>
              <div class="box-tools">
                <el-button>重置</el-button>
                <el-button type="primary">模板下载</el-button>
              </div>
            </div>
            <el-row :gutter="12">
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="查询条件" label-width="105px" prop="查询条件">
                  <el-input v-model="searchForm.查询条件" placeholder="请在此输入单位名称或编码" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="单位名称" label-width="105px" prop="单位名称">
                  <el-input v-model="searchForm.单位名称" placeholder="单位名称" />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="单位管理码" label-width="105px" prop="单位管理码">
                  <el-input v-model="searchForm.单位管理码" />
                </el-form-item>
              </el-col>
            </el-row>
            <div class="box-header handle">
              <span class="box-title">上传</span>
            </div>
            <el-row :gutter="12">
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="费款所属期" label-width="105px" prop="费款所属期">
                  <el-date-picker
                    v-model="searchForm.费款所属期"
                    type="date"
                    style="width:100%"
                    placeholder="请选择时间"
                  />
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label="铺底类型" label-width="105px" prop="铺底类型">
                  <el-select v-model="searchForm.铺底类型" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="8" :lg="8" :xl="8">
                <el-form-item label-width="105px">
                  <el-button type="primary">上传</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd('addForm')">关闭</el-button>
        <el-button type="primary" @click="cancelAdd('addForm')">新增</el-button>
      </span>
    </form-dialog>
  </div>
</template>

<script>
export default {
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
      activeName: '1',
      searchForm: { 补缴原因: '' },
      options: [
        { label: '铺底退休人员基数变更', value: '1' },
        { label: '铺底参公单位补助', value: '2' },
        { label: '铺底非公单位铺底', value: '3' },
        { label: '健康体检费铺底', value: '4' }
      ]
    }
  },
  methods: {
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
