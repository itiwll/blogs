(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{177:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"mongodb-base-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-base-api","aria-hidden":"true"}},[t._v("#")]),t._v(" mongodb base api")]),t._v(" "),a("ul",[a("li",[t._v("全局\n"),a("ul",[a("li",[t._v("mongo 进入db命令")]),t._v(" "),a("li",[t._v("show dbs 显示所有可用dbs")]),t._v(" "),a("li",[t._v("db 显示当前db")])])]),t._v(" "),a("li",[t._v("数据库\n"),a("ul",[a("li",[t._v("use [dbName] 使用或新建数据库")]),t._v(" "),a("li",[t._v("db.dropDatabase() 删除当前数据库")]),t._v(" "),a("li",[t._v("show collections 显示当前数据库所有集合（表）")]),t._v(" "),a("li",[t._v("db.collections.drop() 删除当前数据库所有集合（表）")])])]),t._v(" "),a("li",[t._v("增删改查\n"),a("ul",[a("li",[t._v("增\n"),a("ul",[a("li",[t._v("db.[collectionName].insert(object) 数据库插入一行数据")]),t._v(" "),a("li",[t._v("db.[collectionName].insertOne(object)"),a("sup",[t._v("3.2+")]),t._v(" 数据库插入一行数据")]),t._v(" "),a("li",[t._v("db.[collectionName].insertMany(object)"),a("sup",[t._v("3.2+")]),t._v(" 数据库插入多行数据")]),t._v(" "),a("li",[t._v("db.[collectionName].save(object) 指定_id=update(),否则是insert()")])])]),t._v(" "),a("li",[t._v("更新 db.[collectionName].update(query,update)")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("db"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("col"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("{"),a("span",{attrs:{class:"token string"}},[t._v("'title'")]),t._v(":"),a("span",{attrs:{class:"token string"}},[t._v("'MongoDB 教程'")]),t._v("}"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("{$"),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(":{"),a("span",{attrs:{class:"token string"}},[t._v("'title'")]),t._v(":"),a("span",{attrs:{class:"token string"}},[t._v("'MongoDB'")]),t._v("}}"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("删除 db.[collectionName].remove(query,justOne)")]),t._v(" "),a("li",[t._v("查询 db.[collectionName].find(query, projection)")])])]),t._v(" "),a("li",[t._v("条件\n"),a("ul",[a("li",[t._v("limit(Number)")]),t._v(" "),a("li",[t._v("skip(Number)")]),t._v(" "),a("li",[t._v("sort() 可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式")])])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("db"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("col"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("{}"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("limit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("skip"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("{"),a("span",{attrs:{class:"token string"}},[t._v('"likes"')]),t._v(":"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("}"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="Node-mongodb.md";s.default=e.exports}}]);