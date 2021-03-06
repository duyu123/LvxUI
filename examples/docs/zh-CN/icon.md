<script>
  var iconList = require('examples/icon.json');

  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>
<style>
  .demo-icon .source > i {
    color: #5a5e66;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  
  .demo-icon .source > i {
      color: #5a5e66;
      margin: 0 20px;
      font-size: 1.5em;
      vertical-align: middle;
  }
  
  .demo-icon .source > button {
    margin: 0 20px;
  }

  .page-component .content > ul.icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;

    @utils-vertical-center;

    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #99a9bf;
    }
    
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #5a5e66;
    }
    
    .icon-name {
      display: inline-block;
      padding: 0 3px;
      height: 1em;
      color: #5a5e66;
    }
    
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>
## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `lvx-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="lvx-icon-edit"></i>
<i class="lvx-icon-share"></i>
<i class="lvx-icon-delete"></i>
<lvx-button type="primary" icon="lvx-icon-search">搜索</lvx-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'lvx-icon-' + name"></i>
      <span class="icon-name">{{'lvx-icon-' + name}}</span>
    </span>
  </li>
</ul>
