import { addFriend, fetchFriends } from "../services/friend-service.js";

export async function handleAddFriend(req, res) {
    const result = await addFriend(req.body.username, req.body.friendUsername);
    const status = result.success ? 200 : 400;
    res.status(status).json(result);
}

export function handleRemoveFriend(req, res) {

}

export async function handleFetchFriends(req, res) {
    const result = await fetchFriends(req.body.username);
    const status = result.success ? 200 : 400;
    res.status(status).json(result);
}