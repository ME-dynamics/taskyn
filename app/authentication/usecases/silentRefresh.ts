import { autorun } from "mobx";
import { AppState } from "react-native"
import { authState } from "../entities"

let tokenTimer: NodeJS.Timer; 

let refreshTimer: NodeJS.Timer;

function silentRenewToken() {
    if(authState.tokenExpiresAt) {
        if(authState.tokenExpiresAt < Date.now()) {
            // refresh
        } else {
            // time to refresh the token is : time token expires minus now minus two seconds
            // refresh request is going to be done two seconds before token expires 
            const timeToRefresh =  authState.tokenExpiresAt - Date.now() - 2000; 
            tokenTimer = setTimeout(() => {
                // refresh token
            }, timeToRefresh)
        }
        
    }
    
}

function silentRenewRefreshToken() {
    if(authState.refreshExpiresAt) {
        if(authState.refreshExpiresAt < Date.now()) {
            // refresh
        } else {
             // time to refresh the token is : time token expires minus now minus two seconds
            // refresh request is going to be done two seconds before token expires
            const timeToRefresh =  authState.refreshExpiresAt - Date.now() - 2000; 
            refreshTimer = setTimeout(() => {
                // refresh token
            }, timeToRefresh)

        }
    }
}
const tokenDisposer = autorun(silentRenewToken);
const refreshDisposer = autorun(silentRenewRefreshToken);


AppState.addEventListener("change", function changeState(state) {
    if(state === "background") {
        clearTimeout(tokenTimer);
        clearTimeout(refreshTimer);
    }
})