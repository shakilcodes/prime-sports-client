import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthPorvider/AuthPorvider";

const useNumberStuden = () => {
    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem('token')
    const { refetch, data: students = [], isLoading } = useQuery({
        queryKey: ['payments'],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://prime-sports-server.vercel.app/payments`,{headers: {
                authorization: `bearer ${token}`
            }})
            return res.json();
        },
    })
    return [students, refetch, isLoading]
}
export default useNumberStuden;