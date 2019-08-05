import { combineReducers } from 'redux';
import modal from './modal_reducer';
import filters from './filters_reducer';
import geoLocation from './geolocation_reducer';
import mapBounds from './location_filter_reducer';
export default combineReducers({
    modal,
    filters,
    geoLocation,
    mapBounds
});