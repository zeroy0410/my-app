import React from 'react';
import { Layout, Radio, RadioGroup } from '@douyinfe/semi-ui';
import CardGroup from './components/cardGroup';
import JobsTreeSelect from './components/JobsTreeSelect';


class LayoutExample extends React.Component {
  constructor(){
    super();
    this.state={
      selected:[],
    }
  }
  sendSelected(selected){
    this.setState({selected});
    console.log(selected);
  }
  render(){
    const { Sider, Content } = Layout;
    return (
      <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
        <Layout>
          <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            <p>招聘类型</p>
            <RadioGroup direction="vertical" aria-label="单选组合示例" name="demo-radio-group-vertical">
              <Radio value={1}>应届生</Radio>
              <Radio value={2}>实习生</Radio>
            </RadioGroup>
            <p>职位类别</p>
            <JobsTreeSelect sendSelected={i=>this.sendSelected(i)}></JobsTreeSelect>
          </Sider>
          <Content
            style={{
              padding: '24px',
              backgroundColor: 'var(--semi-color-bg-0)',
            }}
          >
            <div
              style={{
                borderRadius: '10px',
                border: '1px solid var(--semi-color-border)',
                height: '376px',
                padding: '32px',
              }}
            >
              <CardGroup selected={this.state.selected}></CardGroup>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  };
};

export default LayoutExample;
