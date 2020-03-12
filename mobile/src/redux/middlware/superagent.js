import request from 'superagent';
//import {createUploadForm} from '../redux/middlware/forms';

const mySuperagentMiddleware = ({getState}) => next => action => {
  //will be used only if we use 'request', is we send or retrieve data via CRUD
	 if (action.payload && action.payload.use === 'request') {
    const {
      payload,
      type,
      meta = {},
    } = action;

    const {
      url,
      method,
      data,
      sendAsForm
    } = payload;


 	const requestObject = request(method, url);
 	const state = getState();


 	if (data) {

      requestObject.send(data);
      // console.log('!<<<<<<<<<<<<<<<<<<<<<<<<<<<', requestObject)
    }



  

  requestObject.end((error, response) => {
      if (error) {
       console.log('Error in superagent middleware', error, 'RESPONSE', response);
           	return next({ 
	          ...action, 
	          payload: error, 
	          meta: {
	            ...action.meta, 
	            sequence: 'error' 
	        }})
      }
 

      else {
      	console.log('Success in superagent middleware', )


      	return next({
        ...action,
        payload: response,
        meta: {
          ...meta,
          sequence: 'complete',
        },
      }); 
      }

    });
	          
   
    }

    else {
      next(action);
    }

  }



export default mySuperagentMiddleware;