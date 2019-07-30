<template>
  <div class="user-page">
    <div class="container">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.user-page {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  .container {
    width: 900px;
    height: 432px;
    background: rgba(255, 255, 255, 1);
    border-radius: 15px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
