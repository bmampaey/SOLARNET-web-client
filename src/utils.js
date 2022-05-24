import Vue from 'vue';

/* Convert a date string in the format YYYY-MM-DD[{T| }hh:mm:ss[Z]] to a Date object */
export function parseDate(date) {
	// If the date is in the accepted format, force it to the format YYYY-MM-DDThh:mm:ssZ
	// else reject it
	if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
		date = new Date(`${date}T00:00:00Z`);
	} else if (/^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}:\d{2}$/.test(date)) {
		date = new Date(`${date.substring(0, 10)}T${date.substring(11, 19)}Z`);
	} else {
		return null;
	}
	// Check if the date is valid, if it isn't getTime will return NaN (for example reject the 30th of February)
	if (isNaN(date.getTime())) {
		return null;
	}
	return date;
}

/* Convert a Date object or anything that can be converted to a Date object to a string in the format YYYY-MM-DD hh:mm:ss */
export function formatDate(date) {
	if (date) {
		// Force conversion of date to a Date object (it could be a string)
		// if the date is a not a valid date, getTime will return NaN
		// else convert it to the required format
		let value = new Date(date);
		if (!isNaN(value.getTime())) {
			date = value.toISOString();
			date = `${date.substring(0, 10)} ${date.substring(11, 19)}`;
		}
	}
	return date;
}

/* Return a unique id for HTML element, use a local scope to emulate a function static variable  */
{
	let idCounter = 0;
	var getUniqueId = function(prefix = '__SVO_ID__') {
		return prefix + idCounter++;
	};
}

// Make utilities function accessible in all Vue components
Vue.prototype.$utils = {
	parseDate,
	formatDate,
	getUniqueId
};
