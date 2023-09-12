function createCar(manufacturer:any, modelName:any, ...options:any) {
    const car = {
      manufacturer: manufacturer,
      modelName: modelName,
    };
  
    // Process optional keyword arguments
    for (let i = 0; i < options.length; i += 2) {
      const key = options[i];
      const value = options[i + 1];
    //   car[key] = value;
    }
  
    return car;
  }
  
  // Call the function with required information and additional name-value pairs
  const myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'sunroof', true);
  
  // Print the object to verify all the information is stored correctly
  console.log(myCar);
  