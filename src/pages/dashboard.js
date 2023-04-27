import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <br />

            <Link href="/tasks">ToTaskPage</Link>

            <br />

            <Link href="/practice/parent">custom Hooks practice</Link>
            <br />
            <Link href="/practice/parent2">custom Hooks practice2</Link>
        </AppLayout>
    )
}

export default Dashboard
