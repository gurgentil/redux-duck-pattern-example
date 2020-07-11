import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { id: 1, title: 'Primeira aula' },
        { id: 2, title: 'Segunda aula' },
      ],
    },
    {
      id: 2,
      title: 'Aprendendo Redux',
      lessons: [
        { id: 3, title: 'Terceira aula' },
        { id: 4, title: 'Quarta aula' },
      ],
    }
  ],
};

/**
 * Define action types and creators.
 */
export const { Types, Creators } = createActions({
  setActiveLesson: [
    'lesson',
    'module',
  ],
});

/**
 * Create reducer handlers.
 */
const setActiveLesson = (state = INITIAL_STATE, action) => ({
  ...state,
  activeLesson: action.lesson,
  activeModule: action.module,
});

/**
 * Create reducer.
 */
export default createReducer(INITIAL_STATE, {
  [Types.SET_ACTIVE_LESSON]: setActiveLesson,
});
