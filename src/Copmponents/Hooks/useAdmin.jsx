import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthPorvider/AuthPorvider";

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem('token')
    const { refetch, isLoading, data: isAdmin = [] } = useQuery({
        queryKey: ['admin', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`,{headers: {
                authorization: `bearer ${token}`
            }})
            return res.json();
        },
    })
    return [isAdmin, refetch, isLoading]
}
export default useAdmin;