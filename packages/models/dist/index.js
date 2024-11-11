"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  todoItem: () => todoItem_exports,
  todoList: () => todoList_exports
});
module.exports = __toCommonJS(src_exports);

// src/todoItem.ts
var todoItem_exports = {};
__export(todoItem_exports, {
  TodoItemModel: () => TodoItemModel,
  TodoItemState: () => TodoItemState
});
var import_mongoose = __toESM(require("mongoose"));
var TodoItemState = /* @__PURE__ */ ((TodoItemState2) => {
  TodoItemState2["Todo"] = "todo";
  TodoItemState2["InProgress"] = "inprogress";
  TodoItemState2["Done"] = "done";
  return TodoItemState2;
})(TodoItemState || {});
var schema = new import_mongoose.Schema({
  listId: {
    type: import_mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  state: {
    type: String,
    required: true,
    default: "todo" /* Todo */
  },
  dueDate: Date,
  completedDate: Date
}, {
  timestamps: {
    createdAt: "createdDate",
    updatedAt: "updatedDate"
  }
});
var TodoItemModel = import_mongoose.default.model("TodoItem", schema, "TodoItem");

// src/todoList.ts
var todoList_exports = {};
__export(todoList_exports, {
  TodoListModel: () => TodoListModel
});
var import_mongoose2 = __toESM(require("mongoose"));
var schema2 = new import_mongoose2.Schema({
  name: {
    type: String,
    required: true
  },
  description: String
}, {
  timestamps: {
    createdAt: "createdDate",
    updatedAt: "updatedDate"
  }
});
var TodoListModel = import_mongoose2.default.model("TodoList", schema2, "TodoList");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  todoItem,
  todoList
});
