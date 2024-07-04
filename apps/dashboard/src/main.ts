import { createApp } from 'vue'

import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'
import { createLogto, UserScope } from '@logto/vue';
import {appId, endpoint,resource} from './utils/constants'


// Styles
import '@core/scss/template/index.scss'
import '@styles/styles.scss'

// Create vue app
const app = createApp(App)

// Add Logto plugin
app.use(createLogto, {
	appId,
	endpoint,
	resources: [resource],
	scopes: [
	  UserScope.Email,
	  UserScope.Phone,
	  UserScope.CustomData,
	  UserScope.Identities,
	  UserScope.Organizations,
	],
  });

// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
