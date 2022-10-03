package mongo

import (
	"context"
	// "strings"

	// "encoding/json"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Jobs struct {
	Title   string   `json:"title" bson:"title"`
	City    string   `json:"city" bson:"city"`
	IsShixi bool     `json:"isShixi" bson:"isShixi"`
	Tags    []string `json:"tags" bson:"tags"`
	Text    string   `json:"text" bson:"text"`
	href    string   `json:"href" bson:"href"`
}

var client *mongo.Client

func initDB() (err error) {
	// 设置客户端连接配置
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	// 连接到MongoDB
	client, err = mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		return err
	}
	// 检查连接
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		return err
	}
	return nil
}

func insertOne(s interface{}) (err error) {
	collection := client.Database("Jobs").Collection("Jobs")
	insertResult, err := collection.InsertOne(context.TODO(), s)
	if err != nil {
		return err
	}
	fmt.Println("Inserted a single document: ", insertResult.InsertedID)
	return nil
}

func insertMore(s []interface{}) (err error) {
	//students := []interface{}{s2, s3}
	collection := client.Database("datebase").Collection("collection")
	insertManyResult, err := collection.InsertMany(context.TODO(), s)
	if err != nil {
		return err
	}
	fmt.Println("Inserted multiple documents: ", insertManyResult.InsertedIDs)
	return nil
}

func find() (jsonDatas []Jobs, err error) {
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	collection := client.Database("Jobs").Collection("Jobs")
	cur, err := collection.Find(ctx, bson.M{})
	if err != nil {
		return []Jobs{}, err
	}
	defer cur.Close(ctx)
	for cur.Next(ctx) {
		var result bson.M
		err := cur.Decode(&result)
		if err != nil {
			return []Jobs{}, err
		}
		bsonBytes, _ := bson.Marshal(result)
		var data Jobs
		bson.Unmarshal(bsonBytes, &data)
		jsonDatas = append(jsonDatas, data)
	}
	if err := cur.Err(); err != nil {
		return []Jobs{}, err
	}
	return jsonDatas, nil
}

func update() (err error) {
	ctx := context.TODO()
	defer client.Disconnect(ctx)
	c := client.Database("datebase").Collection("collection")

	update := bson.D{{"$set", bson.D{{"attr1", "value1"}, {"attr2", "value2"}}}}

	ur, err := c.UpdateMany(ctx, bson.D{{"old_attr1", "old_value1"}}, update)
	if err != nil {
		return err
	}
	fmt.Printf("ur.ModifiedCount: %v\n", ur.ModifiedCount)
	return nil
}

func del() (err error) {
	c := client.Database("datebase").Collection("collection")
	ctx := context.TODO()

	dr, err := c.DeleteMany(ctx, bson.D{{"attr1", "value1"}})

	if err != nil {
		return err
	}
	fmt.Printf("ur.ModifiedCount: %v\n", dr.DeletedCount)
	return nil
}

func testInsertOne() {
	s := struct {
		Title   string   `json:"title"`
		City    string   `json:"city"`
		IsShixi bool     `json:"isShixi"`
		Tags    []string `json:"tags"`
		Text    string   `json:"text"`
	}{
		"haha",
		"wenzhou",
		true,
		[]string{"dev", "qianduan"},
		"test",
	}
	err := insertOne(s)
	if err != nil {
		fmt.Printf("添加文档失败！,err:%v\n", err)
	}
}

func JobsData() (jsonDatas []Jobs) {
	err := initDB() // 调用输出化数据库的函数
	if err != nil {
		fmt.Printf("初始化失败！,err:%v\n", err)
		return
	} else {
		fmt.Println("Connected to MongoDB!")
	}
	jsonDatas, _ = find()
	return jsonDatas
}
