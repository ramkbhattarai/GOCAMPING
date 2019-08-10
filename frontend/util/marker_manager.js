class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.geocoder = new google.maps.Geocoder();
    }

    clearMarkers() {
        Object.keys(this.markers)
            .forEach((siteId) => this.removeMarker(this.markers[siteId]))
    }

    removeMarker(marker) {
        this.markers[marker.siteId].setMap(null);
        delete this.markers[marker.siteId];
    }

    updateMarkers(sites) {
        const sitesList = {};
        sites.forEach(site => sitesList[site.id] = site);
        sites.filter(site => !this.markers[site.id]).forEach(filteredSite => this.createMarker(filteredSite, this.handleClick))
        Object.keys(this.markers).filter(siteId => !sitesList[siteId]).forEach((siteId) => this.removeMarker(this.markers[siteId]))
    }

    createMarker(site) {
        // const lat = parseFloat(site.lat);
        // const log = parseFloat(site.log);
        // const myLatLng = { lat, log };
        const markerInfoWindow = new google.maps.InfoWindow({
            content:
                `<div class="infowindow">
              <img id="infoWindowImage" src=${site.image_url} alt="">
              <a href="/#/sites/${site.id}" style="display: flex;">
                <div id="infoWindowDetails">
                  <h2 class="infowindow-title">${site.title}</h2>
                  <p class="infowindow-price">$${site.cost}/night</p>
                </div>
              </a>
            </div>`,
            maxWidth: 300,
            disableAutoPan: true
        });

        const icon = {
            url: "https://djqvcbmmgpti5.cloudfront.net/assets/map/hipcamp-pin-acd5fbe15a2cc72f5919e5e86a32872fb43c7dbf03ebee8f3f1868c80123f002.png",
            scaledSize: new google.maps.Size(50, 50)
        }

        const marker = new google.maps.Marker({
            position: {lat: site.lat, lng: site.log},
            map: this.map,
            siteId: site.id,
            clicked: false,
            icon: icon,
            infoWindow: markerInfoWindow
        })

        this.markers[marker.siteId] = marker;

        marker.addListener('click', () => {
            const targetSite = document.getElementById(`site-${site.id}`);
            targetSite.scrollIntoView({ behavior: "smooth", block: "center" });
            this.map.setCenter(marker.getPosition());
        });

        marker.addListener('mouseover', () => {
            marker.infoWindow.open(this.map, marker);
        });

        marker.addListener('mouseout', () => {
            if (!marker.clicked) marker.infoWindow.close(this.map, marker);
        });
    }
}

export default MarkerManager;