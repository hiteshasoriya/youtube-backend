import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json( {limit:'16kb'} ))                   //  we can use this instead of body-parser
app.use(express.urlencoded({extended:true, limit:"16kb"}))    
app.use(express.static("public"))    // if user need to store favicon icon or other file then we need to create folder and store like this
app.use(cookieParser())

// routes import 
import userRouter from './routes/user.routes.js'
import tweetRouter from "./routes/tweet.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js";
import healthCheckRouter from "./routes/healthCheck.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js"


// routes declaration 
app.use("/api/v1/users", userRouter)     // https://localhost:3000/api/v1/users/register.....
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/healthCheck", healthCheckRouter);
app.use("/api/v1/dashboard", dashboardRouter)

export {app} 