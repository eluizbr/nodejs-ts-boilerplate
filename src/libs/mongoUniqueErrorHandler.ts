export const mongoUniqueErrorHandler = (err: any) => {
  let result: Array<any> = [];

  for (let key in err.errors) {
    const obj: any = {};

    obj.title = err.errors[key].path;
    obj.type = err.errors[key].name;
    obj.body = err.errors[key].message;
    obj.code = err.errors[key].code;
    obj.status = 409;

    result.push(obj);
  }

  return result;
};
