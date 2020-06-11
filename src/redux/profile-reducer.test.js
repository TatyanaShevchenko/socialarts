import profileReducer, {addPost, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        { id: 1, message: "It's my first post", likesCount: 15 },
        { id: 2, message: 'Ololo trololo', likesCount: 22 },
        { id: 3, message: 'Hi! How are you?', likesCount: 35 },
        { id: 4, message: 'React', likesCount: 100500 },
        { id: 5, message: 'Ahahahaa', likesCount: 33 },
        { id: 6, message: "Super message", likesCount: 14 }
    ]
};

it('count of posts should be incremented', () => {
    // 1. test data
    let action = addPost("Tanya learns front-end");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectations
   expect (newState.posts.length).toBe(7);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPost("Tanya learns front-end");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectations

    expect (newState.posts[6].message).toBe("Tanya learns front-end");
});

it('after deleting  posts count should be decremented', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectations
    expect (newState.posts.length).toBe(5);
});

it(`after deleting  posts count shouldn't be decremented if postId is incorrect`, () => {
    // 1. test data
    let action = deletePost(10);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectations
    expect (newState.posts.length).toBe(6);
});