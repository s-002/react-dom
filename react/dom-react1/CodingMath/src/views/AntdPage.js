import React from 'react';
import { connect } from 'dva';
import {Layout,Menu,Breadcrumb,Icon} from 'antd'

const {Header,Content,Sider}=Layout;

class IndexPage extends React.Component{
  render() {
    return (
        <Layout>
          <Header className="header">
           头部
          </Header>
            {/* 再左右布局 */}
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              侧边栏
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
              Content
              </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

//props默认类型
IndexPage.propTypes = {

};
//props默认值
IndexPage.defaultProps={

}


export default connect()(IndexPage);
