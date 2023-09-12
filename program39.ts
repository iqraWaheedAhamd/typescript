function city_country(city, country) {
    return `${city}, ${country}`;
  }
  
  // Call the function with at least three city-country pairs
  const location1 = city_country('Lahore', 'Pakistan');
  const location2 = city_country('New York', 'USA');
  const location3 = city_country('Tokyo', 'Japan');
  
  // Print the values returned by the function
  console.log(location1);
  console.log(location2);
  console.log(location3);
  