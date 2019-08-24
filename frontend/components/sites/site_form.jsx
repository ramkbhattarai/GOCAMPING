// import React, { Component } from 'react';

// import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// class SiteForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             host_id: props.user.id,
//             title: '',
//             body: '',
//             cost: '',
//             pet_allow: false,
//             guest_num: '',
//             lat: '',
//             log: '',
//             campfire: false,
//             tent: false,
//             spots: '',
//             parking: false,
//             toilet: false,
//             shower_room: false,
//             hiking: false,
//             biking: false,
//             wildlife: false,
//             rafting: false,
//             wifi: false,
//             address: "",
//             photoFile: [],
//             photoUrl: [],
//             photos: '',
//             errors: []
            
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.validate = this.validate.bind(this);
//         this.handleFile = this.handleFile.bind(this);
//     }

//     handleFile(event) {
//         const reader = new FileReader();
//         const file = event.currentTarget.files[0];
//         reader.onloadend = () => this.setState(
//             { photoUrl: this.state.photoUrl.concat([reader.result]), photoFile: this.state.photoFile.concat([file]) }
//         );
//         if (file) {
//             reader.readAsDataURL(file);
//         } else {
//             this.setState({ photoUrl: [], photoFile: [] });
//         }
//     }

//     handleChange(event) {
//         const { name, value } = event.target;
//         if (name === "address") {
//             this.setState({
//                 [name]: value
//             });
//             geocodeByAddress(value)
//                 .then(results => getLatLng(results[0]))
//                 .then(({ lat, lng }) =>
//                     this.setState({ lat: lat, log: lng })
//                 );
//         } else {
//             this.setState({
//                 [name]: value
//             });
//         }
//     }


//     handleInputChange(e){
//         const target = e.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//         this.setState({
//             [name] : value
//         })
//     }

//     validate(title, body, cost, photos, spots, guest_num, address) {
//         const errors = [];

//         if (title.length === 0) errors.push("Title can't be empty.");
//         if (body.length === 0) errors.push("Description can't be blank.");
//         if (cost < 1) errors.push("Cost should be over $0.");
//         if (spots < 1) errors.push("Number of sites should be over 0.")
//         if (guest_num < 1) errors.push("Guest Number should be over 0.");
//         if (address.length === 0) errors.push("Address cannot be blank.")
//         if (photos.length === 0) errors.push("Upload at least 1 photo.")

//         return errors;
//     }

//     handleSubmit(e){
//         e.preventDefault();
//         const { title, body, cost, photos, spots, guest_num, address } = this.state;

//         const errors = this.validate(title, body, cost, photos, spots, guest_num, address);
//         if (errors.length > 0) {
//             this.setState({ errors });
//             return;
//         }

//         const formData = new FormData();

//         for (let i = 0; i < this.state.photos.length; i++) {
//             formData.append('site[photos][]', this.state.photos[i]);
//         }
//         formData.append('site[title]', this.state.title);
//         formData.append('site[host_id]', this.props.user.id);
//         formData.append('site[body]', this.state.body);
//         formData.append('site[cost]', this.state.cost);
//         formData.append('site[pet_allow]', this.state.pet_allow);
//         formData.append('site[guest_num]', this.state.guest_num);
//         formData.append('site[lat]', this.state.lat);
//         formData.append('site[log]', this.state.log);
//         formData.append('site[campfire]', this.state.campfire);
//         formData.append('site[tent]', this.state.tent);
//         formData.append('site[spots]', this.state.spots);
//         formData.append('site[parking]', this.state.parking);
//         formData.append('site[toilet]', this.state.toilet);
//         formData.append('site[shower_room]', this.state.shower_room);
//         formData.append('site[hiking]', this.state.hiking);
//         formData.append('site[biking]', this.state.biking);
//         formData.append('site[wildlife]', this.state.wildlife);
//         formData.append('site[rafting]', this.state.rafting);
//         formData.append('site[wifi]', this.state.wifi);
//         this.props.hostSite(formData)
//             .then((response) => {
//                 return (
//                     this.props.history.push(`/spots/${Object.keys(response.spot)[0]}`)
//                 )
//             }) 
//     }
    
//     render(){
//         const { errors } = this.state;

