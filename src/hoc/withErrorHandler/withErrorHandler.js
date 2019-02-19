import React, { useState, useEffect, Fragment } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {

    const [error, clearError] = useHttpErrorHandler(axios);

    return props => {
        return (
            <Fragment>
                <Modal
                    show={error}
                    modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Fragment>
        )
    }
};

export default withErrorHandler;