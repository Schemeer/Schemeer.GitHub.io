本项目为使用Markdown维护的个人主页模板。

# 使用指南

[./source/img/logo.jpg](./source/img/logo.jpg)为头像或者logo，使用时可将其替换为自己的照片，需改名为logo.jpg

[./config.json](./config.json)中为配置信息，目前仅有Name值，修改Name的值为自己的名字，这会影响到网页的title以及导航栏左上角的标牌。

[./contact.md](./contact.md)中为使用markdown书写的个人联系方式，根据需要更改

[./index.md](./index.md)中为Home界面的主要内容

[./pages/course/index.md](./pages/course/index.md)为Course界面的主要内容

[./pages/resume/index.md](./pages/resume/index.md)为Resume界面的主要内容

[./pages/publications/index.md](./pages/publications/index.md)为Publications界面的主要内容

推荐使用[Typora](https://typora.io/)进行markdown文件的读写。Markdown语法介绍如下分别为具体的效果以及相应的语法。


# 一级标题

`#一级标题`

## 二级标题

`##二级标题`

### 三级标题

`###三级标题`

#### 四级标题

`####四级标题`

---

`---`分割线（三个减号）

列表测试

- 蔬菜
- 水果
- 肉类
  - 猪肉
  - 牛肉
    - M9和牛
    - ……
- ……

```markdown
- 蔬菜
- 水果
- 肉类
  - 猪肉
  - 牛肉
    - M9和牛
    - ……
- ……
```

代码环境：行内：两个 ` 符号中间（键盘esc下方，tab上方那个键，切换成英文）

多行：前三个，后三个 ` 符号中间

[超链接测试](https://www.baidu.com)

`[超链接测试](https://www.baidu.com)`

![logo](./source/img/logo.jpg =100x100)

`![logo](./source/img/logo.jpg =100x100)`，最后的=100x100是用于限制图片大小。