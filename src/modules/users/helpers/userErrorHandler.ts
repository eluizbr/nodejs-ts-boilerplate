export const userNotFound = () => {
  return {
    statusCode: 404,
    message: 'User not found'
  };
};

export const userRemoved = () => {
  return {
    statusCode: 200,
    message: 'User removed'
  };
};
