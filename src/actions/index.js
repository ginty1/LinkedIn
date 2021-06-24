import { auth, provider, storage } from "../database/Firebase";
import { SET_USER, SET_LOADING_STATE, GET_ARTICLES } from "./actionType";
import db from "../database/Firebase";

//function that is trying to initiate some change that the data store holds
export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

//function that is trying to initiate some change that the data store holds
export const setLoading = (status) => ({
  type: SET_LOADING_STATE,
  status: status,
});

//function that is trying to initiate some change that the data store holds
export const getArticles = (payload) => ({
  //form type
  type: GET_ARTICLES,
  //data
  payload: payload,
});

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        //data receiver
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

//getting user auth details

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}
export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}
export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));

    if (payload.image != "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);

      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();

          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}
export function getArticlesAPI() {
  return (dispatch) => {
    let payload;

    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getArticles(payload));
      });
  };
}
