const { mongoose } = require('../connection');

const { Schema } = mongoose;

const recordSchema = new Schema({
  key: { type: String },
  value: { type: String },
  counts: [{ type: Number }],
}, {
  timestamps: true,
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
