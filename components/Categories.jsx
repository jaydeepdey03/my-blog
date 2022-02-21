import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then((newCat)=> setCategories(newCat))
    }, [])

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                Categories
            </h3>
            {categories.map((e)=>{
                return (
                   <Link key={e.slug} href={`/category/${e.slug}`}>
                       <span className='cursor-pointer block pb-3 mb-3'>{e.name}</span>
                   </Link>
                )
            })}
        </div>
    )
}

export default Categories