// 每个菜单页面，有头部搜索和列表以及分页的，可以用混入来代替
export default {
  data() {
    return {
      loading: false,
      queryForm: {},
      paginationQuery: {
        pageSize: 10,
        pageNum: 1,
        total: 0
      }
    }
  },
  created() {

  },
  methods: {
    reset() {
      for (const key in this.queryForm) {
        if (typeof (this.queryForm[key]) === 'string') {
          this.$set(this.queryForm, key, '')
        } else if (this.queryForm[key].constructor === Array) {
          this.$set(this.queryForm, key, [])
        } else if (this.queryForm[key].constructor === Object) {
          this.$set(this.queryForm, key, {})
        } else {
          this.$set(this.queryForm, key, null)
        }
      }
    },
    search() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    pageChange(data) {
      this.paginationQuery = data
      this.search()
    },
    deleteClick(row) {
      this.$msgConfirm('确认删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteEvent(row)
      }).catch(() => {})
    },
    batchDeleteClick(row) {
      if (this.multipleSelection && this.multipleSelection.length > 0) {
        this.$msgConfirm('确认删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.batchDeleteEvent()
        }).catch(() => {})
      } else {
        this.$msgConfirm('请选择')
      }
    },
    /** cloumns正常一维数组转成生成table-item的二维数组
     * items 正常table cloumns数组
     * rowTdNumb 每行多少个td，包括title和prop
     */
    handleCloumnsToExpandTable(items, rowTdNumb) {
      var arr = []
      // 调整传入table-item格式，默认保持每行显示3个， 除非item有设置colspan
      let totalSpan = 0
      const max = rowTdNumb
      let trArr = []
      items.forEach((item, index) => {
        const colspan = item.colspan || 2
        if (totalSpan + colspan > max) {
          totalSpan = 0
          arr.push(JSON.parse(JSON.stringify(trArr)))
          trArr = []
        }
        totalSpan += colspan
        trArr.push(item)
        if (items.length - 1 === index) {
          arr.push(JSON.parse(JSON.stringify(trArr)))
        }
      })
      console.log(arr)
      return arr
    }
  }
}
