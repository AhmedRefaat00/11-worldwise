/* eslint-disable react/prop-types */
import styles from './CountriesList.module.css'
import Message from './message/Message';
import Spinner from './spinner/Spinner';
import CountryItem from './countryItem/CountryItem';
import { useCities } from '../contexts/CitiesProvider';

function CountriesList() {
    const { cities, isLoading } = useCities()

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
          return [...arr, { country: city.country, emoji: city.emoji }];
        else return arr;
      }, []);

    if (isLoading)
        return <Spinner />
    if (!cities.length)
        return <Message message='Add your first city by clicking on a city on the map' />

    return (
        <ul className={styles.countriesList}>
            {countries.map((country) => <CountryItem key={country.country}  country={country}/>)}
        </ul>
    )
}

export default CountriesList
