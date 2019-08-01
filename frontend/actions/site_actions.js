import * as SiteApiUtil from '../util/site_api_util';
export const RECEIVE_ALL_SITES = "RECEIVE_ALL_SITES";
export const RECEIVE_SITE = "RECEIVE_SITE";
export const RECEIVE_SITES_ERRORS = "RECEIVE_SITES_ERRORS";

export const receiveSites = sites => {
    return(
        {
            type: RECEIVE_ALL_SITES,
            sites
        }
    )
}

export const receiveSite = (site) => {
    return (
        {
            type: RECEIVE_SITE,
            site
        }
    )
}

export const receiveErrors = errors => {
    return (
        {
            type: RECEIVE_SITES_ERRORS,
            errors
        }
    )
}

export const  fetchSites = () => {
    return dispatch => {
        return SiteApiUtil.fetchSites()
        .then(sites => {
            return dispatch(receiveSites(sites))
        },errors => {
            return dispatch(receiveErrors(errors))
        } 
        )
    }
}

export const fetchSite = (id) => {
    return dispatch => {
        return SiteApiUtil.fetchSite(id)
            .then(site => {
                return dispatch(receiveSite(site))
            }, errors => {
                return dispatch(receiveErrors(errors))
            }
            )
    }
}

export const createSite = (site) => {
    return dispatch => {
        return SiteApiUtil.createSite(site)
            .then(site => {
                return dispatch(receiveSite(site))
            }, errors => {
                return dispatch(receiveErrors(errors))
            }
            )
    }
}

