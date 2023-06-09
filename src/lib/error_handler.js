import logger from './logger.js';

export default (err, req, res, next) => {
    logger.error(err.message || err);

    res.status(err.status || 500).json({
        message: err.message || 'Unexpected Server Error',
    }); 
};
