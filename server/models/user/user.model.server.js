var mongoose = require ("mongoose");
var UserSchema = require("./user.schema.server");
var UserModel =  mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findAllUsers = findAllUsers;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId = findUserByFacebookId;
UserModel.findAllFaculty = findAllFaculty;
UserModel.findAllStudents = findAllStudents;


module.exports = UserModel;

function findUserByFacebookId(facebookId) {
  return UserModel.findOne({'facebook.id': facebookId});
}

function createUser(user){
  return UserModel.create(user);
}

function findUserById(userId){
  return UserModel.findById(userId);
}

function findUserByUsername(username){
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});
}

function findAllUsers() {
  return UserModel.find({});
}

function findAllFaculty() {
  return UserModel.find({type: 'FACULTY'});
}

function findAllStudents() {
  return UserModel.find({type: 'STUDENT'});
}

function updateUser(userId, user) {
  return UserModel.findByIdAndUpdate(userId, user);
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}
