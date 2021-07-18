import Vue from 'vue';
import Api from './Api';
import { HEK_API_URL, HEK_API_TIMEOUT } from '@/constants';

// Make the HEK API accessible in all Vue components
Vue.prototype.$HEK = new Api(HEK_API_URL, HEK_API_TIMEOUT);
