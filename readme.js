Todos

1.根据页面效果  划分组件
2.创建组件
Box -- 外层盒子
Content -- 内部功能
    Add -- 添加
    List -- 显示任务列表
    Footer -- 底部功能
3. 将HTML中内容  拆分至各个组件
4. 将数据存储在Content 中  数据存储在localStronge中
      要在Content中初始化State对象
5. 实现Add的功能
   a 将添加数据的文本框绑定到state对象中
   b 敲回车提交数据   form表单的onSubmit---> 阻止默认事件   向父组件传递数据 （3步）  不要忘了将数据放到localStorage中
6. 在组件第一次创建的时候  要从localStorage中 读取数据
7. 以属性的方式 将Content中state里面的list数据 传递给List组件， 在List组件中 展示数据
8. 将CHheckbox进行双向数据绑定  更新isCompleted就是更新了父组件中的数据  只需要让父组件更新就可以了
9. 删除功能    子组件向父组件传递要删除数据的id   在父组件中通过filter方法对数组数据进行过滤
