import React from 'react'
import Card from '../Card';
import Footer from '../Footer';
import Header from '../Header';
import SearchBox from '../SearchBox';
import JobList from '../JobList'

export default function Home() {
    return (
        <>
            <Header />
            <SearchBox />
            <Card>
                <JobList />
            </Card>
            <Footer />
        </>
    )
}
