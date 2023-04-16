import ReferenceRequest from './reference-request';
import User from './user';
import Librarian from './librarian';

/**
 * Represents the virtual reference service
 */
 class ReferenceService {
   private requests: ReferenceRequest[] = [];
   private librarians: Librarian[] = [];
   addRequest(user: User, inquiry: string): void {
     const request = new ReferenceRequest(user, this.getAvailableLibrarian(), inquiry);
     this.requests.push(request);
   }
   assignLibrarian(request: ReferenceRequest, librarian: Librarian): void {
     request.librarian = librarian;
   }
   provideAssistance(request: ReferenceRequest): void {
     // Send message to librarian and user
   }
   getAvailableLibrarian(): Librarian {
     // Check for available librarian
     // Return librarian or throw Error if no one is available
     return new Librarian('', '', []);
   }
}

export default ReferenceService;