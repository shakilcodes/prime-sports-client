import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const { refetch, data = [] } = useQuery({
        queryKey: ['classes'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            return res.json();
        },
    })
    return [data, refetch]
}
export default useUsers;