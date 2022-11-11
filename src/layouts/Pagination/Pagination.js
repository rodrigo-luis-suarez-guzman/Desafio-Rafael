import React from 'react';
import './pagination.scss';
import PropTypes from 'prop-types'


const Pagination = (props) => {

    const {
        totalImages, 
        imagesPerPage, 
        maxPageNumberLimit, 
        minPageNumberLimit, 
        handlePag, 
        currentPage, 
        handleNext,
        handlePrev
    } = props

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++){
        pageNumbers.push(i)
    }

    
    return (
        <nav className="pagination">
            {totalImages > 0 && (
                <ul>
                    <li>
                        <button 
                            id="prevButton"
                            onClick={handlePrev}
                            disabled={currentPage === pageNumbers[0] ? true : false}
                        >
                            Prev
                        </button>
                    </li>
                    {pageNumbers.map(i => {
                        if(i < maxPageNumberLimit + 1 && i > minPageNumberLimit){
                            return (
                                <li key={i}>
                                    <button 
                                        id={i} 
                                        onClick={handlePag} 
                                        className={currentPage === i ? 'active' : null}
                                    >
                                        {i}
                                    </button>
                                </li>
                                )
                            }else{
                                return null
                            }
                        })}
                    <li>
                        <button 
                            onClick={handleNext}
                            disabled={currentPage === pageNumbers[pageNumbers.length - 1] ? true : false}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            )}
             
        </nav>
    )
}

Pagination.propTypes = {
    totalImages: PropTypes.number.isRequired,
    imagesPerPage: PropTypes.number.isRequired,
    maxPageNumberLimit: PropTypes.number.isRequired,
    minPageNumberLimit: PropTypes.number.isRequired,
    handlePag: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    handleNext: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired
}

export default Pagination