import { app } from './index';

app.listen(process.env.PORT, ()=>console.log(`server running on port: ${process.env.PORT}`))

