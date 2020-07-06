<template>
  <!--  人员医疗保险费核销-->
  <div class="third-index documentsQuery">
    <section class="layer-tab">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="待核销" name="first">
          <to-be-write-off :show-audit-query="true">
            <template slot="tools">
              <div slot="table-title" class="box-header handle">
                <span class="box-title">人员医疗保险费待核销列表</span>
                <div class="box-tools">
                  <el-button type="primary" @click="calculate">核销</el-button>
                </div>
              </div>
            </template>
          </to-be-write-off>
        </el-tab-pane>
        <el-tab-pane label="已核销" name="second">
          <written-off :show-audit-query="true" />
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>

<script>
import WrittenOff from './components/WrittenOff'
import ToBeWriteOff from './components/ToBeWriteOff'
export default {
  name: 'DocumentsQuery',
  components: {
    WrittenOff,
    ToBeWriteOff
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
    calculate() {
      this.$msgSuccess('操作成功！')
    }
  }
}
</script>

<style scoped lang="scss"></style>
