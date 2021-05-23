import { configureStore } from "@reduxjs/toolkit";
import leagueReducer from "./leagueSlice";
import teamReducer from "./teamSlice";
import statReducer from "./statsSlice";
import liveScoreReducer from "./liveScoreSlice";
import standingReducer from "./standingSlice";
import scheduleReducer from "./scheduleSlice";
import singleFixtureReducer from "./singleFixtureSlice";

export const store = configureStore({
	reducer: {
		league: leagueReducer,
		team: teamReducer,
		stat: statReducer,
		livescore: liveScoreReducer,
		standing: standingReducer,
		schedule: scheduleReducer,
		singleFixture: singleFixtureReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;