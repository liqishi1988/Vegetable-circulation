# 菜通达微信小程序 · 1:1 视觉复刻源码 V2

本项目以微信原生小程序、TypeScript、WXML 和 WXSS 为最终前端技术选型，按照 `miniprogram/design-screens` 中的 27 张设计稿重新实现全部页面。页面主体由真实的 `view`、`text`、`image`、`input`、`picker`、`textarea`、`button` 和业务组件组成，设计稿图片仅作为视觉对照，不参与页面渲染。

## 使用方法

1. 打开微信开发者工具。
2. 选择“导入项目”。
3. 项目目录选择本文件夹。
4. 使用测试号或替换 `project.config.json` 中的 AppID。
5. 编译并预览。

项目已开启免登录体验，首次打开直接进入市场首页。登录页仍保留在 `pages/login/index`，便于后续接入微信授权。

## 已实现流程

- 登录、角色选择和主体/基地认证。
- 市场首页、现货列表、搜索筛选、行情和基地店铺。
- 发布、编辑和管理货源，发布求购。
- 在线询价、报价详情、交易确认。
- 订单、装车、运输、司机任务、验收。
- 问题申报、售后协商和平台介入。
- 消息、个人中心及设置帮助。
- 与设计稿一致的绿色主色、橙色价格与警示色、圆角卡片、表单、步骤条、底部导航和真实蔬菜图片。

共包含 27 个页面，底部 5 个主导航、返回按钮、主要卡片和业务按钮均已配置跳转或反馈交互。

## 项目结构

- `miniprogram/design-screens`：27 张页面设计基准图，用于尺寸、间距、颜色与内容对照
- `miniprogram/components/app-header`：统一状态栏和顶部导航
- `miniprogram/components/product-card`：商品信息卡片
- `miniprogram/components/step-bar`：发布、认证、订单和售后流程步骤条
- `miniprogram/pages`：27 个页面的真实 WXML 视图、WXSS 样式及 TypeScript 交互逻辑
- `miniprogram/assets`：商品、人物、基地、地图、凭证和图标素材
- `miniprogram/data`：本地演示数据

## 说明

当前使用本地模拟数据，不依赖后端。正式接入时，将 `data/mock.ts` 替换为 API 服务层，并在 `project.config.json` 配置正式 AppID。
