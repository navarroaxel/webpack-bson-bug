import * as bson from 'bson';
const {ObjectID} = bson.default;

/**
 * Returns a MongoDB compliant id.
 */
const generateId = () => ObjectID().toString();

export default generateId;
