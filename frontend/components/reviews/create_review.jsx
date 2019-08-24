import React, { Component } from 'react';

class CreateReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchSite(this.props.match.params.siteId);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
      
        this.props.createReview(this.props.match.params.siteId, this.state)
        .then(
            () => this.props.history.push(`/sites/${this.props.match.params.siteId}`))
    }

    render() {
        
        if (!this.props.site) {
            return null
        }

        return (
            <div className='create_review_form'>
                <div className='review_spot_title'>{this.props.site.title}</div>
                <div className="review_post_photo">
                    <img src={`${this.props.site.image_url}`} alt=""/>
                </div>
                <form className='review_form' onSubmit={this.handleSubmit}>
                    <textarea className='review_description'
                        cols='50'
                        rows='10'
                        maxLength="500"
                        value={this.state.body}
                        onChange={this.update('body')}
                        placeholder='Write a review about this site, Please!' />
                    <input className='create_review_submit' type='submit' value='Submit Review' />
                </form>
            </div>
        );
    }
}

export default CreateReview;
