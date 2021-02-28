let userDetails = { name: "", email: "", balance: "" };

export const getUserDetails = () => {
  return userDetails;
};
export const setUserDetails = (name, email, balance) => {
  userDetails.name = name;
  userDetails.email = email;
  userDetails.balance = balance;
};
