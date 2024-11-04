import { createContext , useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {

    const [task, setTask] = useState('react');
    const [description, setDescription] = useState(' Learn react');
    const [tasks, setTasks] = useState([{
        task: 'react',
        description: 'Learn react'
    
    }
]);

    return (
        <UserContext.Provider value={{ task, setTask, tasks, setTasks,description,setDescription }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;




