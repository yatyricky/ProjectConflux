# 简介

本文记录在整个游戏过程中都会起作用的系统。

# 场景和弹框管理系统

## 简介

场景切换可能出现在很多地方，比如返回按钮、网络断开对话框。为了实现解耦，将场景的创建和切换都封装到场景弹框管理系统中，通过事件通知的方式切换场景。对于通用弹框也是如此，该管理器会注册所有全局的弹框，比如网络中断弹框。

由于场景管理器持有当前被激活的场景引用，所以全局弹框也由它来管理是比较方便的。


# 事件管理系统

## 简介

本系统其实是对 laya 提供的 EventDispatcher 的用法规范。为了提高各个场景的解耦度，要求每个场景内部只能发出内部能够处理的事件，而不是发送全局事件。全局事件只能由全局模块或者场景管理类发出，以此来提高代码可读性和可维护性。

## 实现方案

需要定义一个全局的事件管理器对象，该对象只会被全局模块访问到。每个场景类都会有自己单独的事件管理器对象，用于处理场景内部的事件。在场景类实例化时创建一个事件管理器对象，然后将该对象的引用注册到场景管理器中，场景中的模块在发送接收事件时，通过使用场景管理器中注册的事件管理器来实现。