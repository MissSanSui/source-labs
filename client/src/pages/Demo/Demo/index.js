import React from 'react';
import { Button } from 'antd';
import styles from './index.less';

const autoCode = async () => {
 console.log('sssssssssss');
};



export default () => {

  return <Button className={styles.container} onClick={() => autoCode()} >AutoCode</Button>;
};
