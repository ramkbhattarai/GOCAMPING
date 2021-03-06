
import React, { Component } from 'react';

import Slider from 'react-slick';

class PhotoSlideShow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let photos = ["https://media.glampinghub.com/CACHE/images/accommodations/lakefront-log-cabin-rental-set-in-forestry-of-adirondack-park-new-1544021446318/c5e52bb1535628282aec8e7192952620.jpg"];

        if (this.props.site.photoUrls) {
            photos = this.props.site.photoUrls;
        }
        
        const settings = {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            variableWidth: false,
            className: 'slider',
            adaptiveHeigth: false,
            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        variableWidth: false,
                    }
                },
            ]
        };
        
    //    let photoUrls = [];
    //    photos.forEach(photo => {
    //        photoUrls.push(photo.url)
    //    })

        return (
            <section className="spot_photo">
                <Slider {...settings}>
                    
                        {/* {
                        photoUrls.map((photoUrl, id) => {
                            return (
                                <div key={id}>
                                    <img src={photoUrl} alt="" />
                                </div>
                            )
                        })
                        } */}

                    {
                        photos.map((photo, id) => {
                            return (
                                <div key={id}>
                                    <img src={photo} alt="" />
                                </div>
                            )
                        })
                    }
                    
                </Slider>
            </section>
        )
    }
};

export default PhotoSlideShow;
