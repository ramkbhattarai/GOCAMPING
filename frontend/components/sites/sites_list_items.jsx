import React from 'react';

const SiteListItems = ({ site }) =>{
    return(
        <div className="site-list-items-details">
        <li>
            {site.title}
        </li>
            <li>
                {site.body}
            </li>

        </div>
    )
}
export default SiteListItems;