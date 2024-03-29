import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Posts} from './post';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore=()=>{
    const store=createStore(
       combineReducers({
           posts: Posts,           
           ...createForms({
               feedback:InitialFeedback
           })
       }),
       applyMiddleware(thunk,logger)
    );

    
    return store;
}