import { todoList, todoItem, user } from "@repo/models";
import express, { Request } from "express";

const router = express.Router();

router.get(
    "/",
    async (req, res) => {

        let itemList:user[] = [];

        for (let i = 1; i <= 10; i++) {

            let item: user = {
                id: i,
                name: "John_"+i,
                active: true,
            };

            itemList.push(item);
        }

        res.json(itemList);
    }
);

export default router;