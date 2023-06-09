import { useQuery } from "@tanstack/react-query";
const useClasses = () => {
    const { refetch, data: allClass = [] } = useQuery({
        queryKey: ['classes'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes`)
            return res.json();
        },
    })
    return [allClass, refetch]
}
export default useClasses;




