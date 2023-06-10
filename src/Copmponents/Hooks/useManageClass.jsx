import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthPorvider/AuthPorvider";
const useManageClasses = () => {
    const { user, loading } = useContext(AuthContext)
    const token = localStorage.getItem('token')

    const { refetch, data = [] } = useQuery({
        queryKey: ['classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classesInstructor`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })
    return [data, refetch]
}
export default useManageClasses;