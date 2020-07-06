<template>
  <form-dialog
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-body">
        <box-title title-name="包干费用拨付信息" />
        <div class="detail-info">
          <div class="info-content">
            <div v-for="(item,key, index) in form" :key="index" class="info-item" style="width: 25%">
              <span class="item-label" style="width: 135px">{{ item.key }}：</span>
              <el-tooltip class="item" effect="dark" :content="'' + item.value" placement="top">
                <span class="item-text" style="width: calc(100% - 135px)">{{ item.value }}</span>
              </el-tooltip>
            </div>
          </div>
        </div>
        <box-title title-name="单位信息" />
        <div class="detail-info">
          <div class="info-content">
            <div v-for="(item,key, index) in form" :key="index" class="info-item" style="width: 25%">
              <span class="item-label" style="width: 135px">{{ item.key }}：</span>
              <el-tooltip class="item" effect="dark" :content="'' + item.value" placement="top">
                <span class="item-text" style="width: calc(100% - 135px)">{{ item.value }}</span>
              </el-tooltip>
            </div>
          </div>
        </div>
        <box-title title-name="银行信息" />
        <div class="detail-info">
          <div class="info-content">
            <div v-for="(item,key, index) in form" :key="index" class="info-item" style="width: 25%">
              <span class="item-label" style="width: 135px">{{ item.key }}：</span>
              <el-tooltip class="item" effect="dark" :content="'' + item.value" placement="top">
                <span class="item-text" style="width: calc(100% - 135px)">{{ item.value }}</span>
              </el-tooltip>
            </div>
          </div>
        </div>
      </div>
      <el-col :span="24">
        <el-button type="primary" style="float: right" @click="closeDialog">取消</el-button>
      </el-col>
    </div>
  </form-dialog>
</template>
<script>
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    BoxTitle
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      form: [
        {
          key: '支付计划编码',
          value: '430199208801'
        },
        {
          key: '拨付对象',
          value: '医疗机构'
        },
        {
          key: '费款所属期',
          value: '2020-01'
        },
        {
          key: '拨付总额',
          value: '1654587.54'
        },
        {
          key: '审核状态',
          value: '未审核'
        },
        {
          key: '审核时间',
          value: '2020-02-20'
        },
        {
          key: '审核人',
          value: '赵X'
        },
        {
          key: '经办时间',
          value: '2020-02-12'
        },
        {
          key: '经办人',
          value: '业务经办二'
        },
        {
          key: '经办机构',
          value: 'XX医保局'
        }
      ]
    }
  },
  methods: {
    // resetForm() {
    //   this.$emit('closeAll', false)
    //   this.$refs.ruleFrom.elForm.resetFields()
    // },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveEvent() {
      this.$msgSuccess('保存成功')
      this.$emit('closeAll', false)
    },
    // },
    isShow(v) {
      this.$emit('closeAll', false)
    }
  }
}
</script>

<style lang="scss">
.box-body{
  height: 100%;
}
.detail-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 16px;
  &>div {
    margin-right: 30px;
    label {
      color: #636363;
    }
    span {
      color: #101010;
    }
  }
}
</style>
