<template>
  <div class="enroll-panel">
    <div class="left-box">
      <img src="@/assets/images/enroll-img.png">
    </div>
    <div class="right-box">
      <h3 class="tit">欢迎注册</h3>
      <a-form
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item class="email-item">
          <a-input
            v-decorator="[
          'email',
          {
            rules: [{
              type: 'email', message: '请输入正确的邮箱!',
            }, {
              required: true, message: '请输入邮箱!',
            }]
          }
        ]"
            placeholder="请输入邮箱"
          >
            <i
              slot="prefix"
              class="iconfont icon-tubiao209"
            ></i>
          </a-input>
          <a-button
            class="addonAfter"
            :type="emailType"
          >{{sendCode}}</a-button>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
          'username',
          {
            rules: [{
              required: true, message: '请输入用户名!',
            }],
          }
        ]"
            type="text"
            placeholder="请输入用户名"
          > <i
              slot="prefix"
              class="iconfont icon-zhanghu"
            ></i></a-input>
        </a-form-item>

        <a-form-item>
          <a-input
            v-decorator="[
          'password',
          {
            rules: [{
              required: true, message: '请输入密码!',
            }, {
              validator: validateToNextPassword,
            }],
          }
        ]"
            type="password"
            placeholder="请输入密码"
          > <i
              slot="prefix"
              class="iconfont icon-mima01-copy"
            ></i></a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
          'confirm',
          {
            rules: [{
              required: true, message: '请确认密码!',
            }, {
              validator: compareToFirstPassword,
            }],
          }
        ]"
            type="password"
            placeholder="请确认密码"
            @blur="handleConfirmBlur"
          ><i
              slot="prefix"
              class="iconfont icon-mima01-copy"
            ></i></a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
          'secCode',
          {
            rules: [{
              required: true, message: '请输入验证码!',
            }],
          }
        ]"
            type="text"
            placeholder="请输入验证码"
          > <i
              slot="prefix"
              class="iconfont icon-yanzhengma"
            ></i></a-input>
        </a-form-item>
        <div class="link-item">
          <router-link to="/user/login">已有账户，返回登录</router-link>
        </div>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
          >
            注册
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      emailType: 'primary',
      sendCode: '发送验证码'
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  mounted() {
  },
  methods: {
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('两次输入的密码不一样!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },

}
</script>

<style lang="less" scoped>
.enroll-panel {
  display: flex;
  flex-wrap: wrap;
  .left-box {
    width: 55%;
    img {
      display: block;
      width: 72%;
      margin: 45px auto;
    }
  }
  .right-box {
    width: 45%;
    padding: 40px 20px;
    .tit {
      font-size: 24px;
      position: relative;
      padding-left: 20px;
      &:after {
        display: block;
        content: "";
        height: 22px;
        border-left: 4px solid #2f90fd;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .link-item {
      width: 90%;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      .forget-pass {
        color: #999;
      }
    }
    /deep/.ant-form {
      padding: 12px 0;
      .label {
        font-size: 18px;
      }
      .ant-form-explain {
        position: absolute;
      }
      .email-item {
        input {
          width: 65%;
        }
      }
      .ant-form-item {
        width: 100%;
        margin-bottom: 12px;
        position: relative;
        .addonAfter {
          position: absolute;
          right: 0;
          top: -7px;
        }
        .ant-form-item-control-wrapper {
          width: 90%;
        }
        .ant-input-affix-wrapper {
          width: 100%;
        }
      }
      .login-form-button {
        margin-top: 24px;
        width: 100%;
      }
    }
  }
}
</style>
