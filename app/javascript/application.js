// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

import {
    Chart,
    LinearScale,
    CategoryScale,
    BarController,
    BarElement
  } from 'chart.js'
  
  // Register the required components
  Chart.register(
    LinearScale,
    CategoryScale,
    BarController,
    BarElement
  )
  
  window.Chart = Chart