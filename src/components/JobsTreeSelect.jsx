import React from 'react';
import { TreeSelect } from '@douyinfe/semi-ui';
class JobsTreeSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        value:[],
      }
    }
    onChange(value) {
      this.setState({ value });
      this.props.sendSelected(value);
    }
    render() {
      const treeData = [
        {
          label: '研发',
          value: 'dev',
          key: '0',
          children: [
            {
              label: '后端',
              value: 'houduan',
              key: '0-0',
            },
            {
              label: '算法',
              value: 'suanfa',
              key: '0-1',
            },
            {
              label: '客户端',
              value: 'kehuduan',
              key: '0-2',
            },
            {
              label: '前端',
              value: 'qianduan',
              key: '0-3',
            },
          ],
        },
        {
          label: '运营',
          value: 'yunying',
          key: '1',
          children: [
            {
              label: '产品运营',
              value: 'chanpin',
              key: '1-0',
            },
            {
              label: '商业运营',
              value: 'shangye',
              key: '1-1',
            },
            {
              label: '用户运营',
              value: 'yonghu',
              key: '1-2',
            },
            {
              label: '内容运营',
              value: 'neirong',
              key: '1-3',
            },
          ],
        },
      ];
      return (
        <TreeSelect
          multiple
          style={{ width: 300 }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={treeData}
          value={this.state.value}
          placeholder="请选择"
          onChange={
            e => this.onChange(e)
          }
        />
      );
    }
  }

  export default JobsTreeSelect; 