<template>

  <section class="layer layer-result">
    <div class="box">
      <div class="box-header handle">
        <div class="box-tools">
          <el-button type="primary" @click="save">保存</el-button>
        </div>
      </div>
      <el-row>
        <el-col :span="14">
          <div class="box" style="height: auto">
            <div class="box-body" style="padding-right: 0;">
              <table-items
                :item-datas="itemsDatas"
                :form-datas="formsDatas"
              />
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="img" style="margin:auto;">
            <el-image :src="src" />
          </div>
        </el-col>
      </el-row>

    </div>
  </section>
</template>
<script>
import TableItems from '@/views/components/PageLayers/table-items'

export default {
  components: {
    TableItems
  },
  data() {
    return {
      src: '',
      itemsDatas: [
        [
          { label: '用章备案名称', prop: 'xxx' },
          { label: '备案时间', prop: 'xxx' }
        ],
        [
          { label: '经办人', prop: 'xxx' },
          { label: '邮箱地址', prop: 'xxx' }
        ],
        [
          { label: '联系电话', prop: 'xxx' }
        ]
      ],
      formsDatas: {
        xxx: 'xxx'
      }
    }
  },
  methods: {
    save() {

    }
  }
}
</script>
<style lang='scss' scoped>
.img{
  width:50%;
  height: 200px;
  border: 1px solid gray;
  // position: relative;
  // left: 49%;
}

</style>
