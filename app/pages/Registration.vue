<template>
	<Page>
    <ActionBar title="Sign up" />
		<FlexboxLayout flexDirection="column">
			<TextField hint="E-mail:" keyboardType="email" />
			<TextField hint="Password:" />
			<Button text="Sign up" @tap="registration" />
			<Button text="Sign in" @tap="goToSignIn" />
		</FlexboxLayout>
	</Page>
</template>

<script>
import App from '../App';

export default {
	methods: {
		registrtion() {},

		goToSignIn() {
			this.$navigateTo(App, {
				transition: {},
				transitioniOS: {},
				transitionAndroid: {},
				props: {
					msg: 'Auth page',
				}
			});
		},
	},
}
</script>
