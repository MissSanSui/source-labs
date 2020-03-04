import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { Component } from "react";
import request from '@/utils/request';

import { Spin, Row, Col } from 'antd';
import styles from './index.less';

import ReactCodeMirror from 'react-cmirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/theme/ambiance.css';


const options = {
  lineNumbers: true,
  mode: {
    name: 'text/x-mysql',
  },
  extraKeys: {
    Ctrl: 'autocomplete',
  },
  theme: 'ambiance',
};

class Demo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: `正常流程测试
      调用A请求
        检查A.a字段
        检查B.b字段
      调用B请求
        检查B.a和A.b是否相等`,
      code: null
    };
  }

  autoCode = (instance) => {
    this.setState({
      code: instance.getValue(),
    });
    
    return request('/ceshi/wode/hello', {
      method: 'POST',
      params: {
        code: instance.getValue()
      },
    });


  }


  render() {
    
    const { text, code } = this.state;
    
    return (
      <>
        <Row>
          <Col
            span={12}
            style={{
              minHeight: 400,
              padding: 16,
              borderRight: '1px solid #DDD',
            }}
          >
            <ReactCodeMirror ref={this.getInstance} options={options} value={text} onChange={this.autoCode}/>
          </Col>
  
          <Col
            span={12}
            style={{
              minHeight: 400,
              padding: 16,
            }}
          >
            <ReactCodeMirror options={options} value={code} />
          </Col>
        </Row>
      </>
    );
  }
}

export default Demo;