import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';

const ProductRating = () => {
    const [rating, setRating] = useState(0);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        setPopupOpen(false);
    };

    return (
        <div>
            <button className="btn btn-success btn-sm" onClick={() => setPopupOpen(true)}>Rate</button>

            {isPopupOpen && (
                <div className="popup position-absolute">
                    <Rating
                        count={5}
                        onChange={handleRatingChange}
                        size={24}
                        value={rating}
                    />
                </div>
            )}
        </div>
    );
};

export default ProductRating;
