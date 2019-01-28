import * as Constant from './constants'

export const getUrl = ({ sortBy, filters }) => {
    let url = `${Constant.BASE_REQUES_URL}${sortBy}?api_key=${Constant.API_KEY}&language=en-US`
    url += filters && `&${filters}` 
    return url
}

export const getUrlForExactFilm = (id) => {
    return `${Constant.BASE_REQUES_URL}find/${id}?api_key=${Constant.API_KEY}&language=en-US&external_source=tvdb_id`
}

export const getUrlForPage = ({ url, pageNum }) => {
    return `${url}&page=${pageNum}`
}