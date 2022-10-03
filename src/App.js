import React from 'react';
import { Layout, Radio, RadioGroup,CheckboxGroup, Checkbox } from '@douyinfe/semi-ui';
import CardGroup from './components/cardGroup';
import JobsTreeSelect from './components/JobsTreeSelect';


class LayoutExample extends React.Component {
  constructor(){
    super();
    this.state={
      selected:[],
      city:[],
      isShixi:true,
    }
  }
  sendSelected(selected){
    this.setState({selected:selected});
    console.log(selected);
  }
  sendCity(city){
    this.setState({city:city});
  }
  setIsShixi(e){
    if(e.target.value===1)this.setState({isShixi:false});
    else this.setState({isShixi:true});
  }
  render(){
    const { Sider, Content } = Layout;
    return (
      <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
        <Layout>
          <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            <p>招聘类型</p>
            <RadioGroup direction="vertical" onChange={e=>this.setIsShixi(e)} defaultValue={2} aria-label="单选组合示例" name="demo-radio-group-vertical">
              <Radio value={1}>应届生</Radio>
              <Radio value={2}>实习生</Radio>
            </RadioGroup>
            <p>职位类别</p>
            <JobsTreeSelect sendSelected={i=>this.sendSelected(i)}></JobsTreeSelect>
            <p>城市</p>
            <CheckboxGroup style={{ width: '100%' }} defaultValue={[]} aria-label="CheckboxGroup 示例" onChange={e=>this.sendCity(e)}>
              <Checkbox value="hangzhou">杭州</Checkbox>
              <Checkbox value="beijing">北京</Checkbox>
              <Checkbox value="shanghai">上海</Checkbox>
              <Checkbox value="guangzhou">广州</Checkbox>
              <Checkbox value="shenzhen">深圳</Checkbox>
          </CheckboxGroup>
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
              <CardGroup selected={this.state.selected} city={this.state.city} isShixi={this.state.isShixi}></CardGroup>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  };
};

export default LayoutExample;
