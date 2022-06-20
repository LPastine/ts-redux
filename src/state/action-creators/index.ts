import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions'

const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
      
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: error.message
        })
      }
    }
  };
}; 
