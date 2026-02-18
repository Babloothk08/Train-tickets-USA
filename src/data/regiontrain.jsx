export let regiontrain = [
  {
    region: "Northeast",
    routes: [
      { routeId: 1, from: "New York, NY", to: "Boston, MA", trainName: "Acela Express", duration: "4h", startTime: "08:00 AM", endTime: "12:00 PM", fare: 120 },
      { routeId: 2, from: "New York, NY", to: "Washington, DC", trainName: "Northeast Regional", duration: "3h 30m", startTime: "09:00 AM", endTime: "12:30 PM", fare: 95 },
      { routeId: 3, from: "Boston, MA", to: "Providence, RI", trainName: "MBTA Commuter Rail", duration: "1h", startTime: "07:30 AM", endTime: "08:30 AM", fare: 25 },
      { routeId: 4, from: "Philadelphia, PA", to: "Newark, NJ", trainName: "Northeast Regional", duration: "1h 15m", startTime: "10:00 AM", endTime: "11:15 AM", fare: 40 },
      { routeId: 5, from: "New Haven, CT", to: "New York, NY", trainName: "Metro-North", duration: "1h 45m", startTime: "06:45 AM", endTime: "08:30 AM", fare: 35 },
      { routeId: 6, from: "Albany, NY", to: "New York, NY", trainName: "Empire Service", duration: "2h 30m", startTime: "11:00 AM", endTime: "01:30 PM", fare: 55 },
      { routeId: 7, from: "Harrisburg, PA", to: "Philadelphia, PA", trainName: "Keystone Service", duration: "1h 45m", startTime: "02:00 PM", endTime: "03:45 PM", fare: 30 },
      { routeId: 8, from: "Baltimore, MD", to: "Washington, DC", trainName: "MARC Train", duration: "40m", startTime: "05:30 PM", endTime: "06:10 PM", fare: 15 },
      { routeId: 9, from: "Stamford, CT", to: "Grand Central, NY", trainName: "Metro-North", duration: "55m", startTime: "07:00 PM", endTime: "07:55 PM", fare: 18 },
      { routeId: 10, from: "Trenton, NJ", to: "New York, NY", trainName: "NJ Transit", duration: "1h 10m", startTime: "08:15 AM", endTime: "09:25 AM", fare: 22 }
    ]
  },
  {
    region: "Midwest",
    routes: [
      { routeId: 1, from: "Chicago, IL", to: "Milwaukee, WI", trainName: "Hiawatha", duration: "1h 30m", startTime: "06:30 AM", endTime: "08:00 AM", fare: 28 },
      { routeId: 2, from: "Chicago, IL", to: "Detroit, MI", trainName: "Wolverine", duration: "5h 30m", startTime: "07:00 AM", endTime: "12:30 PM", fare: 85 },
      { routeId: 3, from: "Chicago, IL", to: "St. Louis, MO", trainName: "Lincoln Service", duration: "5h", startTime: "09:00 AM", endTime: "02:00 PM", fare: 75 },
      { routeId: 4, from: "Chicago, IL", to: "Indianapolis, IN", trainName: "Cardinal", duration: "5h", startTime: "10:30 AM", endTime: "03:30 PM", fare: 70 },
      { routeId: 5, from: "Minneapolis, MN", to: "St. Paul, MN", trainName: "Metro Transit", duration: "25m", startTime: "08:00 AM", endTime: "08:25 AM", fare: 10 },
      { routeId: 6, from: "Cleveland, OH", to: "Toledo, OH", trainName: "Lake Shore Limited", duration: "2h 30m", startTime: "01:00 PM", endTime: "03:30 PM", fare: 45 },
      { routeId: 7, from: "Detroit, MI", to: "Pontiac, MI", trainName: "Amtrak Wolverine", duration: "1h", startTime: "04:00 PM", endTime: "05:00 PM", fare: 20 },
      { routeId: 8, from: "Kansas City, MO", to: "St. Louis, MO", trainName: "Missouri River Runner", duration: "5h 30m", startTime: "06:00 AM", endTime: "11:30 AM", fare: 80 },
      { routeId: 9, from: "Chicago, IL", to: "Grand Rapids, MI", trainName: "Pere Marquette", duration: "4h", startTime: "12:00 PM", endTime: "04:00 PM", fare: 60 },
      { routeId: 10, from: "Chicago, IL", to: "Minneapolis, MN", trainName: "Empire Builder", duration: "7h 45m", startTime: "03:00 PM", endTime: "10:45 PM", fare: 110 }
    ]
  },
  {
    region: "West Coast",
    routes: [
      { routeId: 1, from: "Los Angeles, CA", to: "San Diego, CA", trainName: "Pacific Surfliner", duration: "2h 45m", startTime: "07:00 AM", endTime: "09:45 AM", fare: 45 },
      { routeId: 2, from: "Los Angeles, CA", to: "San Francisco, CA", trainName: "Coast Starlight", duration: "12h", startTime: "06:00 AM", endTime: "06:00 PM", fare: 140 },
      { routeId: 3, from: "San Jose, CA", to: "San Francisco, CA", trainName: "Caltrain", duration: "1h 15m", startTime: "08:30 AM", endTime: "09:45 AM", fare: 15 },
      { routeId: 4, from: "Oakland, CA", to: "Sacramento, CA", trainName: "Capitol Corridor", duration: "1h 45m", startTime: "10:00 AM", endTime: "11:45 AM", fare: 30 },
      { routeId: 5, from: "Seattle, WA", to: "Portland, OR", trainName: "Cascades", duration: "3h 30m", startTime: "09:00 AM", endTime: "12:30 PM", fare: 50 },
      { routeId: 6, from: "Portland, OR", to: "Eugene, OR", trainName: "Amtrak Cascades", duration: "2h 30m", startTime: "01:00 PM", endTime: "03:30 PM", fare: 35 },
      { routeId: 7, from: "San Diego, CA", to: "Santa Barbara, CA", trainName: "Pacific Surfliner", duration: "4h 30m", startTime: "04:00 PM", endTime: "08:30 PM", fare: 65 },
      { routeId: 8, from: "Fresno, CA", to: "Bakersfield, CA", trainName: "Amtrak San Joaquins", duration: "2h", startTime: "06:00 AM", endTime: "08:00 AM", fare: 25 },
      { routeId: 9, from: "Sacramento, CA", to: "Truckee, CA", trainName: "California Zephyr", duration: "5h", startTime: "07:30 AM", endTime: "12:30 PM", fare: 55 },
      { routeId: 10, from: "San Francisco, CA", to: "Palo Alto, CA", trainName: "Caltrain", duration: "40m", startTime: "05:00 PM", endTime: "05:40 PM", fare: 12 }
    ]
  },
  {
    region: "South",
    routes: [
      { routeId: 1, from: "Miami, FL", to: "Orlando, FL", trainName: "Brightline", duration: "3h", startTime: "08:00 AM", endTime: "11:00 AM", fare: 70 },
      { routeId: 2, from: "Orlando, FL", to: "Tampa, FL", trainName: "Amtrak Silver Star", duration: "2h", startTime: "12:00 PM", endTime: "02:00 PM", fare: 40 },
      { routeId: 3, from: "Atlanta, GA", to: "Savannah, GA", trainName: "Amtrak Crescent", duration: "4h 30m", startTime: "06:30 AM", endTime: "11:00 AM", fare: 60 },
      { routeId: 4, from: "New Orleans, LA", to: "Jackson, MS", trainName: "City of New Orleans", duration: "3h", startTime: "09:00 AM", endTime: "12:00 PM", fare: 45 },
      { routeId: 5, from: "Houston, TX", to: "Dallas, TX", trainName: "Texas Eagle", duration: "6h", startTime: "07:00 AM", endTime: "01:00 PM", fare: 85 },
      { routeId: 6, from: "San Antonio, TX", to: "Austin, TX", trainName: "Texas Eagle", duration: "2h 45m", startTime: "03:00 PM", endTime: "05:45 PM", fare: 35 },
      { routeId: 7, from: "Charlotte, NC", to: "Raleigh, NC", trainName: "Piedmont", duration: "3h", startTime: "10:00 AM", endTime: "01:00 PM", fare: 30 },
      { routeId: 8, from: "Charleston, SC", to: "Columbia, SC", trainName: "Palmetto", duration: "2h", startTime: "01:30 PM", endTime: "03:30 PM", fare: 28 },
      { routeId: 9, from: "Nashville, TN", to: "Memphis, TN", trainName: "City of New Orleans", duration: "3h 30m", startTime: "04:00 PM", endTime: "07:30 PM", fare: 50 },
      { routeId: 10, from: "Birmingham, AL", to: "Atlanta, GA", trainName: "Amtrak Crescent", duration: "2h 30m", startTime: "06:00 PM", endTime: "08:30 PM", fare: 42 }
    ]
  }
]
