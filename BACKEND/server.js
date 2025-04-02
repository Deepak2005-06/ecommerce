import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();


import "./config/db.js";
const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:5173"], // ✅ Frontend URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // ✅ Allow cookies and auth headers
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allow specific headers
  })
);

import myStoreRoutes from './routes/myStoreRoutes.js'
// import loginRoutes  from './routes/loginRoutes.js';
// import dealerProductRoutes from './routes/dealerProductsRoutes.js';
// import orderProductRoutes from './routes/orderProductRoutes.js';
// import userCartRoutes from './routes/userCartRoutes.js';
// import productsRoutes from './routes/productsRoutes.js'
// import bugReportRoutes from "./routes/bugReportRoutes.js";

//API's
app.use('/',myStoreRoutes);
// app.use("/login", loginRoutes);
// app.use("/",dealerProductRoutes);
// app.use("/product",orderProductRoutes)
// app.use("/",userCartRoutes);
// app.use("/",productsRoutes);
// app.use("/",bugReportRoutes);
 
app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
    next();
  });
 


app.listen(PORT, () => {
    console.log( `🚀 Server running on http://localhost:${PORT}`);
  }); 