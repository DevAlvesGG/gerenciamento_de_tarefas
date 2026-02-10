import type { Handler, Request, Response } from "express";
import { Task } from "../models/task.js";
import { z } from "zod";
import { HttpError } from "../../errors/HttpError.js";

// req.body { title, description, status, priority}
const StoreRquestSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["todo", "doing", "done"]),
    priority: z.enum(["low", "medium", "high"])
})

const UpdateRequestSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(["todo", "doing", "done"]).optional(),
    priority: z.enum(["low", "medium", "high"]).optional()
})

export class TaskController {
    //GET /api/tasks
    index: Handler = (req, res) => {
        const tasks = Task.findAll();
        return res.json(tasks)
    }
    //POST /api/tasks
    store = (req: Request, res: Response) => {
        const parseBody = StoreRquestSchema.parse(req.body);
        const task = Task.create(parseBody);
        return res.status(201).json(task);
    }
    //GET /api/tasks/:id
    show: Handler = (req, res) => {
        const { id } = req.params;
        if(!id) throw new HttpError(400, "Id is required");
        const task = Task.findById(+id)
        if(!task) throw new HttpError(404, "Task not found");
        res.json(task);
    }
    //PUT /api/tasks/:id
    update: Handler = (req, res) => {
        const { id } = req.params;
        if(!id) throw new HttpError(400, "Id is required");
        const parseBody = UpdateRequestSchema.parse(req.body);
        const updatedTask = Task.update(+id, parseBody)
        if(!updatedTask) throw new HttpError(404, "Task not found");
        res.json(updatedTask); 
    }
    //DELETE /api/tasks/:id
    delete: Handler = (req, res) => {
        const { id } = req.params;
        const deletedTask = Task.delete(+id);
        if(!deletedTask) throw new HttpError(404, "Task not found");
        res.json(deletedTask);
    }
}