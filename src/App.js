import React from 'react';
import { Layout, Radio, RadioGroup, CheckboxGroup, Checkbox, Typography } from '@douyinfe/semi-ui';
import CardGroup from './components/cardGroup';
import JobsTreeSelect from './components/JobsTreeSelect';
import DarkModeButton from './components/DarkMode';


class LayoutExample extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: [],
      city: [],
      isShixi: true,
    }
  }
  sendSelected(selected) {
    this.setState({ selected: selected });
    console.log(selected);
  }
  sendCity(city) {
    this.setState({ city: city });
  }
  setIsShixi(e) {
    if (e.target.value === 1) this.setState({ isShixi: false });
    else this.setState({ isShixi: true });
  }
  render() {
    const { Sider, Content } = Layout;
    const { Text, Paragraph, Title } = Typography;
    return (
      // <Layout style={{padding: '50px'}}>
      <div style={{ padding: '50px' }}>
        <Layout style={{ padding: '5px', border: '1px solid var(--semi-color-border)', boxShadow: 'var(--semi-shadow-elevated)' }}>
          <Sider style={{ padding: '24px', backgroundColor: 'var(--semi-color-bg-1)' }}>
            <Title heading={4} style={{ margin: '8px 0' }}>招聘类型</Title>
            <RadioGroup direction="vertical" onChange={e => this.setIsShixi(e)} defaultValue={2} aria-label="单选组合示例" name="demo-radio-group-vertical">
              <Radio value={1}>应届生</Radio>
              <Radio value={2}>实习生</Radio>
            </RadioGroup>
            <Title heading={4} style={{ margin: '8px 0' }}>职位类别</Title>
            <JobsTreeSelect sendSelected={i => this.sendSelected(i)}></JobsTreeSelect>
            <Title heading={4} style={{ margin: '8px 0' }}>城市</Title>
            <CheckboxGroup style={{ width: '100%' }} defaultValue={[]} aria-label="CheckboxGroup 示例" onChange={e => this.sendCity(e)}>
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
                height: '500px',
                // display: '-webkit-flex',
                padding: '32px',
              }}
            >
              <CardGroup selected={this.state.selected} city={this.state.city} isShixi={this.state.isShixi}></CardGroup>
            </div>
          </Content>
        </Layout>
      </div>
      // </Layout>
    )
  };
};

export default LayoutExample;
