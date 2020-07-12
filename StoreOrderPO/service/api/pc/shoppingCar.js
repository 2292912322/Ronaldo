export default [
  {
    name: "GetShoppingCarItem",
    desc: "获取购物车数据",
    params: {
      method: "GetShoppingCarItem",
      storeCashierId: "",
      storeId:''
    }
  },
  {
    name: "UpdateShoppingCarItem",
    desc: "购物车修改",
    params: {
      method: "UpdateShoppingCarItem",
      storeCashierId: "",
      itemId: "",
      qty: ""
    }
  },
  {
    name: "ClearShoppingCarItem",
    desc: "清空购物车",
    params: {
      method: "ClearShoppingCarItem",
      storeCashierId: "",
    }
  },
  {
    name: "DeleteShoppingCarItem",
    desc: "删除购物车（多个）",
    params: {
      method: "DeleteShoppingCarItem",
      storeCashierId: "",
      itemId: [],
    }
  }
];
