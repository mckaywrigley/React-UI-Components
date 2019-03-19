import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    likeHandler = e => {
        alert('liked');
    }

    render() {
        return (
            <div className="footer">
                <i class="far fa-comment first"></i>
                <i class="fas fa-retweet"></i><p>6</p>
                <i onClick={this.likeHandler} class="far fa-heart"></i><p>4</p>
                <i class="far fa-envelope"></i>
            </div>
        );
    }
    
    
}

export default Footer;