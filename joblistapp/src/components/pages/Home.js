import React from 'react'
import Card from '../Card';
import Footer from '../Footer';
import Header from '../Header';
import SearchBox from '../SearchBox';
import JobList from '../JobList'
import Status from '../Status';

export default function Home() {
    return (
        <>
            <Header />
            <SearchBox />
            <Card
                header={<Status />}
                body={<JobList />}
            />
            <Footer />
        </>
    )
}
