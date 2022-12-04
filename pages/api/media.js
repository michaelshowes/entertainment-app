import {connectDB} from '../../util/mongodb';

export default async function(req, res) {
  const {db} = await connectDB();

  const data = await db
    .collection('media')
    .find()
    .toArray()
  ;

  res.json(data);
}