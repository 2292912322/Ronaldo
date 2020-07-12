export default [
  {
    name: "CreateStoreOrder",
    desc: "创建订货单",
    params: {
      method: "CreateStoreOrder",
      storeCashierId: "",
      remark: "",
      arrivalDate: "", //送达时间
      itemList: []
    }
  },
  {
    name: "CheckStoreOrder",
    desc: "检测创建订货单",
    params: {
      method: "CheckStoreOrder",
      storeCashierId: "",
      remark: "",
      itemList: []
    }
  },
  {
    name: "CreditedStoreOrder",
    desc: "授信订货单",
    params: {
      method: "CreditedStoreOrder",
      storeCashierId: "",
      sOrderId: "",
      smsOrderId: "",
      validateCode: ""
    }
  }, //FindStoreOrder
  {
    name: "FindStoreOrder",
    desc: "查询订货单",
    params: {
      method: "FindStoreOrder",
      storeId: "",
      startDate: "",
      endDate: ""
    }
  },
  {
    name: "FindStoreOrderDetail",
    desc: "根据订货单ID获取订货单商品数据",
    params: {
      method: "FindStoreOrderDetail",
      sOrderId:""
    }
  },
  {
    name: "FindSupplierStorePOByStoreOrderIdForAll",
    desc: "根据订货单ID获取采购单列表所有数据",
    params: {
      method: "FindSupplierStorePOByStoreOrderIdForAll",
      sOrderId: ""
    }
  },
  {
    name: "PaymentStoreOrder",
    desc: "创建订货单之后支付扣钱",
    params: {
      method: "PaymentStoreOrder",
      storeCashierId: "",
      sOrderId: "",
      smsOrderId: "",
      validateCode: ""
    }
  },
  {
    name: "CancelStoreOrder",
    desc: "取消订货单",
    params: {
      method: "CancelStoreOrder",
      sOrderId: ""
    }
  },
  {
    name: "CancelSupplierStorePO",
    desc: "取消PO单",
    params: {
      method: "CancelSupplierStorePO",
      sStorePOId: "",
      storeCashierId: ""
    }
  }
];
