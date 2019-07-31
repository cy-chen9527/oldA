<template>
  <div class="login-panel">
    <div class="left-box">
      <img src="@/assets/images/login-img.png">
    </div>
    <div class="right-box">
      <h3 class="tit">欢迎登录</h3>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <label class="label">账户</label>
          <a-input
            v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
            placeholder="请输入用户名/邮箱"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <label class="label">密码</label>
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
            type="password"
            placeholder="请输入密码"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <div class="link-item">
          <router-link
            to=""
            class="forget-pass"
          >忘记密码？</router-link>
          <router-link to="/user/enroll">注册账号</router-link>
        </div>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
          >
            登录
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
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  mounted() {
  },
  methods: {
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
.login-panel {
  display: flex;
  flex-wrap: wrap;
  .left-box {
    width: 55%;
    img {
      display: block;
      width: 66%;
      margin: 40px auto;
    }
  }
  .right-box {
    width: 45%;
    padding: 40px;
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
      .ant-form-item {
        width: 100%;
        margin-bottom: 12px;
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
