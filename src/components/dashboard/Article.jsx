import React from 'react'
import { BsBookmark } from 'react-icons/bs'
import { FiShare2 } from 'react-icons/fi'

const Article = ({
    date,
    title,
    author,
    tagsOne,
    description,
    tagsTwo,
    tagsThree,
}) => {
    return (
        <div className='mt-2 mb-5'>
            <div className='d-flex justify-content-center gap-5'>
                <div className='border border-#FFFFFF' style={{ borderRadius: "10px", padding: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)"}}>
                    <div className='d-flex justify-content-between gap-5'>
                        <h6>{date}</h6>
                        <div>
                            <FiShare2 style={{
                                color: "#167092", marginRight: "10px"
                            }} />
                            <BsBookmark style={{
                                color: "#167092"
                            }} />
                        </div>
                    </div>
                    <div className=''>
                        <h4 style={{ color: "#167092", fontWeight: "bold" }}>{title}</h4>
                        <p style={{ color: "#404040", fontWeight: "bold" }}>{author}</p>
                        <p style={{
                            color: "#167092",
                            backgroundColor: "#EBF4F4",
                            width: "140px",
                            padding: "4px",
                            borderRadius: "5px",
                            fontWeight: "500",
                            marginBottom: "20px",
                        }}>{tagsOne}</p>
                    </div>
                    <div>
                        <p style={{ fontWeight: "500" }}>
                            {description}</p>
                        <p style={{
                            color: "#167092",
                            fontWeight: "500",
                            backgroundColor: "#EBF4F4",
                            borderRadius: "5px",
                            width: "300px",
                            padding: "4px"
                        }}>
                            {tagsTwo}</p>
                        <p style={{
                            color: "#167092",
                            fontWeight: "500",
                            backgroundColor: "#EBF4F4",
                            borderRadius: "5px",
                            width: "120px",
                            padding: "4px",
                            marginTop: "10px"
                        }}>
                            {tagsThree}</p>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Article