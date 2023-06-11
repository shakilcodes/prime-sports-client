import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthPorvider/AuthPorvider";

const useUsers = () => {
    const {loading} = useContext(AuthContext)
    const token = localStorage.getItem('token')
    const { refetch, data: userMB = [] } = useQuery({

        queryKey: ['users'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://prime-sports-server.vercel.app/users`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            }
            )
            return res.json();
        },
    })
    return [userMB, refetch]
}
export default useUsers;

