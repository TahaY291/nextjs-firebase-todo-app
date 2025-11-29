import React from 'react'

const Title = ({heading}) => {
    return (
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            {heading}
        </h1>
    )
}

export default Title