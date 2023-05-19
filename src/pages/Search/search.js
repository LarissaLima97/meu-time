import { useState } from "react";
import DropDown from "../../components/DropDown";
import Section from "../../components/Section"
import {MenuItem } from "@mui/material";


const Search = () => {
    const countries = [
        {
            "name": "Albania",
            "code": "AL",
            "flag": "https://media-3.api-sports.io/flags/al.svg"
        },
        {
            "name": "Bahrain",
            "code": "BH",
            "flag": "https://media-2.api-sports.io/flags/bh.svg"
        },
        {
            "name": "Belgium",
            "code": "BE",
            "flag": "https://media-2.api-sports.io/flags/be.svg"
        },
        {
            "name": "Brazil",
            "code": "BR",
            "flag": "https://media-3.api-sports.io/flags/br.svg"
        },
        {
            "name": "Bulgaria",
            "code": "BG",
            "flag": "https://media-2.api-sports.io/flags/bg.svg"
        }];

        const seasons = [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];

        const leagues = [{
            "league": {
                "id": 4,
                "name": "Euro Championship",
                "type": "Cup",
                "logo": "https://media-2.api-sports.io/football/leagues/4.png"
            }
            },
            {"league": {
                "id": 158,
                "name": "Provincial - Luxembourg",
                "type": "League",
                "logo": "https://media-3.api-sports.io/football/leagues/158.png"
            }
            },
            {"league": {
                "id": 555,
                "name": "Supercupa",
                "type": "Cup",
                "logo": "https://media-3.api-sports.io/football/leagues/555.png"
            }
            },
            {"league": {
                "id": 328,
                "name": "Esiliiga A",
                "type": "League",
                "logo": "https://media-3.api-sports.io/football/leagues/328.png"
            }},]

        const [selectedCountry, setSelectedCountry] = useState("");
        const [selectedSeason, setSelectedSeason] = useState("");

    return (
        <Section width="70%">
            <h2>Selecione um país:</h2>
            <DropDown label="País" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                {countries.map(country => (
                    <MenuItem key={country.code} value={country.name}>{country.name}</MenuItem>
                ))}
            </DropDown>

            <h2>Selecione uma temporada:</h2>
            <DropDown label="Temporada" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
                {seasons.map(seasons => (
                    <MenuItem value={seasons}>{seasons}</MenuItem>
                ))}
            </DropDown>
        </Section>
    );
}

export default Search;
