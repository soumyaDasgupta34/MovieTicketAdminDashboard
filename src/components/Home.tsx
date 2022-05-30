import React from "react";
import Navbar from "./Navbar";
import TicketsPerMovie from "../charts/TicketsPerMovie";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { getBookingsPerMovie } from "../redux/dataSlice";
import { visitorData } from "../data/NumberOfVisitors";
import NumberOfVisitors from "../charts/NumberOfVisitors";
import BookingsPerLocation from "../charts/BookingsPerLocation";
import { locationData } from "../data/BookingsPerLocationData";
import { genreData } from "../data/GenreBookingData";
import GenreBookings from "../charts/GenreBookings";
import TicketPrice from "../charts/TicketPrice";
import { ticketPriceData } from "../data/TicketPriceData";
import Widget from "./Widget";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBookingsPerMovie(1));
  }, []);

  const { bookingsPerMovieData } = useAppSelector((state) => state.data);
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 py-3 mb-6 gap-4">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-3 items-center gap-8 justify-center">
        <div className="box-shadow px-8 py-12 bg-white col-span-2 ">
          <GenreBookings data={genreData} />
        </div>
        <div className="box-shadow px-8 py-6 bg-white col-span-2 md:col-span-1">
          {!(bookingsPerMovieData.length === 0) && (
            <TicketsPerMovie data={bookingsPerMovieData} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4 mt-4 ">
        <div className="box-shadow px-8 py-12 bg-white">
          <NumberOfVisitors data={visitorData} />
        </div>
        <div className="box-shadow px-8 py-12 bg-white">
          <BookingsPerLocation data={locationData} />
        </div>
        <div className=" box-shadow px-8 py-12 bg-white">
          <TicketPrice data={ticketPriceData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
