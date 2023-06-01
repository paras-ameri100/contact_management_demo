import React from 'react'
import PageTitle from '../../helpers/PageTitle'
import LineChart from './LineChart'
import LeaflatMap from './LeaflatMap'


export default function ChartsMaps() {

  return (
    <>
      <PageTitle title='Charts & Maps' />
      <div className='line-chart-wrapper'>
        <LineChart />
      </div>
      <div className='leaflat-map-wrapper' style={{width: '100%', height: '500px'}}>
        <LeaflatMap />
      </div>
    </>
  )
}

