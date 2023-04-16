import User from './user';
import Librarian from './librarian';

/**
 * Represents a reference request
 */
 class ReferenceRequest {
   constructor(public user: User, public librarian: Librarian, public inquiry: string){}
}

export default ReferenceRequest;