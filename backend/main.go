package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type Jobs struct{
	title string
	city string
	isShixi bool
	tags []string
	text string
}

var data []Jobs={
	Jobs{
		title: "后端开发实习生",
		city: "北京",
		isShixi: true,
		tags:["dev","houduan"],
		text: "1、参与电商基础数据建设，参与电商动态定价系统设计和搭建；\
		2、参与电商分布式数据接入调度系统搭建及优化，打造高性能、高可用的数据接入中台；",
	},
	Jobs{
		title: "后端开发工程师-互娱研发",
		city: "深圳",
		isShixi: false,
		tags:["dev","houduan"],
		text: "1、参与系统架构设计、优化，提升系统性能和开发效率，保证高并发高可靠；\
	2、通过不断的技术研究和创新，推动业务的快速发展和高效迭代；",
	}
}

func sayHello(c *gin.Context/*gin框架中的临时变量，便于后续响应请求*/){
	c.JSON(http.StatusOK,gin.H{//返回一个json数据
		{

		},
		
	})
}
func main(){
	r:=gin.Default()//获取gin框架默认路由对象
	r.GET("/",sayHello)//处理向"/"目录发起的get请求，并将其使用sayHello函数处理
	r.Run()
}
