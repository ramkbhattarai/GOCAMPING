const applyFilters = (filters, sites) => {


    let filteredSites = sites.filter(site => {

        if (filters['campfire'] && !site.campfire) return;
        if (filters['pet_allow'] && !site.pet_allow) return;
        if (filters['tent'] && !site.tent) return;
        if (filters['parking'] && !site.parking) return;
        if (filters['toilet'] && !site.toilet) return;
        if (filters['shower_room'] && !site.shower_room) return;
        if (filters['hiking'] && !site.hiking) return;
        if (filters['biking'] && !site.biking) return;
        if (filters['rafting'] && !site.rafting) return;
        if (filters.pricing < site.price) return;
        if (filters.group_size > site.group_size) return;

        return sites;
    });

    return filteredSites;
}
export default applyFilters;