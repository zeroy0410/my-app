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