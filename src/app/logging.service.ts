import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
export class LoggingService {
    
    /**
     * log in the console the account status
     * @param status account status
     */
    logStatusChange(status: string): void {
        console.log('A server status changed, new status: ' + status);
    }
}