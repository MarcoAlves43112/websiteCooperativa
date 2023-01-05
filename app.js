const express = require('express');
const app = express();

app.set('view engine','pug');
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('index.pug', {
        title: 'Home Page'
    });
});

app.get('/history', (req, res) =>{
    res.render('history.pug', {
        title: 'History'
    });
});

app.get('/wine', (req, res) =>{
    res.render('wine.pug', {
        title: 'Wine'
    });
});

app.get('/oliveoil', (req, res) =>{
    res.render('oliveoil.pug', {
        title: 'Olive Oil'
    });
});

app.get('/newevents', (req, res) =>{
    res.render('newevents.pug', {
        title: 'News/Events'
    });
});

app.listen(1234, () =>{
    console.log("Server is running on 1234");
});