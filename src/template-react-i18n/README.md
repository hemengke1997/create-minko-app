# template-react-i18n Via [create-minko-app](https://www.npmjs.com/package/create-minko-app)

## development

```sh
npm run dev
```

## Docker部署

### 测试环境
```sh
# build
docker build --build-arg NODE_ENV=test -t react-app:1.0 .
# run
docker run -d -p 3000:3000 --name react-app react-app:1.0
```

### 正式环境
```sh
# build
docker build --build-arg NODE_ENV=production -t react-app:1.0 .
# run
docker run -d -p 3000:3000 --name react-app react-app:1.0
```
