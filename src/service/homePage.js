import {apiPathList} from '@/request/index.js'

import axios from 'axios' 
import {$utils} from '../utils/index.js'
import jsSHA from 'jssha'



// console.log(jssha)
// jsSHA = require('jssha');
export const homeService = {
    getProductList(){
        return axios.get(apiPathList.getCategoryTree)
    },
    getClassifyContent(id){
        return axios.get(`${apiPathList.getCategoryDetail}?id=${id}`)
    },
    getAdPosition(){
        return axios.get(apiPathList.getAdPosition)
    },
    getWorkConfigForm(){
        return axios.get(apiPathList.getWorkFormConfig)
    },
    submitRequire(form){
        return axios.post(apiPathList.submitRequire,{
            ...form
        })
    }
    

}
  