import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import moment from 'moment'
import { getRecentPost, getSimilarPost } from '../services'

const PostWidget = ({categories, slug}) => {
    const [relatedPost, setRelatedPost] = useState([])

    useEffect(() => {
        if(slug){
            getSimilarPost(categories, slug).then((result) => setRelatedPost(result))
        }
        else{
            getRecentPost(categories, slug).then((result) => setRelatedPost(result))
        }
        
    }, [slug])

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                {slug ? 'Related Post' : 'Recent Post'}
            </h3>
            {relatedPost.map((e, index)=>{
                return (
                    <div key={index} className="flex items-center w-full mb-4">
                        <div className='w-16 flex-none'>
                            <img 
                            className='align-middle rounded-full'
                            height='60px'
                            width='60px'
                            src={e.featuredImage.url} 
                            alt={e.title}
                            />
                        </div>
                        <div className='flex-grow ml-4'>
                            <p className='text-gray-500 text-xs'>{moment(e.createdAt).format("MMM DD YYYY")}</p>
                            <Link key={index} href={`/post/${e.slug}`}>
                                {e.title}
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PostWidget
