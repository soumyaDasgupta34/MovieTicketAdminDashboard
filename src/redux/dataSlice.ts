import { createSlice } from "@reduxjs/toolkit";
import { getBookingData } from "../data/BookingPerMovie";

export interface DataState {
  bookingsPerMovieData: Array<any>;
}

const initialState: DataState = {
  bookingsPerMovieData: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getBookingsPerMovieAction: (state, action) => {
      state.bookingsPerMovieData = action.payload;
    },
  },
});

export const getBookingsPerMovie = (week: number) => {
  return async (dispatch: any) => {
    dispatch(getBookingsPerMovieAction(getBookingData(week)));
  };
};

const { actions, reducer } = dataSlice;
export const { getBookingsPerMovieAction } = actions;
export default reducer;
