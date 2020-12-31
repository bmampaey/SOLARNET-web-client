import Vue from 'vue';
import Api from './Api';
import { SVO_SERVER, SVO_API_URL } from '@/constants';

// Make the SVO API accessible in all Vue components
Vue.prototype.$SVO = new Api(SVO_SERVER, SVO_API_URL);
