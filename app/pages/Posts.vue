<template>
  <Page>
    <ActionBar title="Posts"/>
    <ScrollView>
      <StackLayout>
        <CardView
          v-for="item in 10"
          :key="item"
          class="whiteCard"
          margin="10"
          elevation="40"
          radius="1"
          :ripple="true"
        >
          <GridLayout rows="200, auto, auto" columns="auto, auto, *">
            <Image
              src="https://cdn.bmwclub.ru/data/photos/l/3/3815-1266256589-1b24cd58a23bcaf45a8fa31c1fb0b54b.gif"
              stretch="aspectFill"
              colSpan="3"
              row="0"
            />
            <Label
              text="Morbo wants to be friends?"
              class="info"
              textWrap="true"
              row="1"
              colSpan="5"
              margin="15" 
            />
            <Button text="DECLINE" row="2" col="0" />
            <Button text="ACCEPT" row="2" col="1" />
          </GridLayout>
        </CardView>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import App from '../App';

export default {
	props: {
		msg: {
			type: String,
      default: '',
		}
  },

  methods: {
    onButtonTap() {
      this.$navigateTo(App, {
        transition: {},
        transitioniOS: {},
        transitionAndroid: {},

        props: {
          msg: 'Auth page',
        }
      });
    },
    onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
  }
}
</script>

<style scoped>
</style>
