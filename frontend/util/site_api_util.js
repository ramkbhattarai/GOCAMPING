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
       $.ajax(

           {
               method: 'get',
               url:`api/sites/${id}`
   
           }
           )
           
    )
}

export const createSite = (formData) => {
    return (
       $.ajax(

           {
               method: 'post',
               url: 'api/sites',
               data: formData,
               contentType: false,
               processData: false
   
           }
       ) 
    )
}

export const deleteSite =(id) => {
    return(
        $.ajax(
            {
                method: 'delete',
                url: `api/sites/${id}`
            }
        )
    )
}

export const fetchSearchSites = searchParams => {
    return(
        $.ajax(
            {
                method: 'get',
                url: 'api/sites',
                data: {searchParams}
            }
        )
    )
}