import React, { useState, useEffect } from "react";
import "./SearchSection.scss";
import md5 from "md5";
import Footer from "../Footer/footer";

const SearchSection = () => {
  const [inputValue, setInputValue] = useState("Spider-Man (Peter Parker)");
  const [characters, setCharacters] = useState([]);

  const ts = "1681802982683";
  const publicKey = "21a87dc6c1919026f20ae670cb9c5c05";
  const privateKey = "9617e2820fbeafb1a42d5a04754add5f397cba8f";
  const hashValue = md5(ts + privateKey + publicKey);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const searchCharacters = async () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashValue}&name=${inputValue}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    setCharacters(jsonData.data.results);
  };

  const displayWords = (value) => {
    setInputValue(value);
    removeElements();
  };

  const removeElements = () => {
    const listContainer = document.querySelector(".list");
    listContainer.innerHTML = "";
  };

  useEffect(() => {
    searchCharacters();
  }, []);

  useEffect(() => {
    characters.forEach((character) => {
      if (character.comics && character.comics.available > 0) {
        fetchComics(character);
      }
    });
  }, [characters]);

  useEffect(() => {
    const input = document.getElementById("input-box");
    const listContainer = document.querySelector(".list");

    const handleKeyUp = async () => {
      removeElements();
      if (input.value.length < 4) {
        return false;
      }
      const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashValue}&nameStartsWith=${input.value}`;
      const response = await fetch(url);
      const jsonData = await response.json();
      jsonData.data.results.forEach((result) => {
        let name = result.name;
        let div = document.createElement("div");
        div.style.cursor = "pointer";
        div.classList.add("autocomplete-items");
        div.setAttribute("onclick", `displayWords('${name}')`);
        let word = `<b>${name.substr(0, input.value.length)}</b>`;
        word += name.substr(input.value.length);
        div.innerHTML = `<p class="item">${word}</p>`;
        listContainer.appendChild(div);
      });
    };

    input.addEventListener("keyup", handleKeyUp);

    return () => {
      input.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const fetchComics = async (character) => {
    const comicsUrl = `${character.comics.collectionURI}?ts=${ts}&apikey=${publicKey}&hash=${hashValue}`;
    const response = await fetch(comicsUrl);
    const jsonData = await response.json();
    const comics = jsonData.data.results;

    const updatedCharacters = characters.map((char) => {
      if (char.id === character.id) {
        return { ...char, comics: comics };
      }
      return char;
    });

    setCharacters(updatedCharacters);
  };

  return (
    <>
    <section className="search" id="search">
      <div className="hero-bg"></div>
      <div className="search__input">
        <img
          src="./assets/marvel-logo/new-marvel-studios-logo-debuted-marvelstudios-3.png"
          alt=""
        />
        <div className="search-box">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your character name"
            id="input-box"
          />
          <button
            className="button"
            id="submit-button"
            onClick={searchCharacters}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="search__content">
        <div className="list"></div>
        <div className="display-container" id="showContainer">
          {characters.map((character) => (
            <div
              className="card-container"
              key={character.id}
              onClick={() => fetchComics(character)}
            >
              <div className="container-character-image">
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
              </div>
              <div className="character-name">{character.name}</div>
              {character.description && (
                <div className="character-description">
                  {character.description}
                </div>
              )}
              {character.comics && character.comics.length > 0 && (
                <div className="character-comics-container">
                  {character.comics.map((comic) => (
                    <div className="comic-container" key={comic.id}>
                      <img
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt={comic.title}
                        className="comic-image"
                      />
                      <div className="comic-title">{comic.title}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer></Footer>
    </>
  );
};

export default SearchSection;
