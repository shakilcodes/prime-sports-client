import { useQuery } from "@tanstack/react-query";
const useClasses = () => {
    const { refetch, data: allClass = [] } = useQuery({
        queryKey: ['classes'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://prime-sports-server.vercel.app/classes`)
            return res.json();
        },
    })
    return [allClass, refetch]
}
export default useClasses;




