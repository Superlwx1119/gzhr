export default {
  //  人员登记
  staffRegistration: {
    //  新增人员信息
    addPerson: '/person',
    //  修改人员信息
    modifyPerson: '/person',
    //  查询人员信息
    list: '/person/list',
    //  查询人员详情
    personDetail: '/person/detail',
    //  人员进入申报
    personApply: '/person/apply',
    //  删除人员信息
    deletePerson: '/person'
  },
  // 人员离退管理
  dimission: {
    // 查询离退人员待审核列表
    list: '/person/retire/list',
    // 查询待审核人员离退列表
    querypendinglist: '/person/retire/querypendinglist',
    // 可退离人员查询列表
    canBeList: '/person/normal/list',
    // 添加离退人员信息
    retire: '/person/retire',
    // 离退人员申报
    retireApply: '/person/retire/apply',
    // 离退人员审核
    retireAudit: '/person/retire/approve',
    // 删除离退人员信息
    retireDelete: '/person/retire',
    // 离退人员申报
    retireChange: '/person/retire',
    // 审核人员详情
    info: '/person/retire/info'
  },
  newAudit: {
    // 人员进入审核
    approveNew: '/person/approve'
  },
  // 人员退出管理
  exit: {
    // 新增人员退出信息
    addExit: '/person/exit',
    // 修改人员退出信息
    changeExit: '/person/exit/modifyExitPersonInfo',
    // 删除人员退出信息
    deleteExit: '/person/exit',
    // 人员退出申报
    applyExit: '/person/exit/apply',
    // 人员退出审核
    approveExit: '/person/exit/approve',
    // 人员退出详情
    infoExit: '/person/exit/info',
    // 人员退出待审核列表
    exitList: '/person/exit/list',
    // 查询可退出人员列表
    canExitPersonsList: '/person/exit/canExitPersonsList',
    // 待审核人员退出列表
    querypendinglist: '/person/exit/querypendinglist'
  }
}
