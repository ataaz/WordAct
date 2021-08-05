import React from 'react';

function PageLoader() {
    return(
    <div className="container PageLoader">
        <div className="d-flex justify-content-center h-100 align-items-center">
            <div class="spinner-border brand-color" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    </div>
    );
}

export default PageLoader;