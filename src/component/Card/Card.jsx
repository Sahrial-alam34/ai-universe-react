import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false)

    const handleShowAll= () =>{
        setShowAll(true);
    }

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const data = await res.json();
            //console.log(data.data.tools);
            setData(data.data.tools)
        }
        loadData()
    }, [])
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-5'>
                {
                  
                   data.slice(0,showAll? 12: 6).map(singleData => {
                        // console.log(singleData)
                        return <SingleData singleData={singleData} key={singleData.id}></SingleData>
                    })
                }
            </div>
            {/* <p style={{display: "inline-block"}} onClick={handleShowAll}>
            <Button>See More</Button>
            </p> */}
            {
                 !showAll && (
                    <span  onClick={handleShowAll}>
                    <Button>See More</Button>
                    </span>
                 )
            }
           
        </>
    );
};

export default Card;