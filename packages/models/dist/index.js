var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  todoItem: () => todoItem_exports,
  todoList: () => todoList_exports,
  user: () => user_exports
});
module.exports = __toCommonJS(src_exports);

// src/todoItem.ts
var todoItem_exports = {};
__export(todoItem_exports, {
  TodoItemState: () => TodoItemState
});
var TodoItemState = /* @__PURE__ */ ((TodoItemState2) => {
  TodoItemState2["Todo"] = "todo";
  TodoItemState2["InProgress"] = "inprogress";
  TodoItemState2["Done"] = "done";
  return TodoItemState2;
})(TodoItemState || {});

// src/todoList.ts
var todoList_exports = {};

// src/user.ts
var user_exports = {};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  todoItem,
  todoList,
  user
});
