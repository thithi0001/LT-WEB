const errorHandler = (err, req, res, next) => {
    if (err.status) {
        return res.status(err.status).json({
            message: err.message || 'An error occurred'
        });
    } else {
        res.status(500).json({
            message: err.message || 'Internal Server Error'
        });
    }
    
};

export default errorHandler;