class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends CustomError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

class ValidationError extends CustomError {
  constructor(message = "Validation Error") {
    super(message, 400);
  }
}

class AuthorizationError extends CustomError {
  constructor(message) {
    super(message, 403);
  }
}

module.exports = {
  CustomError,
  NotFoundError,
  ValidationError,
  AuthorizationError,
};
