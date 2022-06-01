import { useEffect, useState } from "react";
import Task from "../model/Task";

const LS_KEY = "tasks";

const useLocalStorage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const ls = localStorage.getItem(LS_KEY);

    if (ls) {
      try {
        setTasks(JSON.parse(ls));
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  const set = (value: Task[]) => {
    localStorage.setItem(LS_KEY, JSON.stringify(value));
    setTasks(value);
  };

  return [tasks, set] as const;
};

export default useLocalStorage;
