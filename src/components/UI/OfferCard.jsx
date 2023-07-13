import React from 'react'
import {motion} from 'framer-motion';
import '../../styles/offer-card.css';
import { Col } from "reactstrap";
import { Link } from 'react-router-dom';

const OfferCard = ({item}) => {
    return (
        <Col lg='3' md='4' className='mb-2'>
            <div className="offer__item">
                <div className="offer__img">
                    <motion.img whileHover={{ scale:0.9 }}src={item.imgUrl} alt="" />
                </div>
                <div className='p-2 offer__info'>
                <h3 className="offer__name"><Link to={`/offer/${item.id}`}>{item.offerName}</Link></h3>
                <span >{item.category}</span>
                </div>
                <div className="offer__card-bottom d-flex align-items-center
                justify-content-between p-2">
                    <span className='status'>{item.status}</span>
                </div>
            </div>
        </Col>
    );
};

export default OfferCard;
