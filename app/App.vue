<template>
  <Page>
    <ActionBar title="Sign in" />
    <FlexboxLayout flexDirection="column">
      <TextField hint="E-mail:" keyboardType="email" />
      <TextField hint="Password:" secure/>
      <Button text="Login" @tap="login" />
      <Button text="Sign up" @tap="goToSignUp" />
    </FlexboxLayout>
  </Page>
</template>

<script>
import Registration from './pages/Registration';
import Posts from './pages/Posts';

export default {
  data: () => ({
    email: '',
    password: ''
  }),

  methods: {
    login() {
      this.$navigateTo(Posts, {
        transition: {},
        transitioniOS: {},
        transitionAndroid: {},
      });
    },

    goToSignUp() {
      this.$navigateTo(Registration, {
        transition: {},
        transitioniOS: {},
        transitionAndroid: {},
      });
    } 
  },
}
</script>
