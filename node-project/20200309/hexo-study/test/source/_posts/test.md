---
title: test
date: 2020-03-09 17:30:25
tags:
---

# 2020-03-09 MySQL 在 CentOS7 上的使用

## 1. 安装

```bash
    rpm -qa | grep mysql # 检测系统是否自带安装 MySQL
    rpm -e mysql    # 普通删除模式
    rpm -e --nodeps mysql   # 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除
    # yum 安装MySQL
    wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
    rpm -ivh mysql-community-release-el7-5.noarch.rpm
    yum update
    yum install mysql-server
    # 权限设置
    chown mysql:mysql -R /var/lib/mysql
    # 初始化MySQL
    mysqld --initialize
    # 启动、停止、重启、状态
    systemctl start mysqld
    systemctl stop mysqld
    systemctl restart mysqld
    systemctl status mysqld
    # 版本
    mysqladmin --version
```

## 2. 默认没有密码，进入初始化密码

```bash
    # 无密码进入
    mysql
    mysql> SHOW DATABASES;
    # 修改密码
    mysqladmin -u root password 'root'
    # 密码进入
    mysql -u root -p # 回车后输入刚刚设置的密码
```

## 3. MySQL 用户设置

> [mysql 创建用户报错 ERROR 1364 (HY000): Field 'ssl_cipher' doesn't have a default value](https://blog.csdn.net/weakfantasy/article/details/53886707)

```bash
    mysql -u root -p # 回车后输入刚刚设置的密码
    mysql> use mysql;
    mysql> INSERT INTO user (host, user, password, select_priv,  insert_priv, update_priv) VALUES ('localhost', 'guest', PASSWORD('guest123'), 'Y', 'Y', 'Y');
    # 这个时候报错：ERROR 1364 (HY000): Field 'ssl_cipher' doesn't have a default value，原因：mysql默认配置严格模式，该模式禁止通过insert的方式直接修改mysql库中的user表进行添加新用户
    mysql --help | grep .cnf # 查看配置文件在哪里，默认在/etc/my.cnf
    find / -name 'my.cnf' # 或者用find查
    # 修改 /etc/my.cnf
    # sql-mode=NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
    systemctl restart mysqld # 重启服务，重新进入上边第一步新建用户
```

## 4. MySQL 连接、创建数据库

```bash
    mysql -u root -p # 回车后输入刚刚设置的密码
    mysql> SHOW DATABASES;
    mysql> CREATE DATABASE 数据库名;
    mysql> drop database 数据库名;
```

## 5. MySQL 创建数据表、删除数据表

```bash
    mysql> CREATE TABLE table_name (column_name column_type);
    # 例如
    CREATE TABLE IF NOT EXISTS `runoob_tbl` (
        `runoob_id` INT UNSIGNED AUTO_INCREMENT,
        `runoob_title` VARCHAR(100) NOT NULL,
        `runoob_author` VARCHAR(400) NOT NULL,
        `submission_date` DATE,
        PRIMARY KEY (`runoob_id`)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;
    mysql> DROP TABLE table_name;
```

## 5. MySQL 插入、查询、更新、删除数据

```bash
    mysql> INSERT INTO table_name ( field1, field2,...fieldN ) VALUES (valueA1,valueA2,...valueAN),(valueB1,valueB2,...valueBN),(valueC1,valueC2,...valueCN)......;
    mysql> SELECT column_name,column_name FROM table_name [WHERE Clause] [LIMIT N] [ OFFSET M]
    mysql> UPDATE table_name SET column_name='' WHERE Clause
    mysql> DELETE FROM table_name WHERE Clause
```

## 6. MySQL WHERE 子句

```bash
    mysql> SELECT field1, field2,...fieldN FROM table_name1, table_name2... [WHERE condition1 [AND [OR]] condition2.....
    # BINARY区分大小写
```

## 7. MySQL LiKE 子句

```bash
    mysql> SELECT field1, field2,...fieldN FROM table_name WHERE field1 LIKE condition1 [AND [OR]] filed2 = 'somevalue'
    # 正则匹配功能
    # '%a'     //以a结尾的数据
    # 'a%'     //以a开头的数据
    # '%a%'    //含有a的数据
    # '_a_'    //三位且中间字母是a的
    # '_a'     //两位且结尾字母是a的
    # 'a_'     //两位且开头字母是a的
    #
    # %：表示任意 0 个或多个字符。可匹配任意类型和长度的字符，有些情况下若# 是中文，请使用两个百分号（%%）表示。
    # _：表示任意单个字符。匹配单个任意字符，它常用来限制表达式的字符长度语句。
    # []：表示括号内所列字符中的一个（类似正则表达式）。指定一个字符、字符串# 或范围，要求所匹配对象为它们中的任一个。
    # [^] ：表示不在括号所列之内的单个字符。其取值和 [] 相同，但它要求所匹# 配对象为指定字符以外的任一个字符。
    # 查询内容包含通配符时,由于通配符的缘故，导致我们查询特殊字符 “%”、“_”# 、“[” 的语句无法正常实现，而把特殊字符用 “[ ]” 括起便可正常查询。
```

## 8. MySQL UNION 操作符

```bash
    SELECT expression1, expression2, ... expression_n
    FROM tables
    [WHERE conditions]
    UNION [ALL | DISTINCT]
    SELECT expression1, expression2, ... expression_n
    FROM tables
    [WHERE conditions];
```
