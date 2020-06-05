const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Tanya', photo: 'https://sun9-53.userapi.com/c846121/v846121902/e60ad/jPAFoHaGCCY.jpg' },
        { id: 2, name: 'Alex', photo: 'https://sun9-29.userapi.com/c639323/v639323592/3a0c8/3l9NMzf5GwA.jpg' },
        { id: 3, name: 'Owen', photo: 'https://sun9-7.userapi.com/c626929/v626929955/35a8b/XyiKoZdUzII.jpg' },
        { id: 4, name: 'Ann', photo: 'https://sun9-11.userapi.com/c850024/v850024490/125ff8/wOogYeVHxXs.jpg' },
        { id: 5, name: 'Carlie', photo: 'https://sun9-49.userapi.com/c848416/v848416316/11584f/BClLlSomafs.jpg' }
    ],
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Nice to meet you' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yoooooooooy!' }
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            {

                return {
                    ...state,
                    messages: [...state.messages, {
                        id: state.messages + 1,
                        message: state.newMessageText
                    }],
                    newMessageText: ''
                }
            }


        case UPDATE_NEW_MESSAGE_TEXT:
            {
                return {
                    ...state,
                    newMessageText: action.text
                }
            }

        default:
            return state;
    }
};

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageText = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
});


export default dialogsReducer;