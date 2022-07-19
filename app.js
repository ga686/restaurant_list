const express = require('express')
const app = express()
const port = 3000
const restaurantList = require('./restaurant.json')

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
    res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
    const restaurant = restaurantList.results.find(item => req.params.restaurant_id === item.id.toString())
    res.render('show', { restaurant })
})

app.get('/search', (req, res) => {
    const keyword = req.query.keyword
    const restaurants = restaurantList.results.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()))

    if (restaurants.length > 0) {
        res.render('index', { restaurants })
        return
    }
    res.render('empty_page', { keyword })
})



app.listen(port, () => {
    console.log(`Express is listening on http://localhost:${port}`)
})