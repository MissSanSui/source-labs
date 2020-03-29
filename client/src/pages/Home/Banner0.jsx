import React from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from './utils';

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          <div className="banner0-box">
            <div key="title" {...dataSource.title}>
              {typeof dataSource.title.children === 'string' &&
              dataSource.title.children.match(isImg) ? (
                <img src={dataSource.title.children} width="100%" alt="img" />
              ) : (
                dataSource.title.children
              )}
            </div>
            <div key="content" {...dataSource.content}>
            {dataSource.content.children}
            </div>
          </div>
          
          <div key="subject" {...dataSource.subject}>
            {dataSource.subject.children1}
            <a className="banner0-subjectFront"> | </a>
            {dataSource.subject.children2} 
            <a className="banner0-subjectFront"> | </a>
            {dataSource.subject.children3}
          </div>
          <Button ghost key="button" {...dataSource.button}>
            {dataSource.button.children}
          </Button>
        </QueueAnim>
      
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <div key="down" {...dataSource.down}>
            {dataSource.down.children}
            {/* <a className="banner0-downFront"/> */}
          </div>

          <Icon type="down" />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
