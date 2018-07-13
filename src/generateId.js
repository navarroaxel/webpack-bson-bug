import {ObjectID} from 'bson';

/**
 * Returns a MongoDB compliant id.
 */
const generateId = () => ObjectID().toString();

export default generateId;
