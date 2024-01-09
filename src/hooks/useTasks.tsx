import { useState } from "react";
import { IMyForm } from "../interfaces/IForm";

export const useTasks = () => {
    const [tasks, setTasks] = useState<IMyForm[]>([]);
    return ({tasks, setTasks})
}