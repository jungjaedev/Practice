module.exports = {
  signUp: async (req, res, next) => {
    // Email & Password
    console.log('UsersController.signup() called!');
  },

  signIn: async (req, res, next) => {
    // Generate token
    console.log('UsersController.signIn() called!');
  },

  secret: async (req, res, next) => {
    console.log('UsersController.secret!');
  },
};
