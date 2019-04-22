const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers){
  drivers.forEach(function(driver, hometown){
    console.log(driver.hometown === hometown);
  });
}
