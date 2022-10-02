package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"encoding/json"
	// "fmt"
)

type Jobs struct{
	Title string `json:"title"`
	City string `json:"city"`
	IsShixi bool `json:"isShixi"`
	Tags []string `json:"tags"`
	Text string `json:"label"`
}



func sayHello(c *gin.Context/*gin框架中的临时变量，便于后续响应请求*/){
	data:=Jobs{
		Title: "后端开发实习生",
		City: "北京",
		IsShixi: true,
		Tags:[]string{"dev","houduan"},
		Text: "希望人没事",
	};
	Jobs,_:=json.Marshal(data)
	c.JSON(http.StatusOK,Jobs)
}
func main(){
	r:=gin.Default()//获取gin框架默认路由对象
	r.GET("/getdata",sayHello)//处理向"/"目录发起的get请求，并将其使用sayHello函数处理
	r.Run(":3000")
}
