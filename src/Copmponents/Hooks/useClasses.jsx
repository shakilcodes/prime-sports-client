import { useQuery } from "@tanstack/react-query";
const useClasses = () => {
    const { refetch, data = [] } = useQuery({
        queryKey: ['classes'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://prime-sports-server.vercel.app/classes`)
            return res.json();
        },
    })
    return [data, refetch]
}
export default useClasses;




