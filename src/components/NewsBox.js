import React from 'react';
import NewsItem from './NewsItem';

export default function () {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4 ml-sd-4">
                    <NewsItem />
                </div>
                <div className="col-md-4 ml-sd-4">
                    <NewsItem />
                </div>
                <div className="col-md-4 ml-sd-4">
                    <NewsItem />
                </div>

            </div>
        </div>
    )
}
