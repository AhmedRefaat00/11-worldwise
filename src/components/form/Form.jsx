
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./Form.module.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import ButtonBack from "../ButtonBack";
import { useURLLocation } from "../../hooks/useURLLocation";
import Message from './../message/Message';
import Spinner from "../spinner/Spinner";
import DatePicker from "react-datepicker";
import { useCities } from "../../contexts/CitiesProvider";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [erorr, setError] = useState('')
  const [emoji, setEmoji] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const{createCity}=useCities()
  const navigate = useNavigate()

  const [lat, lng] = useURLLocation();

  useEffect(() => {
    async function fetchCity() {
      try {
        setIsLoading(true)
        setError('')
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`)
        const data = await res.json();
        console.log(data)
        if (data.countryCode === '')
          throw new Error("That doesn't seem to be a city. Click somewhere else 😉")
        setCityName(data.locality || data.city || '')
        setCountry(data.countryName)
        setEmoji(data.countryCode)

      }
      catch (e) {
        setError(e.message)

      }
      finally {
        setIsLoading(false)

      }

    }
    fetchCity()
  }, [lat, lng])

  const handleSubmit= async (e)=>{
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      date,
      notes,
      emoji,
      position: { lat, lng },
    };

    await createCity(newCity);
    navigate("/app/cities");

  }

  if(isLoading)
    return <Spinner />

  if (erorr)
    return <Message message={erorr} />


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker id="date" selected={date} onChange={(date) => setDate(date)} />
        </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type='primary'  >Add</Button>
        <ButtonBack />

      </div>
    </form>
  );
}

export default Form;
