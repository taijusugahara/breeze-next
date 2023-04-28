import { useRouter } from 'next/router'

const shortVer = () => {
    const router = useRouter()
    const query = router.query
    console.log(query)
    return (
        <div>
            <p>
                category is {query.category} & level is {query.level}
            </p>
        </div>
    )
}

export default shortVer
