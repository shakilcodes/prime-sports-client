import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthPorvider/AuthPorvider";

const useSingleInstuctor = () => {
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('token')
    const { refetch, data = [] } = useQuery({
        queryKey: ['singleInsructor', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/singleInsructor?email=${user.email}`,{headers: {
                authorization: `bearer ${token}`
            }})
            return res.json();
        },
    })
    return [data, refetch]
}
export default useSingleInstuctor;