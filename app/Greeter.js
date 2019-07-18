/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-07-17 19:36:24
 * @LastEditTime: 2019-07-18 11:54:47
 * @LastEditors: 靳肖健
 */
//Greeter,js
import React, { Component } from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入

class Greeter extends Component {
  render () {
    return (
      <div className={styles.root}>
        <h1>webpack</h1>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter