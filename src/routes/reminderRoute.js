import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
    res.send("get all reminders")
})

router.get("/:id", (req, res) => {
    res.send("get reminder by id")
})

router.post("/", (req, res) => {
    res.send("create new reminder")
})

router.patch("/:id", (req, res) => {
    res.send("update old reminder")
})

router.delete("/:id", (req, res) => {
    res.send("delete old reminder")
})

export default router