import authService from "../utils/authService.js";

//Handle key creation
const getKey = (req, res) => {
  const [API_KEY, id] = authService.generateKey();
  authService.storeKey(id, API_KEY);
  authService.validateKey(API_KEY);
  return res.status(200).json({
    message: "You have created a new API key. USAGE => headers : {'x-api-key': 'key'}",
    ["x-api-key"]: API_KEY,
  });
};

export default { getKey };
