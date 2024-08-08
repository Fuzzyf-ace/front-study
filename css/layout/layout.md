# 布局：

如果使用两个值制定布局方式，to clarify the outside layout and inside layout for children
```
type outside = inline|block
type inside = flow|flow-root|flex|grid|table|ruby
display:  <outside> <inside>
```
## outside
- inline: 内容在一行显示，不会换行
- block: 内容单独占据一行

## inside
- flow: 内容按照文档流排列
- flow-root: 创建一个新的块级格式化上下文(Block Formatting Context), 与外界隔离，不参与margin collapse, html元素就是flow-root
- flex: flex box model
- grid: grid box model
- table: table box model
- ruby: ruby box model 可以为汉字添加拼音注解

