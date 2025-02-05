export async function registerUser(currentUserData) {
    const registrationResponse = await fetch("http://localhost:3001/account/register", {
        method: 'POST',
        body: JSON.stringify({
            email: currentUserData.email,
            username: currentUserData.username,
            password: currentUserData.password,
            encodedKeyPair: currentUserData.encodedKeyPair
        }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });
    const registrationData = await registrationResponse.json();
    if (registrationData.success === true) {
        return ({ username: registrationData.username, accessToken: registrationData.accessToken });
    }
    return { success: false, duplicate: registrationData.duplicate };
}