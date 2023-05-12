import { createStore } from "vuex";

import auth from './modules/auth'
import todos from './modules/todos'

const storeData = {
    modules: {
		auth,
		todos
	},
};

const store = createStore(storeData);

export default store;
