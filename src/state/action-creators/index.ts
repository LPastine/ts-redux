import axios from 'axios';
import { Dispatch } from 'redux'
import { ActionType } from '../action-types';
import { Action } from '../actions'

const URL = 'https://registry.npmjs.org/-/v1/search'

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
      const { data } = await axios.get(URL, {
        params: {
          text: term
        }
      });

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })
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
