export default [
  {
    name: "FindCategory",
    desc: "获取目录结构",
    params: {
      method: "FindCategory",
      storeId: ""
    }
  },
  {
    name: "FindItemByCategoryId",
    desc: "根据目录获取商品列表",
    params: {
      method: "FindItemByCategoryId",
      storeId: "",
      etpCode: "",
      categoryId: ""
    }
  },
  {
    name: "FindItemByBarcode",
    desc: "根据条码获取商品列表",
    params: {
      method: "FindItemByBarcode",
      storeId: "",
      etpCode: "",
      barcode: ""
    }
  },
  {
    name: "FindItemBySearchKey",
    desc: "根据搜索关键字获取商品列表",
    params: {
      method: "FindItemBySearchKey",
      storeId: "",
      etpCode: "",
      searchKey: ""
    }
  },
  {
    name: "FindItemBySupplierId",
    desc: "根据供应商Id获取商品列表",
    params: {
      method: "FindItemBySearchKey",
      storeId: "",
      etpCode: "",
      searchKey: "",
      supplierId: ""
    }
  },
  {
    name: "FindItemByHotSales",
    desc: "获取爆品推荐商品列表",
    params: {
      method: "FindItemByHotSales",
      storeId: "",
      etpCode: "",
      top: 10,
      lastCreateDate: ""
    }
  },
  {
    name: "FindItemByHistory",
    desc: "获取历史购买商品列表",
    params: {
      method: "FindItemByHistory",
      storeId: "",
      etpCode: "",
      top: 50
    }
  },
  {
    name: "FindItemDetailByStoreItemId",
    desc: "获取商品详情",
    params: {
      method: "FindItemDetailByStoreItemId",
      storeId: "",
      storeItemId: "",
      etpCode: ""
    }
  },
  {
    name: "FindAccountReceipt",
    desc: "获取电子回单",
    params: {
      method: "FindAccountReceipt",
      storeId: "",
      transactionId:''
    }
  }
];
