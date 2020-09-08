import app from './app'
import * as expressOasGenerator from 'express-oas-generator'

expressOasGenerator.init(app, {})

app.listen(process.env.APP_PORT || 3333)
