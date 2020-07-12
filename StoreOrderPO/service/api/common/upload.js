export default [
  {
    name: "UpdateImageByStorePOId",
    desc: "上传供应商采购单图片",
    params: {
      method: "UpdateImageByStorePOId",
      sStorePOId: "",
      fileInfos:[]
    }
  },
  {
    name: "UploadFile",
    desc: "上传供应商采购单图片",
    params: {
      method: "UploadFile",
      type:'FileTrans',
      savePath: "StorePlanogram",
      ISFILEUNRENAME:false,
      file:[]
    },
    contentType: 'multipart/form-data'
  }
];
