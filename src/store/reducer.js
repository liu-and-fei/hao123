//导入分散出去的仓库
import hearder from '../views/home/minComponents/heard/store/index.js'
import iconListReducer from '../views/home/minComponents/iconList/store/reducer'
import liufeiStore from './liufei/reducer';

export const heard=hearder; 
export const iconList = iconListReducer;
export const liufei = liufeiStore;