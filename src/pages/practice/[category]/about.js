import { useRouter } from 'next/router'

const about = () => {
    const router = useRouter()
    const query = router.query
    console.log(query)
    return <div>category is {query.category}</div>
}

export default about
