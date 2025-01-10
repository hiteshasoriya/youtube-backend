import { Router } from 'express';
import { verifyJWT } from "../middlewares/auth.middleware.js"
import { upload } from "../middlewares/multer.middleware.js"
import {
    getAllVideos,
    getVideoById,
    publishAVideo,
    deleteVideo,
    updateVideo,
    togglePublishStatus

} from "../controllers/video.controller.js"


const router = Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/").post(
    upload.fields([
        {
            name: "videoFile",
            maxCount: 1
        },
        {
            name: "thumbnail",
            maxCount: 1
        }
    ]),
    publishAVideo
);

router.route("/").get(getAllVideos)

router.route("/v/:videoId")
    .get(getVideoById)
    .patch(upload.single("thumbnail"), updateVideo)
    .delete(deleteVideo)

router.route("/toggle/publish/:videoId").patch(togglePublishStatus);

export default router