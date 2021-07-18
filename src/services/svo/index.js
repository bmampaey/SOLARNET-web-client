import Vue from 'vue';
import Api from './Api';
import { SVO_API_URL, SVO_API_SCHEMA_URL, SVO_API_TIMEOUT } from '@/constants';

// Make the SVO API accessible in all Vue components
Vue.prototype.$SVO = new Api(SVO_API_URL, SVO_API_TIMEOUT, SVO_API_SCHEMA_URL);
