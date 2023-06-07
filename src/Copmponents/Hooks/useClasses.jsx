import { useQuery } from "@tanstack/react-query";
const useClasses = () => {
    // const token = localStorage.getItem('access-token');
    const { refetch, data = [] } = useQuery({
        queryKey: ['classes'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes`)
            return res.json();
        },
    })

    return [data, refetch]

}
export default useClasses;

// queryFn: async () => {
        //     const res = await fetch(`https://bistro-boss-server-fawn.vercel.app/carts?email=${user?.email}`, { headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },