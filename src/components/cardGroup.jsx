import React, { useState } from 'react';
import { Card, CardGroup, Typography, Slider } from '@douyinfe/semi-ui';

class cardGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                {
                    title: "后端开发实习生",
                    city: "北京",
                    isShixi: true,
                    tags:["dev","houduan"],
                    label: "1、参与电商基础数据建设，参与电商动态定价系统设计和搭建；\
                2、参与电商分布式数据接入调度系统搭建及优化，打造高性能、高可用的数据接入中台；",
                },
                {
                    title: "后端开发工程师-互娱研发",
                    city: "深圳",
                    isShixi: false,
                    tags:["dev","houduan"],
                    label: "1、参与系统架构设计、优化，提升系统性能和开发效率，保证高并发高可靠；\
                2、通过不断的技术研究和创新，推动业务的快速发展和高效迭代；",
                }]
        }
    }
    checkIsSelected(item){
        // console.log(this.props.selected.indexOf(item.tags));
        // console.log(this.props.selected);
        if(this.props.selected.length===0)return true;
        for (let index = 0; index < item.tags.length; index++) {
            const element = item.tags[index];
            if(this.props.selected.indexOf(element)!=-1){
                return true;
            }
        }
        return false;
    }
    render() {
        const { Text } = Typography;
        const spacing = 12;
        const { dataList } = this.state;
        return (
            <>
                <CardGroup spacing={spacing}>
                    {
                        dataList.map((item, idx) => this.checkIsSelected(item)?(
                            <Card
                                key={idx}
                                shadows='hover'
                                title={item.title}
                                headerLine={false}
                                style={{ width: 260 }}
                                headerExtraContent={
                                    <Text link>
                                        More
                                    </Text>
                                }
                            >
                                <Text>{item.label}</Text>
                            </Card>
                        ):null)
                    }
                </CardGroup>
            </>
        );
    }
}

export default cardGroup;

