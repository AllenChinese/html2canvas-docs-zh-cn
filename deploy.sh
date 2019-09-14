#!/usr/bin/env sh
#生成当前时间
time=`date '+%Y%m%d-%H%M%S'`

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'zjiawei.cn' > CNAME

git init
git add -A
git commit -m "deploy-$time"

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:allenchinese/html2canvas-docs-zh-cn.git master:gh-pages

cd -