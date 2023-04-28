import { useRouter } from 'next/router'

const longVer = () => {
    const router = useRouter()
    const query = router.query
    console.log(query)
    return (
        <div>
            <p>
                category is {query.category} & level is {query.level}
            </p>
            <p>
                category is {query.category} & level is {query.level}
            </p>
            <p>
                category is {query.category} & level is {query.level}
            </p>
            <p>
                category is {query.category} & level is {query.level}
            </p>
            <p>
                category is {query.category} & level is {query.level}
            </p>
            <p>
                category is {query.category} & level is {query.level}
            </p>
            <p>
                category is {query.category} & level is {query.level}
            </p>
        </div>
    )
}

export default longVer
