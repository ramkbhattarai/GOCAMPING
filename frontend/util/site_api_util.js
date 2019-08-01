export const fetchSites = ()=>{
    return(
        $.ajax(
            {
                method: 'get',
                url: 'api/sites'
            }
        )
    )
} 

export const fetchSite = (id) => {
    return (
        {
            method: 'get',
            url:`api/sites/${id}`

        }
    )
}

export const createSite = (site) => {
    return (
        {
            method: 'get',
            url: 'api/sites',
            data: {site}

        }
    )
}