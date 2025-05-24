class ApiError extends Error {
  constructor(
    message="something went wrong",
    statusCode,
    stack = ''
  ) {
  super(message);
    this.statusCode = statusCode;
    this.stack = stack;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors=this.errors
    if(stack){
      this.stack = stack;
    }
    else{
      error.captureStackTrace(this,this.constructor)
    }
  }
}
export {ApiError}