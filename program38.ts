function describe_city( city , country = 'Unknown') {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities with different countries
  describe_city('Karachi', 'Pakistan');
  describe_city('New York', 'USA');
  describe_city('Tokyo'); // Country will default to 'Unknown'

