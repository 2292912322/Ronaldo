# 发布说明

### 编译方式发布:
1. 修改配置文件<根目录/static/config.js>, 如:
```
  let XY_APP_NAME = '比邻客'
  let XY_WX_APPID = 'wxeef3ba2a59f4aa5e'
  let XY_API = 'https://st.be-linker.com'
```
2. 替换网站icon图标<根目录/static/favicon.ico>
3. 替换网站Logo图标<根目录/static/logo.png>
4. 替换公众号业务域名验证文件, 如: <根目录/static/MP_verify_y7kFdkFxgaqFhnxc.txt>
5. 替换支付验证文件, 如: <根目录/static/kYtJfmiH8n.txt>
6. 执行命令:
```
npm install
npm run build
```
7. 文件夹<根目录/static/dist>即为编译后的网站
### 改配置方式发布:

修改和替换
>编译方式发布

<根目录/static/dist>文件夹中文件即可(第1~第5点提到的相关文件).

### *兼容iphoneX的env编译报错的依赖组件修复(前提是如果你使用了postcss)
如:
```
bottom: calc(#{rsh(100)} + env(safe-area-inset-bottom));
```
找到
>/node_modules/postcss-cssnext/node_modules/reduce-css-calc/dist/index.js
在
```
var contents = _postcssValueParser2.default.stringify(node.nodes);
```
后加一句:
```
if (contents.indexOf('constant') >= 0 || contents.indexOf('env') >= 0) return;
```