import React from 'react'
import BarChart from './Cards/BarChart'
import Card from './Cards/Card'
import ReportCard from './Cards/ReportCard'
import NavBar from './NavBar'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Card/>
       
        <hr />
        <ReportCard/>
        <hr/>
        <section className="container my-5">
        <div className="row shadow center py-3">
        <BarChart />
    </div>
        </section>
    </div>
  )
}

export default Home