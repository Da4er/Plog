#!/usr/bin/env python
# coding=utf-8

import os

from flask.ext.script import Manager
from flask.ext.script import Shell

from app import create_app
from app import mongo
from app import login_manager
from app import mail
from app.core.models.roles import Role
from app.core.models.settings import Setting
from app.core.models.users import User
from app.core.models.posts import Post
from app.core.models.posts import Posts
from app.core.models.pages import Page
from app.core.models.pages import Pages
from app.core.models.permissions import Permission
from app.core.models.permissions_roles import PermissionsRoles

# 启用覆盖测试
COV = None
if os.environ.get('PG_COVERAGE'):
    import coverage
    COV = coverage.coverage(branch=True, include='app/*')
    COV.start()

# 导入.env内的环境配置
if os.path.exists('.env'):
    print "Importing environment vars from .env"
    for line in open('.env'):
        var = line.strip().split('=')
        if len(var) == 2:
            os.environ[var[0]] = var[1]


# 创建App
app = create_app(os.getenv('PLOG_CONFIG') or 'default')
manager = Manager(app)


# Manager Script上下文
def make_shell_context():
    return dict(app=app, mongo=mongo, login_manager=login_manager, mail=mail, Role=Role, Setting=Setting,
                User=User, Post=Post, Posts=Posts, Page=Page, Pages=Pages)
manager.add_command('shell', Shell(make_context=make_shell_context))


@manager.command
def deploy():
    """
    执行部署任务
    :return:
    """

    # 默认角色添加
    Role.insert_default_roles()
    # 权限数据库索引与默认数据添加
    Permission.create_table_indexes()
    Permission.insert_defaults_permissions()
    # 权限角色关系数据库索引与默认数据添加
    PermissionsRoles.create_table_indexes()
    PermissionsRoles.insert_defaults_permissions_roles()
    # 文章数据库索引
    Post.create_table_indexes()
    # 用户数据库索引
    User.create_table_indexes()
    # 设置数据库索引与默认数据添加
    Setting.insert_default_settings()


@manager.command
def test():
    pass


if __name__ == '__main__':
    manager.run()
