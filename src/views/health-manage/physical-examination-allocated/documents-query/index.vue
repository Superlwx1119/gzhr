<template>
  <!--  拨付单查询-->
  <div class="documentsQuery">
    <section class="layer-tab">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="拨付信息" name="first">
          <Allocated :show-audit-query="true" />
        </el-tab-pane>
        <el-tab-pane label="业务信息" name="second">
          <Business :show-audit-query="true">
            <template slot="tools">
              <div slot="table-title" class="box-header">
                <span class="box-title">业务明细列表</span>
              </div>
            </template>
          </Business>
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>

<script>
import Allocated from '../components/allocated'
import Business from '../components/business'
export default {
  name: 'DocumentsQuery',
  components: {
    Allocated,
    Business
  },
  mixins: [],
  props: {},
  data() {
    return {
      activeName: 'first'
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss"></style>
