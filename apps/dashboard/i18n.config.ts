const numberFormats = {
	'en': {
	  currency: {
		style: 'currency', currency: 'USD'
	  },
	  decimal: {
		style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
	  },
	  percent: {
		style: 'percent', useGrouping: false
	  }
	},

  }

export default defineI18nConfig(() => ({
	legacy: false,
	numberFormats,
	locale: 'en',
	messages: {
	  en: {
		welcome: 'Welcome'
	  },
	  fr: {
		welcome: 'Bienvenue'
	  }
	}
  }))
  