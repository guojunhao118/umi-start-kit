import React, { PureComponent } from 'react';
import styles from './login.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';

const modelPlatformLogin = 'loginToNamespace/platformLogin';

// const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
// };
// const tailLayout = {
//     wrapperCol: { offset: 8, span: 16 },
// };
@connect(({ loginToNamespace }) => ({
    loginToNamespace,
}))
class Login extends PureComponent {
    constructor(props: any) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
    }

    onFinish(values: any) {
        console.log('========', this);
        console.log('Success:', values);
        let { username, password } = values;

        const { dispatch } = this.props;

        dispatch({
            type: modelPlatformLogin,
            payload: { username, password },
        });
    }

    onFinishFailed(errorInfo: any) {
        console.log('Failed:', errorInfo);
    }

    render() {
        return (
            <div className={`${styles.login} u-flex-ac-jc`}>
                <div className={styles.content}>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        >
                            <Input prefix="用户名：" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input.Password prefix="密码：" />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
