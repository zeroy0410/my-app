package main
import (
    "fmt"
    "encoding/json"
)

type Jobs struct{
	Title string `json:"title"`
	City string `json:"city"`
	IsShixi bool `json:"isShixi"`
	Tags string `json:"tags"`
	Text string `json:"text"`
}

func main() {
    fileCount := Jobs{
		Title:"后端开发实习生",
		City:"北京",
		IsShixi:true,
		Tags:"dev",
		Text:"希望人没事",
	}
    bytes, _ := json.Marshal(fileCount)
    fmt.Println(string(bytes))
}