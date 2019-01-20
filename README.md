# xuanxuan-extension-boilerplate

[喧喧](https://github.com/easysoft/xuanxuan)扩展开发模版。

## 安装

通过 `git` 克隆项目到本地：

```shell
git clone --depth 1 --single-branch --branch master https://github.com/catouse/xuanxuan-extension-boilerplate.git xuanxuan-your-extension-name
```

然后进入项目目录并安装依赖模块：

```shell
cd xuanxuan-your-extension-name
npm install
```

## 配置

修改扩展配置文件 `src/package.json`。

## 开发

### 启动开发模式

```shell
npm run dev
```

### 编译

```shell
npm run dist
```

## 打包

```shell
npm run package
```

最终扩展包在 `release/` 目录下。
