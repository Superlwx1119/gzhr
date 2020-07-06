<template>
  <!--  支付信息-->
  <section class="layer">
    <div class="box">
      <div class="box-header">
        <span class="box-title">支付信息</span>
      </div>
      <div class="box-body">
        <List :is-index="true" :is-border="true" :show-summary="true" :columns="tableColumns" :data="tableData" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PayInfo',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      tableColumns: [
        { label: '政策类型', prop: 'type', align: 'center' },
        { label: '基金名称', prop: 'name', align: 'center' },
        { label: '支付金额(元)', prop: 'price', align: 'center' },
        { label: '调整金额(元)', prop: 'price', align: 'center' },
        { label: '调整后金额(元)', prop: 'price', align: 'center' },
        { label: '支付比例(%)', prop: 'price', align: 'center' }
      ],
      tableData: [
        { type: '共付段第一段', name: '统筹基金', price: '100' },
        { type: '共付段第一段', name: '企业补充基金', price: '200' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped lang="scss"></style>
