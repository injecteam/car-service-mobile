<template>
	<Page>
    <ActionBar title="Sign up" />
		<FlexboxLayout flexDirection="column">
			<TextField v-model="email" hint="E-mail:" keyboardType="email" />
			<TextField v-model="password" hint="Password:" />
			<Button text="Sign up" @tap="registration" />
			<Button text="Sign in" @tap="goToSignIn" />
		</FlexboxLayout>
	</Page>
</template>

<script>
import App from '../App';
import axios from 'axios';

export default {
	data: () => ({
		email: 'supervueman2@gmail.com',
		name: 'Rinat',
		surname: 'Davlikamov',
		password: 'Password1',
	}),

	methods: {
		registration() {
			axios.post("http://10.0.2.2:3000/api/users/signup", {
				email: this.email,
				name: this.name,
				surname: this.surname,
				password: this.password
			}).then(result => {
				console.log(result);
			}, error => {
				console.log(error);
			});
		},

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
