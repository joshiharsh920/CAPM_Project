const cds = require('@sap/cds')
const cors = require('cors')

cds.on('bootstrap', (app) => {
    app.use(cors({
        origin: 'http://localhost:5173', // Allow only your React app
        methods: 'GET,POST,PUT,PATCH,DELETE',
        credentials: true
    }))
})

module.exports = cds.server