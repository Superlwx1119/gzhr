<!-- 试题详情 -->
<template>
  <div class="question-detail-box">
    <div class="title">
      {{ questionData.title + '(' + questionData.typeDesc + ',' }}
      <span style="color: red;">分值：{{ questionData.score }}</span>
      )
    </div>
    <ul class="options">
      <li v-for="(item, index) in questionData.options" :key="item" :class="index == 0 ? 'active': ''">
        {{ item }}
        <i v-if="index == 0" class="el-icon-check" />
      </li>
    </ul>
    <p class="answer">
      标准答案：{{ questionData.answer }}
    </p>
    <p class="answerDesc">
      解释：{{ questionData.answerDesc }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    questionData: {
      type: Object,
      default: () => {
        return {
          title: '一下关于TokenBus局域网特点描述中，哪个是错误的？',
          typeDesc: '判断题',
          score: 5,
          options: [
            'A.令牌是一种特殊结构的帧，用来控制阶段对总线的访问权',
            'B.令牌总线必须周期性的为新节点加入环境机会',
            'C.令牌总线不需要进行维护',
            'D.令牌总线能够提供优先级服务'
          ],
          answer: 'A',
          answerDesc: '关于tokenBus局域网特点，明确规定令牌不是一种特殊结果的帧，用来控制结构点对总线的访问权。'
        }
      }
    }
  },
  computed: {
    getTitle() {
      if (this.questionData) {
        return this.questionData.title + '(' + this.questionData.typeDesc + ')'
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.question-detail-box{
  margin-bottom: 15px;
  padding: 15px;
  background: rgb(244, 244, 245);
  border: 1px solid #DCDFE6;
  border-radius: 5px;
  box-sizing: border-box;
  .title{
    line-height: 40px;
    font-size: 16px;
  }
  ul{
    margin: 10px 0;
    padding: 0;
    li{
      // list-style: upper-alpha;
      margin-bottom: 10px;
      padding: 8px 15px;
      list-style: none;
      line-height: 20px;
      border: 1px solid #DCDFE6;
      border-radius: 4px;
      background: #fff;
    }
    .active{
      position: relative;
      padding-right: 60px;
      box-sizing: border-box;
      border-color: #409EFF;
      color: #409EFF;
      i {
        position: absolute;
        top: 0;
        right: 15px;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .answer{
    font-size: 16px;
    color: #409EFF;
  }
  .answerDesc{
    font-size: 13px;

  }
}
</style>
