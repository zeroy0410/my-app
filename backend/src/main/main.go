package main

import (
	"boss.com/src/mongo"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"net/http"
	// "fmt"
)

type Jobs struct {
	Title   string   `json:"title"`
	City    string   `json:"city"`
	IsShixi bool     `json:"isShixi"`
	Tags    []string `json:"tags"`
	Text    string   `json:"text"`
	href    string
}

func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
		origin := c.Request.Header.Get("Origin") //请求头部
		if origin != "" {
			// 当Access-Control-Allow-Credentials为true时，将*替换为指定的域名
			c.Header("Access-Control-Allow-Origin", "http://localhost:3000")
			// c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, UPDATE")
			c.Header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Origin, X-Requested-With, X-Extra-Header, Content-Type, Accept, Authorization")
			// c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type")
			// //   c.Header("Access-Control-Allow-Credentials", "true")
			// c.Header("Access-Control-Max-Age", "86400") // 可选
			// c.Set("content-type", "application/json")   // 可选
		}

		if method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
		}

		c.Next()
	}
}

func sayHello(c *gin.Context /*gin框架中的临时变量，便于后续响应请求*/) {
	Jobs, _ := json.Marshal(mongo.JobsData())
	c.JSON(http.StatusOK, string(Jobs))
}
func main() {
	r := gin.Default() //获取gin框架默认路由对象
	r.Use(Cors())
	r.GET("/getdata", sayHello) //处理向"/"目录发起的get请求，并将其使用sayHello函数处理
	r.Run(":8080")
}
