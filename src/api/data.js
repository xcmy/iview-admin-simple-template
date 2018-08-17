import axios from '@/libs/api.request'
import moment from 'moment'


/**
 * 获取列表数据
 */
export const getTableData = (resource) => {
  return axios.request({
    // url: 'get_table_data',
    url:`${resource}/list`,
    method: 'get'
  })
}

/**
 * 获取下拉菜单list
 */
export const getSimpleListData = (resource) => {
  return axios.request({
    url:`${resource}/simpleList`,
    method: 'get'
  })
}


/**
 * 资源创建
 */
export const createOne = (resource,data) => {
  return axios.request({
    url:`${resource}/create`,
    data:data,
    method: 'post'
  })
}



/**
 * 资源详情
 */
export const getDetail = (resource,id) => {
  return axios.request({
    url:`${resource}/${id}`,
    method: 'get'
  })
}


/**
 * 资源修改
 */
export const updateOne = (resource,id) => {
  return axios.request({
    url:`${resource}/${id}`,
    method: 'post'
  })
}

