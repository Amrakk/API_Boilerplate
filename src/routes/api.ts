import express from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("API is working");
});

router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;