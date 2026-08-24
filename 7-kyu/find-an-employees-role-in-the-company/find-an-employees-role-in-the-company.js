const findEmployeesRole = name => {
  const [firstName, lastName] = name.split(" ");
  return employees.find(e => e.firstName === firstName && e.lastName === lastName)?.role || "Does not work here!";
};