const { check}  = require("express-validator");
const validatorError = require("./validatorError");

exports.createCourseV = [
  check("info")
    .notEmpty()
    .withMessage("info are required"),

  check("requirements")
    .notEmpty()
    .withMessage("requirements are required")
    .isString()
    .withMessage("requirements must be a string"),

  check("instractor")
   .notEmpty()
   .withMessage("instractor are required"),

  check("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),
  validatorError,
];
exports.getCoureV = [
  check("id").isMongoId().withMessage("ID does not exist"),

  validatorError,
];
exports.deleteCourseV = [
  check("id").isMongoId().withMessage("ID does not exist"),
  validatorError,
];

exports.updateCourseV = [
  check("id").isMongoId().withMessage("ID does not exist"),

  check("info")
    .notEmpty()
    .withMessage("info are required"),

  check("requirements")
    .notEmpty()
    .withMessage("requirements are required")
    
    .isString()
    .withMessage("requirements must be a string"),

  check("instractor")
   .notEmpty()
   .withMessage("instractor are required"),
 

  check("price")
   .optional()
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),
  validatorError,
];