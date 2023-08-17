import Vue from "vue";
import App from "./App";


async function bootstrap() {
	App.mpType = "app";
	
	const app = new Vue({
		...App
	});
	
}
