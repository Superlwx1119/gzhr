<template>
  <!--  单据信息-->
  <section class="layer">
    <div class="box">
      <div class="box-header">
        <span class="box-title">单据信息</span>
      </div>
      <div class="box-body">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="序号" align="center" width="80" />
          <el-table-column prop="type" label="单据类型" align="center" width="140" />
          <el-table-column label="单据数量" align="center" width="140">
            <template slot-scope="scope">
              <span v-if="!scope.row.isEdit">{{ scope.row.amount }}</span>
              <el-input v-else v-model="scope.row.newAmount" />
            </template>
          </el-table-column>
          <el-table-column label="文件信息" align="center">
            <template slot-scope="scope">
              <div class="file-box">
                <el-upload :class="{ hide: !canUpload(scope.row) }" :file-list="scope.row.files" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :before-upload="beforeAvatarUpload" :on-error="handleAvatarError" :on-success="handleAvatarSuccess">
                  <i class="el-icon-plus" />
                  <div slot="file" slot-scope="{ file }">
                    <el-popover trigger="hover" placement="top">
                      <p>文件名: {{ file.name }}</p>
                      <p>文件编号: {{ file.uid }}</p>
                      <p>上传时间: {{ file.uploadTime }}</p>
                      <div slot="reference" class="name-wrapper">
                        <span class="el-upload-list__item-actions">
                          <span class="el-upload-list__item-preview">
                            <i class="el-icon-zoom-in" @click="previewFile(file, scope.row.files)" />
                            <i v-if="!isDisabled" class="el-icon-delete" @click="deleteFile(file, scope.row.files)" />
                          </span>
                        </span>
                        <div class="img-box">
                          <img :src="file.url" alt="">
                        </div>
                        <el-dialog class="img-dialog" new-calss="middle" width="760px" :append-to-body="true" :visible.sync="dialogVisible">
                          <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <!--                        <el-image class="img-box" :src="file.url" :preview-src-list="scope.row.files.map((v) => { return v.url })" fit="cover" />-->
                      </div>
                    </el-popover>
                  </div>
                </el-upload>
              </div>
            </template>
          </el-table-column>
          <el-table-column v-if="!isDisabled" label="操作" align="center" width="100px">
            <template slot-scope="scope">
              <template v-if="scope.row.isEdit">
                <el-button type="text" class="delete" size="small" @click="cancelEdit(scope.row)">取消</el-button>
                <el-button type="text" size="small" @click="confirmEdit(scope.row)">保存</el-button>
              </template>
              <template v-else>
                <el-button type="text" @click="handleEdit(scope.row)">修改</el-button>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DocumentsInfo',
  components: {},
  mixins: [],
  props: {
    info: {
      type: Object,
      default: () => { return {} }
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableData: [
        { type: '费用发票', amount: '2', files: [
          { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', name: 'xxx.png', uid: 'WJ001', uploadTime: '2020-02-02' },
          { url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg', name: 'aaa.png', uid: 'WJ002', uploadTime: '2020-03-03' }
        ] },
        { type: '出院诊断书', amount: '2', files: [
          { url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', name: 'qqq.png', fileNo: 'WJ011', uploadTime: '2020-05-05' }
        ] }
      ],
      dialogImageUrl: '',
      dialogVisible: false
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
    //  判断是否能上传文件
    canUpload: function(row) {
      if (row.isEdit) {
        if (row.files.length < row.newAmount) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    //  预览图上点击删除
    deleteFile(file, row) {
      row.splice(row.indexOf(file), 1)
    },
    previewFile(file) {
      this.dialogVisible = true
      this.dialogImageUrl = file.url
    },
    handleEdit(row) {
      this.$set(row, 'isEdit', true)
      this.$set(row, 'newAmount', row.amount)
    },
    cancelEdit(row) {
      this.$set(row, 'isEdit', false)
    },
    confirmEdit(row) {
      this.$set(row, 'amount', row.newAmount)
      this.$set(row, 'isEdit', false)
    },
    beforeAvatarUpload(file) {
      console.log(file)
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$msgError('上传图片大小不能超过 2MB!')
      }
      return isLt2M
    },
    handleAvatarSuccess(file) {
      console.log(file)
    },
    handleAvatarError(err, file, fileList) {
      console.log(err)
    }
  }
}
</script>

<style scoped lang="scss">
  .file-box {
    img {
      display: block;
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: cover;
    }
  }
  .img-box {
    width: 60px;
    height: 60px;
  }
  .hide /deep/.el-upload--picture-card {
    display: none;
  }
  /deep/.el-upload--picture-card{
    width: 60px;
    height: 60px;
    line-height: 68px;
    font-size: 20px;
    border-radius: 0;
  }
  /deep/.el-upload-list--picture-card {
    margin: 0;
    display: inline;
    vertical-align: middle;
  }
  /deep/.el-upload-list--picture-card .el-upload-list__item-actions {
    position: absolute;
    width: 100%;
    height: 100%;
    /*right: 0;*/
    /*bottom: 0;*/
    /*top: auto;*/
    /*left: auto;*/
    z-index: 3000;
    cursor: default;
    text-align: center;
    color: #fff;
    opacity: 0;
    font-size: 14px;
    background-color: rgba(0,0,0,.5);
    transition: opacity .3s;
    &:hover {
      opacity: 1;
    }
    /*span {*/
    /*  display: block;*/
    /*  line-height: 1;*/
    /*}*/
  }
  /deep/.el-upload-list--picture-card .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 0;
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    margin: 0 8px 0 0;
    display: inline-block;
  }
  .img-dialog{
    /deep/.el-dialog__body {
      padding: 0;
      img {
        display: block;
      }
    }
  }
</style>
