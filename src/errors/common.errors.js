class UnauthorisedAccess extends Error {  
    constructor (message) {
      super(message)
      Error.captureStackTrace(this, this.constructor);
  
      this.name = this.constructor.name
      this.status = 401
    }
  
    statusCode() {
      return this.status
    }
}

class InvalidAmount extends Error {  
    constructor (message) {
      super(message)
      Error.captureStackTrace(this, this.constructor);
  
      this.name = this.constructor.name
      this.status = 400
    }
  
    statusCode() {
      return this.status
    }
}

class LowCredit extends Error {  
    constructor (message) {
      super(message)
      Error.captureStackTrace(this, this.constructor);
  
      this.name = this.constructor.name
      this.status = 400
    }
  
    statusCode() {
      return this.status
    }
}

class UserExists extends Error {  
    constructor (message) {
      super(message)
      Error.captureStackTrace(this, this.constructor);
  
      this.name = this.constructor.name
      this.status = 404
    }
  
    statusCode() {
      return this.status
    }
}

module.exports = {
    LowCredit,
    UnauthorisedAccess,
    InvalidAmount,
    UserExists    
}