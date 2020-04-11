import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, List, Input } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import classNames from 'classnames';

import TagSelect from '@/components/TagSelect';
import AvatarList from '@/components/AvatarList';
import Ellipsis from '@/components/Ellipsis';
import StandardFormRow from '@/components/StandardFormRow';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './Projects.less';

const { Option } = Select;
const FormItem = Form.Item;

/* eslint react/no-array-index-key: 0 */

@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))
@Form.create({
  onValuesChange({ dispatch }, changedValues, allValues) {
    // 表单项变化时请求数据
    // eslint-disable-next-line
    console.log(changedValues, allValues);
    // 模拟查询表单生效
    // dispatch({
    //   type: 'list/fetch',
    //   payload: {
    //     count: 8,
    //   },
    // });
  },
})
class CoverCardList extends PureComponent {

  check = () => {
   console.log("ssss");
  };

  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch({
    //   type: 'list/fetch',
    //   payload: {
    //     count: 8,
    //   },
    // });
  }

  render() {

    const { match, children, location } = this.props;

    const {
      list: { list = [] },
      loading,
      form,
    } = this.props;
    const { getFieldDecorator } = form;

    const cardList = list ? (
      <List
        rowKey="id"
        loading={loading}
        grid={{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Card
              onClick={this.check}
              className={styles.card}
              hoverable
              cover={<img alt={item.title} src={item.cover} />}
            >
              <Card.Meta
                title={<a>{item.title}</a>}
                description={<Ellipsis lines={2}>{item.subDescription}</Ellipsis>}
              />
              <div className={styles.cardItemContent}>
                <span>{moment(item.updatedAt).fromNow()}</span>
                <span>地点：北京</span>
                <div className={styles.avatarList}>
                  <AvatarList size="mini">
                    {item.members.map((member, i) => (
                      <AvatarList.Item
                        key={`${item.id}-avatar-${i}`}
                        src={member.avatar}
                        tips={member.name}
                      />
                    ))}
                  </AvatarList>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    ) : null;

    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const actionsTextMap = {
      expandText: <FormattedMessage id="component.tagSelect.expand" defaultMessage="Expand" />,
      collapseText: (
        <FormattedMessage id="component.tagSelect.collapse" defaultMessage="Collapse" />
      ),
      selectAllText: <FormattedMessage id="component.tagSelect.all" defaultMessage="All" />,
    };

    return (
      <div className={styles.coverCardList}>

        <Card bordered={false}>
          <Form layout="inline" >
            <div style={{ textAlign: 'center' }}>
              <Input.Search
                placeholder="请输入"
                enterButton="搜索"
                size="large"
                // onSearch={this.handleFormSubmit}
                style={{ maxWidth: 522, width: '100%' }}
              />
            </div>
            <div>
            </div>

            <StandardFormRow title="类型" block style={{ paddingBottom: 4 }}>
              <FormItem>
                {getFieldDecorator('category')(
                  <TagSelect expandable actionsText={actionsTextMap}>
                    <TagSelect.Option value="cat1">线上</TagSelect.Option>
                    <TagSelect.Option value="cat2">线下</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
            </StandardFormRow>

            <StandardFormRow title="兴趣" block style={{ paddingBottom: 11 }}>
              <FormItem>
                {getFieldDecorator('interest')(
                  <TagSelect expandable actionsText={actionsTextMap}>
                    <TagSelect.Option value="cat1">人工智能</TagSelect.Option>
                    <TagSelect.Option value="cat2">数据分析</TagSelect.Option>
                    <TagSelect.Option value="cat3">运维</TagSelect.Option>
                    <TagSelect.Option value="cat4">测试</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
            </StandardFormRow>

            {/* <StandardFormRow title="费用" block style={{ paddingBottom: 11 }}>
              <FormItem>
                {getFieldDecorator('fee')(
                  <TagSelect expandable actionsText={actionsTextMap}>
                    <TagSelect.Option value="cat1">免费</TagSelect.Option>
                    <TagSelect.Option value="cat2">收费</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
            </StandardFormRow> */}

            <StandardFormRow title="城市" block style={{ paddingBottom: 11 }}>
              <FormItem>
                {getFieldDecorator('fee')(
                  <TagSelect expandable actionsText={actionsTextMap}>
                    <TagSelect.Option value="cat1">北京</TagSelect.Option>
                    <TagSelect.Option value="cat2">上海</TagSelect.Option>
                    <TagSelect.Option value="cat2">广州</TagSelect.Option>
                  </TagSelect>
                )}
              </FormItem>
            </StandardFormRow>
            
          </Form>
        </Card>
        <div className={styles.cardList}>{cardList}</div>
      </div>
    );
  }
}

export default CoverCardList;
