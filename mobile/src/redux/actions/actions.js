import request from 'superagent';

/*
 * action creators
 */


export const viewColazione = () => ({

   type:'VIEW_COLAZIONE', 
    payload:{
        use: 'request',
        method: 'get',
        url: 'http://10.0.2.2:8000/food/colazione',
        data: '',
        //sendAsForm: true,
     },
    meta: {
      sequence: 'begin'
      }
})



