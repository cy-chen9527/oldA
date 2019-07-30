<template>
  <div class="enroll-panel">
    <div class="left-box">
      <img src="@/assets/images/enroll-img.png">
    </div>
    <div class="right-box">
      <h3 class="tit">欢迎注册</h3>
      <a-form
        layout="inline"
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
          'userName',
          {rules: [{ required: true, message: 'Please input your username!' }]}
        ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color:rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input
            v-decorator="[
          'password',
          {rules: [{ required: true, message: 'Please input your Password!' }]}
        ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color:rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="hasErrors(form.getFieldsError())"
          >
            注册
          </a-button>
        </a-form-item>
      </a-form>
      <router-link to="/user/login">返回登录</router-link>
    </div>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: 'Login',
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this),
    }
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
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
  > div {
    width: 50%;
  }
  .left-box {
    img {
      display: block;
      width: 66%;
      margin: 50px auto;
    }
  }
  .right-box {
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
  }
}
</style>
