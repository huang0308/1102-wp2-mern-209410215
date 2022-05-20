const errorHandlerMiddleware_15 = (err,req,res,next) => {
    console.log('error',err);
    res.status(500).json({ msg: err });
}

export default errorHandlerMiddleware_15;