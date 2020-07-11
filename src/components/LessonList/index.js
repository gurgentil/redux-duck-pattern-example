import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as CourseActions } from '../../store/ducks/course';

const LessonList = () => {
  const modules = useSelector(state => state.course.modules);
  const dispatch = useDispatch();
  
  function markLessonAsActive(module, lesson) {
    dispatch(CourseActions.setActiveLesson(lesson, module))
  }
  
  return (
    <aside>
      { modules.map(module => (
        <div key={ module.id }>
          <strong>{ module.title }</strong>
          <ul>
            { module.lessons.map(lesson => (
              <li key={ lesson.id }>
                { lesson.title }
                <button onClick={ () => markLessonAsActive(module, lesson) }>
                  Assistir
                </button>
              </li>
            )) }
          </ul>
        </div>
      )) }
    </aside>
  );
};

export default LessonList;
