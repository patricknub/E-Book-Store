import express from "express";
import { addbooks, deletebook, getBook, updatebook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/addbook", addbooks);
router.delete("/deletebook/:id", deletebook);
router.put("/updatebook/:id", updatebook);

export default router;