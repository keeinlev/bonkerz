import { combineReducers } from 'redux';
import posts from './posts';

export default combineReducers({ posts });         // this reducer takes on state (posts[]) and action