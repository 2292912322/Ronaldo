export default [
  {
    name: "CheckAuthByPaymentBoss",
    desc: "是否有支付权限",
    params: {
      method: "CheckAuthByPaymentBoss",
      storeCashierId: ""
    }
  },
  {
    name: "FindSupplierStorePOPaymentBossByStorePOId",
    desc: "根据供应商采购单ID获取支付单",
    params: {
      method: "FindSupplierStorePOPaymentBossByStorePOId",
      sStorePOId: ""
    }
  },
  {
    name: "PaymentSupplierStorePO",
    desc: "支付供应商采购单",
    params: {
      method: "PaymentSupplierStorePO",
      storeCashierId: "",
      sStorePOId: "",
      // paymentTypeId: "",
      // openId: ""
    }
  },
  {
    name: "CheckStoreFinanceCreditStatus",
    desc: "检测店铺金融平台授信状态",
    params: {
      method: "CheckStoreFinanceCreditStatus",
      storeId: ""
    }
  },
  {
    name: "FindAccountInfo",
    desc: "获取账户信息",
    params: {
      method: "FindAccountInfo",
      storeId: ""
    }
  },
  {
    name: "GoRepayment",
    desc: "去还款",
    params: {
      method: "GoRepayment",
      storeId: ""
    }
  },
  {
    name: "FindAccountTrans",
    desc: " 获取账户流水",
    params: {
      method: "FindAccountTrans",
      storeId: "",
      page: 1,
      rows: 20
    }
  },
  {
    name: "PaymentStoreOrderSendSms",
    desc: " 创建订货单之后支付发送验证码",
    params: {
      method: "PaymentStoreOrderSendSms",
      storeCashierId: "",
      sOrderId: ""
    }
  },
  {
    name: "PaymentStoreOrderCheck",
    desc: " 创建订货单之后检测支付行为",
    params: {
      method: "PaymentStoreOrderCheck",
      storeCashierId: "",
      sOrderId: ""
    }
  }
];
