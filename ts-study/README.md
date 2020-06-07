# TypeScript学习笔记

## 前言
1. 2020要抓紧时间学习TypeScript
2. 慕课网 - TypeScipt系统入门到项目实战

## 主要内容
1. 基础配置
    ```bash
        npm init -y 
        npm install -D typescript tsc ts-node
        # tsc: .ts->.js; ts-node: ts-node .ts === node .js
        tsc --init # create tsconfig.json
        tsc # tsconfig.json->transform 
    ```
    1. [tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
        1. files
        2. include
        3. exclude
        4. files | include | exclude 支持glob通配
            * \* 匹配0或多个字符（不包括目录分隔符）
            * ? 匹配一个任意字符（不包括目录分隔符）
            * \*\*\/ 递归匹配任意子目录
2. 基础语法
3. 爬虫项目
4. 数据展示项目（Express+React+Echarts）