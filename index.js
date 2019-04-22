const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, hometown){
  drivers.forEach(function(driver){
    if (driver.hometown === hometown){
      console.log(driver.name)
    }
  });
}

const driversByRevenue = function(drivers, revenue){
  return drivers.slice().sort(function(driverOne,driverTwo){
    return driverOne - driverTwo;
  });
}
