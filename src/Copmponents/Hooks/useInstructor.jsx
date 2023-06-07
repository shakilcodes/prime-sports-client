import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthPorvider/AuthPorvider";

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem('token')
    const { refetch, isLoading, data: isInstructor = [] } = useQuery({
        queryKey: ['instructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`,{headers: {
                authorization: `bearer ${token}`
            }})
            return res.json();
        },
    })
    return [isInstructor, refetch, isLoading]
}
export default useInstructor;