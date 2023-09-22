//import { useState, useEffect } from "react";

export const checkLoginStatus = () => {
    const token = localStorage.getItem("authToken");
    const userIsLoggedIn = !!token;

    return userIsLoggedIn
}



