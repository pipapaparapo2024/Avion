export default (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details.map(detail => detail.message).join(', ')
    });
  }
  next();
};