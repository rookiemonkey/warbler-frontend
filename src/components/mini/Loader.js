import React from 'react'

const Loader = () => {
    return (
        <div className="loader_container" >
            <svg className="loader" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 100 100" enableBackground="new 0 0 0 0" space="preserve">
                <circle fill="none" stroke="#fff" strokeWidth="4" cx="50" cy="50" r="44" style={{ opacity: "0.5" }} />
                <circle fill="#fff" stroke="#5F6B78" strokeWidth="3" cx="8" cy="54" r="6" >
                    <animateTransform
                        attributeName="transform"
                        dur="2s"
                        type="rotate"
                        from="0 50 48"
                        to="360 50 52"
                        repeatCount="indefinite" />

                </circle>
            </svg>

            <small className="loader_text">Loading</small>
        </div>
    )
}

export default Loader;