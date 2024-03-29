// Globally register all base components for convenience, because they
// will be used very frequently.

import Vue from 'vue';

import DatetimeInput from './DatetimeInput';
Vue.component('datetime-input', DatetimeInput);

import DatetimeRange from './DatetimeRange';
Vue.component('datetime-range', DatetimeRange);

import NumberRange from './NumberRange';
Vue.component('number-range', NumberRange);
