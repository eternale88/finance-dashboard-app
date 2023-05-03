import express from "express";
import KPI from "../models/KPI.js";

const router = express.router();

router.get("/kpis", async (req, res) => {
  try {
    // using mongoose ODM to call database - stored in models folder
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
