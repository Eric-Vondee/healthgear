const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const helmet = require('helmet');
const DB = require('./db/index');
const app = express();


const corsOption = {
	origin: process.env.NODE_ENV==='production' ? 'https://gogata.vercel.app':'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
}

const PORT = process.env.PORT || 4000
//Connect DB 
DB()

app.use(cors(corsOption))
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Show routes called in console during development
/*if (process.env.NODE_ENV === 'development') {
	app.use(logger('dev'));
}*/

// Security
if (process.env.NODE_ENV === 'production') {
	app.use(helmet());
}

//Routes
app.use('/api/v1', require('./routes/index'));

//Catch 404 and forard to error handler 
app.use((req,res, next) => {
    next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
	// render the error page
	res.status(err.status || 500);
	res.send({
		status: 'ERROR',
		message: err.message,
		payload: { ...err }
	});
});

app.listen(PORT, ()=>   console.log(`HealthGear server started on port http://0.0.0.0:${PORT}.`));