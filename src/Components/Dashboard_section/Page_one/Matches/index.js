import React from 'react'
import Left_section from './Left_section'
import Right_section from './Right_section'

export default function index() {
    return (
        <div>
            <h2> Matches</h2>
            <div className='flex'>
                <div className="w-[50%]">
                    <Left_section />
                </div>
                <div className="w-[50%]">
                    <Right_section />
                </div>
            </div>
        </div>
    )
}
