import { UpdateCourseConfiguration } from 'src/commons/application/types/SessionTypes';
import { action } from 'typesafe-actions';

import { CREATE_COURSE, SAVE_CANVAS } from './AcademyTypes';

export const saveCanvas = (canvas: HTMLCanvasElement) => action(SAVE_CANVAS, canvas);

export const createCourse = (courseConfig: UpdateCourseConfiguration) =>
  action(CREATE_COURSE, courseConfig);
