##

当你在 JavaScript、CSS 或 *.vue 文件中使用相对路径 (必须以 . 开头) 引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。

url 转换规则

如果 URL 是一个绝对路径 (例如 /images/foo.png)，它将会被保留不变
如果 URL 以 . 开头，它会作为一个相对模块请求被解释且基于你的文件系统中的目录结构进行解析。
如果 URL 以 ~ 开头，其后的任何内容都会作为一个模块请求被解析。这意味着你甚至可以引用 Node 模块中的资源
如果 URL 以 @ 开头，它也会作为一个模块请求被解析。它的用处在于 Vue CLI 默认会设置一个指向 <projectRoot>/src 的别名 @