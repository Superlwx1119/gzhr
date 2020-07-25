export default {
  //  人员登记
  staffRegistration: {
    //  新增人员信息
    addPerson: '/person',
    //  修改人员信息
    modifyCorp: '/corp/modifyCorp',
    //  查询人员信息
    list: '/person/list',
    //  查询人员信息详情
    deletePerson: '/person'
  },
  // 人员离退审核
  dimissionAudit: {
    // 待审核列表
    list: '/person/retire/list',
    // 审核人员详情
    info: '/person/retire/info'
  }
}
