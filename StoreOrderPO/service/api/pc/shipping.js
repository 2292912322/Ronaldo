export default [
  {
    name: "ReceivingSupplierStorePO",
    desc: "店铺收货",
    params: {
      method: "ReceivingSupplierStorePO",
      storeCashierId: "",
      sStorePOId: "",
      itemList: [] //[{"Id":"","ReceivedQty":0}]
    }
  },
  // {
  //   name: "FindSupplierStorePOByStoreIdAndNotDoneForAll",
  //   desc: "根据店铺获取未完成的供应商采购单列表所有数据",
  //   params: {
  //     method: "FindSupplierStorePOByStoreIdAndNotDoneForAll",
  //     storeId: "",
  //     poType:""//0采购  3送货单  4换货单
  //   }
  // },//FindStoreOrder
  // {
  //   name: "FindSupplierStorePOByStoreIdAndNotDoneForAll",
  //   desc: "根据店铺和条形码获取未完成的供应商采购单列表所有数据", //根据店铺获取未完成的供应商采购单列表所有数据
  //   params: {
  //     method: "FindSupplierStorePOByStoreIdAndNotDoneForAll",
  //     storeId: "",
  //     poType: "", //0采购  3送货单  4换货单
  //     itemBarcode: ""
  //   }
  // },
  {
    name: "FindSupplierStorePOByStoreIdAndDone",
    desc: "根据店铺获取已完成的供应商采购单列表所有数据",
    params: {
      method: "FindSupplierStorePOByStoreIdAndDone",
      storeId: "",
      poType: "", //0采购  3送货单  4换货单
      top: 10,
      lastCreateDate: "" //小于的下单时间
    }
  },
  {
    name: "FindSupplierStorePOByQueryAll",
    desc: "根据模糊查询获取采购单列表所有数据",
    params: {
      method: "FindSupplierStorePOByQuery",
      storeId: "",
      param: {}
    }
  },
  {
    name: "FindSupplierStorePOByQuery",
    desc: "根据模糊查询获取采购单列表所有数据(分页)",
    params: {
      method: "FindSupplierStorePOByQuery",
      storeId: "",
      top: 10,
      param: {},
      lastCreateDate: "" //小于的下单时间
    }
  },
  {
    name: "CreatePONumberBySupplierStorePO",
    desc: "创建PONumber",
    params: {
      method: "CreatePONumberBySupplierStorePO",
      storeCode: ""
    }
  },
  {
    name: "CreateSupplierStorePOByNoPoReceived",
    desc: "创建送货单",
    params: {
      method: "CreateSupplierStorePOByNoPoReceived",
      storeCashierId: "",
      number: "",
      remark: "",
      itemList: []
    }
  },
  {
    name: "CreateSupplierStorePOByItemChangeItem",
    desc: "创建换货单",
    params: {
      method: "CreateSupplierStorePOByItemChangeItem",
      storeCashierId: "",
      remark: "",
      oldStorePOId: "",
      itemList: []
    }
  },
  {
    name: "ReceivingSupplierStorePOByItemChangeItem",
    desc: "换货单收货",
    params: {
      method: "ReceivingSupplierStorePOByItemChangeItem",
      storeCashierId: "",
      sStorePOId: "",
      itemList: []
    }
  },
  {
    name: "CreateSupplierStorePOBySalesGiftItem",
    desc: "创建赠品单",
    params: {
      method: "CreateSupplierStorePOBySalesGiftItem",
      storeCashierId: "",
      remark: "",
      oldStorePOId: "",
      itemList: []
    }
  },
  {
    name: "CreateSupplierStorePOByRefund",
    desc: "创建退货单",
    params: {
      method: "CreateSupplierStorePOByRefund",
      storeCashierId: "",
      remark: "",
      number:'',
      itemList: []
    }
  },
  {
    name: "ReceivingSupplierStorePOByRefund",
    desc: "退货单收货",
    params: {
      method: "ReceivingSupplierStorePOByRefund",
      storeCashierId: "",
      sStorePOId:''
    }
  },
  {
    name: "FindSupplierStorePODetailByPOId",
    desc: "根据ID获取PO单明细",
    params: {
      method: "FindSupplierStorePODetailByPOId",
      storeId: "",
      sStorePOId:''
    }
  }
];