//         let preview = null;
//         if (this.state.photoUrl.length > 0) {
//             preview = this.state.photoUrl.map((photo, idx) => {
//                 return <img key={idx} src={photo} alt="" />
//             })
//         } 
//         return(
//             <div className="site_form_container">
//             <form className="site_form"  onSubmit={this.handleSubmit}>
//                 <div className="site_title">
//                     Title:
//                     <input type="text"
//                     name="title"
//                     value={this.state.title}
//                     onChange={this.handleChange}
//                     placeholder='Title'
                    
//                     />
//                 </div>
//                 <div className="site_description">
//                     Write Short Description For Your Site:
//                     <input type="text"
//                     name="body"
//                     value={this.state.body}
//                         onChange={this.handleChange}
//                             placeholder='Description'
//                     />
//                 </div>
//                 <div className="site_cost_num_spots">

//                 <div className="site_cost">
//                     Enter Cost For Your Site pernight:
//                     <input type="number" 
//                     name="cost"
//                     value={this.state.cost}
//                     onChange={this.handleInputChange}
//                                 placeholder='Cost'
//                     />
//                 </div>
//                 <div className="site_guest_num">
//                     Enter Maxium Number of Guest For Your Site pernight:
//                     <input type="number"
//                     name="guest_num"
//                     value={this.state.guest_num}
//                         onChange={this.handleInputChange}
//                                 placeholder='Guest Number'
//                     />
//                 </div>
//                 <div className="site_spots">
//                     Enter Number of Spots For Your Site pernight:
//                     <input type="number"
//                     name="spots"
//                     value={this.state.spots}
//                         onChange={this.handleInputChange}
//                                 placeholder='Number of Spots'
//                     />
//                 </div>
//                 </div>
//                 <div className="site_address">
//                     Enter Address of Your Site:
//                     <input type="text"
//                     name="address"
//                     value={this.state.address}
//                         onChange={this.handleChange}
//                             placeholder='Address'
//                     />
//                 </div>
//                 <div className="site_checkboxes">

//                     <div className="site_pet">
//                     Pets Allow?:
//                     <input type="checkbox"
//                         name='pet_allow'
//                         checked={this.state.pet_allow}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                     <div className="site_campfire">
//                     Campfire?:
//                     <input type="checkbox"
//                         name='campfire'
//                         checked={this.state.campfire}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                     <div className="site_tent">
//                     Tent?:
//                     <input type="checkbox"
//                         name='tent'
//                         checked={this.state.tent}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                     <div className="site_parking">
//                     Parking?:
//                     <input type="checkbox"
//                         name='parking'
//                         checked={this.state.parking}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                     <div className="site_toilet">
//                     Toilet?:
//                     <input type="checkbox"
//                         name='toilet'
//                         checked={this.state.toilet}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                     <div className="site_shower_room">
//                     Shower Room?:
//                     <input type="checkbox"
//                         name='shower_room'
//                         checked={this.state.shower_room}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                     <div className="site_wildlife">
//                     Wildlife?:
//                     <input type="checkbox"
//                         name='wildlife'
//                         checked={this.state.wildlife}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                     <div className="site_hiking">
//                     Hiking?:
//                     <input type="checkbox"
//                         name='hiking'
//                         checked={this.state.hiking}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                     <div className="site_biking">
//                     Biking?:
//                     <input type="checkbox"
//                         name='biking'
//                         checked={this.state.biking}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                     <div className="site_rafting">
//                     Rafting?:
//                     <input type="checkbox"
//                         name='rafting'
//                         checked={this.state.rafting}
//                         onChange={this.handleInputChange}
//                     />
//                 </div>
//                     <div className="site_wifi">
//                         Wifi?:
//                         <input type="checkbox"
//                             name='wifi'
//                             checked={this.state.wifi}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                 </div>

//                     <input type="file" id="photo_upload" className="photo_upload" accept="image/*" onChange={(e) => this.setState({ photos: e.target.files })} multiple />
//                     <label className="photo_upload_button" htmlFor="photo_upload"><i className="fas fa-camera"></i><span>Upload</span></label>

//                     {preview}

//                     <div className="form_signup">
//                         <div className="host_form_errors">
//                             {errors.map(error => (
//                                 <p key={error}>&#10060; {error}</p>
//                             ))}
//                         </div>
//                     </div>
//                 <input className="site_submit_button" type="submit" value="Submit"/>
//             </form>
//             </div>
//         )
//     }
// }

// export default SiteForm;