import { SearchParams } from "@/app/types"

const optionalSearchParams: SearchParams[] = ['after', 'before', 'limit']

export const buildSearchParamsString = (searchParams: URLSearchParams) => {
   return optionalSearchParams.reduce((searchParamsString, param) => {
        const value = searchParams.get(param)
        if (!value) return searchParamsString
        const prefix = searchParamsString ? `${searchParamsString}&` : '?'
        return `${prefix}${param}=${value}`
    }, '')
}