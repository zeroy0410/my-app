import axios from 'axios';
import React from 'react';
import { Card, CardGroup, Typography, Slider } from '@douyinfe/semi-ui';

class cardGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
        }
        this.fetchData();
    }
    fetchData(){
        var url='http://localhost:8080/getdata';
        axios.get(url,{
            headers:{
                "Access-Control-Allow-Origin":"http://localhost:8080/getdata",
                // "Access-Control-Allow-Methods":"POST, GET, OPTIONS, PUT, DELETE, UPDATE",
                "Access-Control-Allow-Headers":"Access-Control-Allow-Headers, Access-Control-Allow-Origin, Origin, X-Requested-With, X-Extra-Header, Content-Type, Accept, Authorization",
                // "Access-Control-Expose-Headers":"Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Cache-Control, Content-Language, Content-Type",
                // // "Access-Control-Allow-Credentials":"true",
                // "content-type":"application/json" // 可选
            }
        }).then(
            res => {
                const data=JSON.parse(res.data);
                console.log(data);
                this.setState({dataList:data});
            });
        
    }
    checkIsSelected(item){
        // console.log(this.props.selected.indexOf(item.tags));
        // console.log(this.props.city);
        // console.log(item["isShixi"],this.props.isShixi);
        // console.log("haha");
        if(item["isShixi"]!=this.props.isShixi)return false;
        let isCity=false;
        let isTags=false;
        if(this.props.selected.length===0)isTags=true;
        if(this.props.city.length===0)isCity=true;
        if(this.props.city.indexOf(item["city"])!=-1){
            isCity=true;
        }
        for (let index = 0; index < item["tags"].length; index++) {
            const element = item["tags"][index];
            if(this.props.selected.indexOf(element)!=-1){
                isTags=true;
                break;
            }
        }
        // console.log(isCity);
        return isCity&&isTags;
    }
    isClick(href){
        // console.log(href);
        window.open(href);
    }
    render() {
        const { Text,Paragraph} = Typography;
        const spacing = 12;
        const { dataList } = this.state;
        return (
            <>
                <CardGroup spacing={spacing}>
                    {
                        dataList.map((item, idx) => this.checkIsSelected(item)?(
                            <Card
                                key={idx}
                                loading={false}
                                shadows='hover'
                                title={item["title"]}
                                headerLine={false}
                                style={{ width: 260 }}
                                headerExtraContent={
                                    <Text link>
                                        More
                                    </Text>
                                }
                                onClick={()=>this.isClick(item["href"])}
                            >
                                <Paragraph>{item["text"]}</Paragraph>
                            </Card>
                        ):null)
                    }
                </CardGroup>
            </>
        );
    }
}

export default cardGroup;

