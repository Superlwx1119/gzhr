<template>
  <div>
    <box-title title-name="单位缴费明细" />
    <!-- 产品交互画的丑，不按他的来 -->
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
</template>

<script>
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    BoxTitle
  },
  data() {
    return {
      form: [
        {
          key: '单位管理码',
          value: '430199208801'
        },
        {
          key: '单位名称',
          value: '医疗机构'
        },
        {
          key: '费款所属期',
          value: '2020-01'
        },
        {
          key: '险种',
          value: '1654587.54'
        },
        {
          key: '应缴金额（元）',
          value: '未审核'
        },
        {
          key: '已实缴金额（元）',
          value: '2020-02-20'
        },
        {
          key: '到账标志',
          value: '赵X'
        },
        {
          key: '到账时间',
          value: '2020-02-12'
        }
      ]
    }
  }
}
</script>

<style>
.info-content {
  margin-bottom: 20px;
}
</style>
