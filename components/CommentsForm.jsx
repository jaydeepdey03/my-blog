import React, { useState, useEffect, useRef } from 'react'

const CommentsForm = () => {

    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null)
    const [showSucessMessage, setShowSucessMessage] = useState(false)
    const commentEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
    const storeDataEl = useRef()

    const handleCommentSubmission = () => {
        setError(false)

        const {value: comment} = commentEl.current
        const {value: email} = emailEl.current
        const {value: name} = nameEl.current

        if(!comment || !name || !email){
            setError(true)
            return;
        }

        const commentObj = { name, email, comment, slug }
    }

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Comments</h3>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <textarea
                placeholder='Comment'
                name='comment'
                className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
                ref={commentEl} />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                <input name='name' placeholder='Name' type="text" ref={nameEl} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />

                <input name='email' placeholder='Email' type="text" ref={nameEl} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />
            </div>
            {error && <p className='text-xs text-red-500'>All Fields Required</p>}
            <div className='mt-8'>
                <button 
                className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
                type='button' 
                onClick={handleCommentSubmission}>
                    Post Comment
                </button>
                {showSucessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment Submitted for Review</span>}
            </div>
        </div>
    )
}

export default CommentsForm
