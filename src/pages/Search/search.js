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
            "name": "Algeria",
            "code": "DZ",
            "flag": "https://media-3.api-sports.io/flags/dz.svg"
        },
        {
            "name": "Andorra",
            "code": "AD",
            "flag": "https://media-3.api-sports.io/flags/ad.svg"
        },
        {
            "name": "Azerbaidjan",
            "code": "AZ",
            "flag": "https://media-1.api-sports.io/flags/az.svg"
        },
        {
            "name": "Bahrain",
            "code": "BH",
            "flag": "https://media-2.api-sports.io/flags/bh.svg"
        },
        {
            "name": "Bangladesh",
            "code": "BD",
            "flag": "https://media-1.api-sports.io/flags/bd.svg"
        },
        {
            "name": "Barbados",
            "code": "BB",
            "flag": "https://media-2.api-sports.io/flags/bb.svg"
        },
        {
            "name": "Belarus",
            "code": "BY",
            "flag": "https://media-3.api-sports.io/flags/by.svg"
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

    return (
        <Section width="70%">
            <h2>Selecione um país:</h2>
            <DropDown label="País">
                {countries.map(country => (
                    <MenuItem>{country.name}</MenuItem>
                ))}
            </DropDown>
        </Section>
    );
}

export default Search;
