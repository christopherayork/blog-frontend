// export all actions through here

export {
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  getPost,
  getPosts,
  getUser,
  getUsers } from './get';

export { POST_POST_START, POST_POST_SUCCESS, POST_POST_FAILURE, postPost } from './post';
export { PUT_POST_START, PUT_POST_SUCCESS, PUT_POST_FAILURE, putPost } from './put';
export { DELETE_POST_START, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, deletePost } from './delete';