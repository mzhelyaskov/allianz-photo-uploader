var express = require('express');
var multer = require('multer');
var app = express();

var upload = multer({dest: './uploads/'});

var staticDirUrl = './backend/static';

app.use(express.static(staticDirUrl));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods', 'POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.post('/upload-photo', upload.single('file'), function (req, res) {
	console.log('uploaded file:', req.file);
	console.log('uploaded body:', req.body);
});

app.get('/*', function (req, res) {
	res.sendfile('index.html', {root: staticDirUrl});
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log('Working on port ' + PORT);
});
