import type * as T from './type'
import http from '@/utils/http'

/** 获取地区列表 */
export const getAreaList = (params: { type: 'province' | 'city' | 'area', code?: string }) => {
  return http.get<T.AreaItem>('/area/list', params)
}
