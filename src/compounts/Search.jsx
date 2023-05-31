import ClickAwayListener from "react-click-away-listener";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Search({ list }) {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const filteredList = list.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <ClickAwayListener
      onClickAway={() => {
        setFocus(false);
      }}
    >
      <div className="header__content__search">
        <div className="header__content__search__bar">
          <input
            type="text"
            className="header__content__search__bar__input"
            placeholder="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onFocus={() => {
              setFocus(true);
            }}
          />
          <button className="header__content__search__bar__button">
            Search
          </button>
        </div>
        {focus && (
          <div className="header__content__search__selection">
            {filteredList.length === 0 ? (
              <div className="header__content__search__selection__entry">
                No results found
              </div>
            ) : (
              filteredList.map((item) => {
                return (
                  <Link
                    to={`/details/${item.name}`}
                    state={{
                      product: item,
                    }}
                    className="header__content__search__selection__entry"
                    onClick={() => {
                      setFocus(false);
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })
            )}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}
