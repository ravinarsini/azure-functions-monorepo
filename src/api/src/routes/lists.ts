import express, { Request } from "express";
import { UserModel, todoItem } from "@repo/models";

const router = express.Router();

/**
 * Gets a list of Todo list
 */
router.get(
  "/",
  async (req, res) => {
    const userList : UserModel.User[] = [];
    for(let i = 1; i <= 10; i++){
      const user = new UserModel.User();
      user.setUser(i, "Ravi_" + i);
      userList.push(user);
    }    

    res.json(userList);
  }
);

export default router;
