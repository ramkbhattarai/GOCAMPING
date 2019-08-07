import * as SiteApiUtil from '../util/site_api_util';
export const RECEIVE_ALL_SITES = "RECEIVE_ALL_SITES";
export const RECEIVE_SITE = "RECEIVE_SITE";
export const CREATE_SITE = "CREATE_SITE";
export const DESTROY_SITE = "DESTROY_SITE";
export const RECEIVE_SITE_ERRORS = "RECEIVE_SITE_ERRORS";

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
            type: RECEIVE_SITE_ERRORS,
            errors
        }
    )
}

export const destroySite = site => {
    return (
        {
            type: DESTROY_SITE,
            siteId: site.id
        }
    )
}
export const createSite = site => {
    return (
        {
            type: CREATE_SITE,
            site
        }
    )
}

export const  fetchSites = (bounds) => {
    return dispatch => {
        return SiteApiUtil.fetchSearchSites(bounds)
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
            .then(payload => {
                return dispatch(receiveSite(payload))
            }, errors => {
                return dispatch(receiveErrors(errors))
            }
            )
    }
}

export const hostSite = (site) => {
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

export const deleteSite = id =>{
    return dispatch =>{
        return SiteApiUtil.deleteSite(id)
        .then(
            site => {
                return dispatch(destroySite(site.id))
            }
        )
    }
}

