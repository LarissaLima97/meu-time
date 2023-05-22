import { useState } from "react";
import DropDown from "../../components/DropDown";
import MainButton from "../../components/MainButton";
import {MenuItem } from "@mui/material";
import Section from "../../components/Section"

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
        }];

        const seasons = [2016,2018,2020];

        const leagues = [{
            "league": {
                "id": 708,
                "name": "Super Cup",
                "type": "Cup",
                "logo": "https://media-3.api-sports.io/football/leagues/708.png"
            },
            "country": {
                "name": "Albania",
                "code": "AL",
                "flag": "https://media-1.api-sports.io/flags/al.svg"
            },
            "seasons": [
                {
                    "year": 2020,
                    "start": "2020-08-31",
                    "end": "2020-08-31",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": false,
                        "players": false,
                        "top_scorers": false,
                        "top_assists": false,
                        "top_cards": false,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                }
            ]
            },

            {"league": {
                "id": 417,
                "name": "Premier League",
                "type": "League",
                "logo": "https://media-3.api-sports.io/football/leagues/417.png"
            },
             "country": {
                "name": "Bahrain",
                "code": "BH",
                "flag": "https://media-1.api-sports.io/flags/bh.svg"
            },
            "seasons": [
                {
                    "year": 2016,
                    "start": "2016-09-08",
                    "end": "2017-05-13",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": true,
                            "lineups": false,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": false,
                        "players": true,
                        "top_scorers": true,
                        "top_assists": true,
                        "top_cards": true,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                }
            ]
            },

            {"league": {
                "id": 149,
                "name": "Second Amateur Division - VFV A",
                "type": "League",
                "logo": "https://media-3.api-sports.io/football/leagues/149.png"
            },
            "country": {
                "name": "Belgium",
                "code": "BE",
                "flag": "https://media-3.api-sports.io/flags/be.svg"
            },
            "seasons": [
                {
                    "year": 2018,
                    "start": "2018-09-01",
                    "end": "2019-05-05",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": false,
                            "lineups": false,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": false,
                        "players": false,
                        "top_scorers": false,
                        "top_assists": false,
                        "top_cards": false,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
            ]
            },

            {"league": {
                "id": 74,
                "name": "Brasileiro Women",
                "type": "League",
                "logo": "https://media-3.api-sports.io/football/leagues/74.png"
            },
            "country": {
                "name": "Brazil",
                "code": "BR",
                "flag": "https://media-3.api-sports.io/flags/br.svg"
            },
            "seasons": [
                {
                    "year": 2016,
                    "start": "2016-01-20",
                    "end": "2016-05-20",
                    "current": false,
                    "coverage": {
                        "fixtures": {
                            "events": false,
                            "lineups": false,
                            "statistics_fixtures": false,
                            "statistics_players": false
                        },
                        "standings": true,
                        "players": false,
                        "top_scorers": false,
                        "top_assists": false,
                        "top_cards": false,
                        "injuries": false,
                        "predictions": true,
                        "odds": false
                    }
                },
            ]
        }
    ];

        const teams = [{
            "team": {
                "id": 694,
                "name": "Tirana",
                "code": "TIR",
                "country": "Albania",
                "founded": 1920,
                "national": false,
                "logo": "https://media-1.api-sports.io/football/teams/694.png"
            },
            "venue": {
                "id": 4,
                "name": "Stadiumi Selman Stërmasi",
                "address": "Rruga Muhamet Gjollesha",
                "city": "Tirana",
                "capacity": 12724,
                "surface": "grass",
                "image": "https://media-1.api-sports.io/football/venues/4.png"
            }
        },
        {
            "team": {
                "id": 5479,
                "name": "Al Najma",
                "code": null,
                "country": "Bahrain",
                "founded": 1943,
                "national": false,
                "logo": "https://media-2.api-sports.io/football/teams/5479.png"
            },
            "venue": {
                "id": 159,
                "name": "Stād al-Bahrayn al-Watanī (Bahrain National Stadium)",
                "address": "Muharraq Avenue",
                "city": "Riffa",
                "capacity": 35580,
                "surface": "grass",
                "image": "https://media-1.api-sports.io/football/venues/159.png"
            }
        },
        {
            "team": {
                "id": 5776,
                "name": "Diegem Sport",
                "code": "DIE",
                "country": "Belgium",
                "founded": 1941,
                "national": false,
                "logo": "https://media-3.api-sports.io/football/teams/5776.png"
            },
            "venue": {
                "id": 4288,
                "name": "Gemeentelijk Sportstadion",
                "address": "Woluwelaan",
                "city": "Diegem",
                "capacity": 5000,
                "surface": "grass",
                "image": "https://media-2.api-sports.io/football/venues/4288.png"
            }
        },
        {
            "team": {
                "id": 1793,
                "name": "Rio Preto W",
                "code": null,
                "country": "Brazil",
                "founded": null,
                "national": false,
                "logo": "https://media-3.api-sports.io/football/teams/1793.png"
            },
            "venue": {
                "id": null,
                "name": null,
                "address": null,
                "city": null,
                "capacity": null,
                "surface": null,
                "image": null
            }
        },

    ];

        const [selectedCountry, setSelectedCountry] = useState("");
        const [selectedSeason, setSelectedSeason] = useState("");
        const [selectedLeague, setSelectedLeague] = useState("");
        const [selectedTeam, setSelectedTeam] = useState("");
        const [disabled, setDisabled] =useState(true);

    return (
        <Section width="70%">
            <h1>Para ter acesso a mais informações de um time</h1>
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

            <h2>Selecione uma liga:</h2>
            <DropDown label="Liga" value={selectedLeague} onChange={(e) => setSelectedLeague(e.target.value)}>
                {leagues.map(league => (
                    <MenuItem value={league.league.name}>{league.league.name}</MenuItem>
                ))}
            </DropDown>

            <h2>Selecione um time:</h2>
            <DropDown label="Time" value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
                {teams.map(team => (
                    <MenuItem value={team.team.name}>{team.team.name}</MenuItem>
                ))}
            </DropDown>
            <MainButton>Buscar</MainButton>
        </Section>
    );
}

export default Search;
