# 客户端工程介绍

## 基本结构

laya/assets 是用来存放资源的，放在该文件夹中的资源可以被 laya 的编辑器找到。

运行项目前，需要先将布局文件发布一次。否则会出现资源文件找不到的报错。

## 代码结构

scr 为代码文件根目录，ui 为 layabox 的布局文件导出的文件，请勿手动修改其中的内容。

代码根目录用于定义程序入口、全局变量和方法。

## 代码介绍

Framework.js 是整个项目的启动入口，该文件在加载时就会启动。除此之外，禁止在其他的地方用静态代码块执行程序。

Utils.js 用于定义通用的全局函数和变量。



