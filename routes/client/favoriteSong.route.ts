import express from "express";
const router = express.Router();
import * as favoriteSongController from "../../controllers/client/favoriteSong.controller";

router.patch("/favorite-song/:id", favoriteSongController.addFavoriteSong);

export default router;