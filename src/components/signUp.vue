<template>
  <div class="signUp-container">
    <!-- didicast image -->
    <div>
      <img class="signUp-didicast-image" :src="require('@/img/didicast_logo.png')"/>
    </div>

    <!-- login container -->
    <div>
      <h3 class="signUp-title">로그인</h3>

      <!-- login form -->
      <form>
        <div>
          <input class="signUp-input" type="text" placeholder="아이디 입력"/>
        </div>
        <div>
          <input class="signUp-input" type="password" placeholder="패스워드 입력"/>
        </div>
        <button class="signUp-button">
          로그인
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  props: {
  }
}
</script>

<style>
@import "../css/signUp.css";
</style>
