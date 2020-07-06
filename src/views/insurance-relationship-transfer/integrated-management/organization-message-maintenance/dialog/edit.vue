<template>
  <div class="detail">
    <form-dialog title="维护信息修改" width="1100px" new-calss="big" :is-show="show" @update:isShow="addIsShow">
      <div class="box">
        <div class="box-body">
          <el-form ref="addForm" :model="addForm" label-width="105px">
            <el-row :gutter="12">
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="地区">
                  <el-input v-model="addForm.地区" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="经办机构名称">
                  <el-input v-model="addForm.经办机构名称" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="所属辖区">
                  <el-input v-model="addForm.所属辖区" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="行政区划代码">
                  <el-input v-model="addForm.行政区划代码" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="行政区名称">
                  <el-input v-model="addForm.行政区名称" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="地址">
                  <el-input v-model="addForm.地址" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="邮编">
                  <el-input v-model="addForm.邮编" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="联系电话">
                  <el-input v-model="addForm.联系电话" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="联系人">
                  <el-input v-model="addForm.联系人" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="银行账号">
                  <el-input v-model="addForm.银行账号" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="开户银行">
                  <el-input v-model="addForm.开户银行" placeholder="请输入" />
                </el-form-item>
              </el-col>
              <el-col :md="12" :lg="8" :xl="8">
                <el-form-item label="开户名称">
                  <el-input v-model="addForm.开户名称" placeholder="请输入" />
                </el-form-item>
              </el-col>
            </el-row>
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
      addForm: {}
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
    }
  }
}
</script>

<style scoped lang="scss"></style>
